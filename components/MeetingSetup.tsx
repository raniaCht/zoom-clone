import {
  DeviceSelectorAudioInput,
  DeviceSelectorVideo,
  DeviceSettings,
  useCall,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

function MeetingSetup({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) {
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
      <div className="flex-center gap-4 h-16">
        <label className="flex-center gap-2">
          <input
            type="checkbox"
            checked={isMicCamToggledOn}
            onChange={(e) => setIsMicCamToggledOn(e.target.checked)}
          />
          Join with mic and camera off
        </label>
      </div>

      <DeviceSelectorVideo visualType="dropdown" title="Choose the camera" />
      <DeviceSelectorAudioInput
        visualType="dropdown"
        title="Choose the microphone"
      />

      <Button
        className="bg-green-600"
        onClick={() => {
          call?.join();
          setIsSetupComplete(true);
        }}
      >
        Join the meeting
      </Button>
    </div>
  );
}

export default MeetingSetup;
