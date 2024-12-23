import CallList from "@/components/CallList";
import React from "react";

function Recordings() {
  return (
    <section className="w-full min-h-screen flex flex-col gap-6 p-5 md:p-10">
      <h1 className="text-3xl">Meeting Recordings</h1>
      <CallList type="recodingCall" />
    </section>
  );
}

export default Recordings;
