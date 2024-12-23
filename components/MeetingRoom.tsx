import { cn } from "@/lib/utils";
import {
  CallControls,
  CallParticipantsList,
  PaginatedGridLayout,
  SpeakerLayout,
} from "@stream-io/video-react-sdk";
import { Users } from "lucide-react";
import React, { useState } from "react";

type CallLayoutType = "speaker-left" | "speaker-right" | "grid";

function MeetingRoom() {
  const [layout, setLayout] = useState<CallLayoutType>("speaker-left");
  const [showParticipants, setShowParticipants] = useState(true);

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;

      case "speaker-right":
        return <SpeakerLayout participantsBarPosition={"left"} />;

      default:
        return <SpeakerLayout participantsBarPosition={"right"} />;
    }
  };
  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className=" flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>
        <div
          className={cn("h-[calc(100vh - 86px)] hidden ml-2", {
            block: showParticipants,
          })}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      <div className="flex-center fixed bottom-0 gap-5 w-full">
        <CallControls />
        <button
          className="bg-[#19232d] w-9 h-9 flex-center rounded-full"
          onClick={() => setShowParticipants(!showParticipants)}
        >
          <Users size={20} color="#eff0f1" />
        </button>
      </div>
    </section>
  );
}

export default MeetingRoom;
