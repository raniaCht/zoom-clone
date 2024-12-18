"use client";
import React, { useState } from "react";
import HomeCard, { homeCardType } from "@/components/HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/hooks/use-toast";

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
  const [values, setValues] = useState(initialValues);
  const [callDetail, setCallDetail] = useState<Call>();
  const { toast } = useToast();

  const startMeeting = async () => {
    if (!user || !client) return;

    try {
      const callType = "default";
      const callId = crypto.randomUUID();
      const call = client.call(callType, callId);
      if (!call) throw new Error("failed to start  call");
      const startsAt =
        values.dateTime.toISOString() || new Date(Date.now()).toISOString();
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
      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        close={() => setMeetingState(undefined)}
        handleClick={startMeeting}
        title="Start a new meeting"
      />
    </div>
  );
}

export default ListHomeCard;
