import CallList from "@/components/CallList";
import React from "react";

function Previous() {
  return (
    <section className="w-full min-h-screen flex flex-col gap-6 p-5 md:p-10">
      <h1 className="text-3xl">Previous Meetings</h1>
      <CallList type="endedCall" />
    </section>
  );
}

export default Previous;
