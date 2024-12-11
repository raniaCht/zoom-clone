import Image from "next/image";
import React from "react";

export type homeCardType = {
  icon: string;
  title: string;
  description: string;
  url: string;
  bg: string;
};

function HomeCard({ icon, title, description, url, bg }: homeCardType) {
  return (
    <div className="flex flex-col">
      <div
        className={`flex-1 w-full aspect-square p-5 rounded-lg flex gap-10 flex-col justify-between items-start ${bg}`}
      >
        <div className="glassmorphism-2 p-2 w-10 h-10 flex-center">
          <Image src={icon} alt="" width={32} height={32} />
        </div>
        <div>
          <h3 className="text-lg lg:text-2xl font-bold">{title}</h3>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
