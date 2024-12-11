import HomeCard, { homeCardType } from "@/components/HomeCard";
import MeetingCard from "@/components/MeetingCard";
import Link from "next/link";
import React from "react";

function Home() {
  const now = new Date();

  const homeCards: homeCardType[] = [
    {
      bg: "bg-orange-600",
      description: "Setup a new recording",
      icon: "/icons/add-meeting.svg",
      title: "New Meeting",
      url: "/",
    },
    {
      bg: "bg-sky-600",
      description: "via invitation link",
      icon: "/icons/join-meeting.svg",
      title: "Join Meeting",
      url: "/",
    },
    {
      bg: "bg-violet-600",
      description: "Plan your meeting",
      icon: "/icons/schedule.svg",
      title: "Schedule Meeting",
      url: "/",
    },
    {
      bg: "bg-yellow-500",
      description: "Meeting recordings",
      icon: "/icons/Video.svg",
      title: "View Recordings",
      url: "/",
    },
  ];

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
      <div className="flex-between max-sm:flex-col gap-6">
        {homeCards.map((card, i) => (
          <HomeCard
            bg={card.bg}
            description={card.description}
            icon={card.icon}
            title={card.title}
            url={card.url}
            key={i}
          />
        ))}
      </div>
      <div className="flex  flex-col gap-7">
        <div className="flex-between w-full">
          <h1 className="text-lg md:text-4xl font-bold">
            Today’s Upcoming Meetings
          </h1>
          <Link href="/upcoming">See all</Link>
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <MeetingCard />
          <MeetingCard />
        </div>
      </div>
    </section>
  );
}

export default Home;
