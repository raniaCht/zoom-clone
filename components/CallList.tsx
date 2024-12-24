"use client";

import { useGetCalls } from "@/hooks/useGetCalls";
import { Call, CallRecording } from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import MeetingCard from "./MeetingCard";
import { useRouter } from "next/navigation";

function CallList({
  type,
}: {
  type: "endedCall" | "upcomingCall" | "recodingCall";
}) {
  const router = useRouter();
  const { endedCalls, upcomingCalls, recordingCalls, isLoading } =
    useGetCalls();

  const [recordings, setRecordings] = useState<CallRecording[]>([]);

  const setupCalls = () => {
    switch (type) {
      case "endedCall":
        return { calls: endedCalls, title: "No Previous Calls" };
      case "recodingCall":
        return { calls: recordings, title: "No Recordings" };

      case "upcomingCall":
        return { calls: upcomingCalls, title: "No Upcoming Calls" };

      default:
        return { calls: [], title: "" };
    }
  };

  const { calls, title } = setupCalls();

  useEffect(() => {
    const fetchRecordings = async () => {
      const callData = await Promise.all(
        recordingCalls?.map((meeting) => meeting.queryRecordings()) ?? []
      );

      const recordings = callData
        .filter((call) => call.recordings.length > 0)
        .flatMap((call) => call.recordings);

      setRecordings(recordings);
    };

    if (type === "recodingCall") {
      fetchRecordings();
    }
  }, [type, recordingCalls]);

  if (isLoading) return <Loader />;
  return calls.length > 0 ? (
    <section className="grid lg:grid-cols-2 gap-4">
      {calls.map((meeting: Call | CallRecording, index) => (
        <MeetingCard
          key={index}
          title={
            (meeting as Call).state?.custom?.description ||
            (meeting as CallRecording).filename?.substring(0, 20) ||
            "No Description"
          }
          date={
            (meeting as Call).state?.startsAt?.toLocaleString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            }) ||
            new Date(
              (meeting as CallRecording).start_time?.toLocaleString()
            ).toLocaleString("en-US", {
              month: "short",
              day: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })
          }
          handleClick={
            type === "recodingCall"
              ? () => router.push(`${(meeting as CallRecording).url}`)
              : () => router.push(`/meeting/${(meeting as Call).id}`)
          }
          icon={
            type == "endedCall"
              ? "/icons/previous.svg"
              : type == "recodingCall"
              ? "/icons/recordings.svg"
              : "/icons/upcoming.svg"
          }
          link={
            type === "recodingCall"
              ? (meeting as CallRecording).url
              : `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${
                  (meeting as Call).id
                }`
          }
          buttonIcon={type === "recodingCall" ? "/icons/play.svg" : undefined}
          buttonText={type === "recodingCall" ? "Play" : "Start"}
          isPreviousMeeting={type == "endedCall"}
        />
      ))}
    </section>
  ) : (
    <div className="flex-center mt-[25%]">
      <h1 className="text-5xl">{title}</h1>
    </div>
  );
}

export default CallList;
