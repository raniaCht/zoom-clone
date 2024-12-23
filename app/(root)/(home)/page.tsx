import ListHomeCard from "@/components/ListHomeCard";
import MeetingCard from "@/components/MeetingCard";
import Link from "next/link";
import React from "react";

function Home() {
  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
  );
  return (
    <section className="w-full min-h-screen flex flex-col gap-6 p-5 md:p-10">
      <div className="w-full h-[330px] bg-hero bg-no-repeat bg-cover bg-center rounded-2xl ">
        <div className="flex flex-col justify-between h-full py-6 ps-6">
          <div className="glassmorphism py-2 px-3 w-fit font-thin text-sm">
            Upcoming Meeting at: 12:30 PM
          </div>
          <div>
            <h2 className="text-5xl font-extrabold">{time}</h2>
            <p className="text-xl">{date}</p>
          </div>
        </div>
      </div>
      <ListHomeCard />
      <div className="flex  flex-col gap-7">
        <div className="flex-between w-full">
          <h1 className="text-lg md:text-4xl font-bold">
            Today’s Upcoming Meetings
          </h1>
          <Link href="/upcoming">See all</Link>
        </div>
        {/* <div className="grid lg:grid-cols-2 gap-4">
          <MeetingCard />
          <MeetingCard />
        </div> */}
      </div>
    </section>
  );
}

export default Home;
