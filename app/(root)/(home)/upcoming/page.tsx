import CallList from "@/components/CallList";
import React from "react";

function Upcoming() {
  return (
    <section className="w-full min-h-screen flex flex-col gap-6 p-5 md:p-10">
      <h1 className="text-3xl">Upcoming Meetings</h1>
      <CallList type="upcomingCall" />
    </section>
  );
}

export default Upcoming;
