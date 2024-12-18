import { useCall, VideoPreview } from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";

function MeetingSetup() {
  const [isMicCamToggledOn, setIsMicCamToggledOn] = useState(false);

  const call = useCall();

  useEffect(() => {
    if (isMicCamToggledOn) {
      call?.camera.disable();
      call?.microphone.disable();
    } else {
      call?.camera.enable();
      call?.microphone.enable();
    }
  }, [isMicCamToggledOn, call?.camera, call?.microphone]);
  return (
    <div className="w-full h-screen flex-center flex-col gap-3">
      <h3 className="text-xl">setup the meeting</h3>
      <VideoPreview />
    </div>
  );
}

export default MeetingSetup;
