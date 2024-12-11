import Image from "next/image";
import React from "react";

function MeetingCard() {
  return (
    <div className="bg-dark-1 rounded-lg flex flex-col py-10 px-8">
      <Image src="/icons/upcoming.svg" width={32} height={32} alt="" />
      <h2 className="text-2xl font-bold mt-6">
        Team Sync: Sprint Planning & Updates
      </h2>
      <p>March 15, 2024 - 10:00 AM</p>
      <div className="flex-between flex-wrap gap-2 mt-8">
        <div className="flex justify-start items-center">
          <span className="flex-center w-11 h-11 border border-dark-2 bg-dark-1 p-[2px] overflow-hidden rounded-full">
            <Image
              src="/images/avatar-1.jpeg"
              width={47}
              height={47}
              alt=""
              className="w-full h-full rounded-full"
            />
          </span>
          <span className="flex-center -ms-4 w-11 h-11 border border-dark-2 bg-dark-1 p-[2px] overflow-hidden rounded-full">
            <Image
              src="/images/avatar-2.jpeg"
              width={47}
              height={47}
              alt=""
              className="w-full h-full rounded-full"
            />
          </span>
          <span className="flex-center -ms-4 w-11 h-11 border border-dark-2 bg-dark-1 p-[2px] overflow-hidden rounded-full">
            <Image
              src="/images/avatar-3.png"
              width={47}
              height={47}
              alt=""
              className="w-full h-full rounded-full"
            />
          </span>
          <span className="flex-center -ms-4 w-11 h-11 border border-dark-2 bg-dark-1 p-[2px] overflow-hidden rounded-full">
            <Image
              src="/images/avatar-4.png"
              width={47}
              height={47}
              alt=""
              className="w-full h-full rounded-full"
            />
          </span>
          <span className="flex-center -ms-4 w-11 h-11 border border-dark-2 bg-dark-1 p-[2px] overflow-hidden rounded-full">
            <Image
              src="/images/avatar-5.png"
              width={47}
              height={47}
              alt=""
              className="w-full h-full rounded-full"
            />
          </span>
          <span className="flex-center -ms-4 w-11 h-11 border border-dark-2/70 bg-dark-1 p-[2px] overflow-hidden rounded-full">
            <p>+9</p>
          </span>
        </div>
        <div className="flex justify-end items-center gap-2">
          <button className="bg-sky-1 py-3 px-4 rounded-lg">Start</button>
          <button className="flex-center gap-2 bg-dark-3 py-3 px-4 rounded-lg">
            <Image src="/icons/copy.svg" width={14} height={14} alt="" />
            <span>Copy invitation</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MeetingCard;
