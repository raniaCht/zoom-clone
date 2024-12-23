"use client";
import React, { useState } from "react";
import HomeCard, { homeCardType } from "@/components/HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import DatePicker from "react-datepicker";

const initialValues = {
  dateTime: new Date(),
  description: "",
  link: "",
};

function ListHomeCard() {
  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  >(undefined);
  const router = useRouter();
  const { user } = useUser();
  const client = useStreamVideoClient();
  const [values, setValues] = useState<{
    dateTime: Date | null;
    description: string;
    link: string;
  }>(initialValues);
  const [callDetail, setCallDetail] = useState<Call>();
  const { toast } = useToast();

  const createMeeting = async () => {
    if (!user || !client) return;

    try {
      const callType = "default";
      const callId = crypto.randomUUID();
      const call = client.call(callType, callId);
      if (!call) throw new Error("failed to start  call");
      console.log(values);

      const startsAt =
        values.dateTime?.toISOString() || new Date().toISOString();

      const description = values.description || "Instant Meeting";
      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });
      setCallDetail(call);
      toast({
        title: "Meeting created successfully",
      });
      if (!values.description) {
        router.push(`/meeting/${call.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetail?.id}`;

  const homeCards: homeCardType[] = [
    {
      bg: "bg-orange-600",
      description: "Setup a new recording",
      icon: "/icons/add-meeting.svg",
      title: "New Meeting",
      onClick: () => setMeetingState("isInstantMeeting"),
    },
    {
      bg: "bg-sky-600",
      description: "via invitation link",
      icon: "/icons/join-meeting.svg",
      title: "Join Meeting",
      onClick: () => setMeetingState("isJoiningMeeting"),
    },
    {
      bg: "bg-violet-600",
      description: "Plan your meeting",
      icon: "/icons/schedule.svg",
      title: "Schedule Meeting",
      onClick: () => setMeetingState("isScheduleMeeting"),
    },
    {
      bg: "bg-yellow-500",
      description: "Meeting recordings",
      icon: "/icons/Video.svg",
      title: "View Recordings",
      onClick: () => router.push("/recordings"),
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {homeCards.map((card, i) => (
        <HomeCard
          bg={card.bg}
          description={card.description}
          icon={card.icon}
          title={card.title}
          key={i}
          onClick={card.onClick}
        />
      ))}
      {!callDetail ? (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          close={() => setMeetingState(undefined)}
          handleClick={createMeeting}
          title="Create Meeting"
          buttonText="Create Meeting"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="description">Add a description</label>
            <Textarea
              rows={2}
              id="description"
              className="bg-dark-3 border-none focus-visible:ring-offset-0 focus-visible:ring-0 resize-none overflow-y-hidden"
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
              value={values.description}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="date">Select Date & Time</label>
            <DatePicker
              showTimeSelect
              selected={values.dateTime}
              onChange={(e) => setValues({ ...values, dateTime: e })}
              className="bg-dark-3 w-full rounded-lg p-2"
              dateFormat="MMM d, yyyy hh:mm aa"
            />
          </div>
        </MeetingModal>
      ) : (
        <MeetingModal
          isOpen={meetingState === "isScheduleMeeting"}
          close={() => setMeetingState(undefined)}
          handleClick={() => {
            navigator.clipboard.writeText(meetingLink);
            toast({ title: "Link copied" });
            // setMeetingState(undefined);
          }}
          title="Create Meeting"
          image="/icons/checked.svg"
          buttonIcon="/icons/copy.svg"
          buttonText="Copy Meeting Link"
        ></MeetingModal>
      )}
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        close={() => setMeetingState(undefined)}
        handleClick={createMeeting}
        title="Start a new meeting"
        buttonText="Create a new meet"
      />
    </div>
  );
}

export default ListHomeCard;
