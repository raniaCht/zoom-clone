import Image from "next/image";
import React from "react";
import { avatarImages } from "@/constants";
import CopyLink from "./CopyLink";

interface MeetingCardProps {
  title: string;
  date: string;
  icon: string;
  isPreviousMeeting?: boolean;
  buttonIcon?: string;
  buttonText?: string;
  handleClick: () => void;
  link: string;
}

function MeetingCard({
  title,
  date,
  icon,
  isPreviousMeeting,
  buttonIcon,
  buttonText,
  handleClick,
  link,
}: MeetingCardProps) {
  return (
    <div className="bg-dark-1 rounded-lg flex flex-col py-10 px-8">
      <Image src={icon} width={32} height={32} alt="" />
      <h2 className="text-2xl font-bold mt-6">{title}</h2>
      <p>{date}</p>
      <div className="flex-between flex-wrap gap-2 mt-8">
        <div className="flex justify-start items-center">
          {avatarImages.map((avatar) => (
            <span className="flex-center -ms-4 w-11 h-11 border border-dark-2 bg-dark-1 p-[2px] overflow-hidden rounded-full">
              <Image
                src={avatar}
                width={47}
                height={47}
                alt=""
                className="w-full h-full rounded-full"
              />
            </span>
          ))}
          <span className="flex-center -ms-4 w-11 h-11 border border-dark-2/70 bg-dark-1 p-[2px] overflow-hidden rounded-full">
            <p>+9</p>
          </span>
        </div>
        {!isPreviousMeeting && (
          <div className="flex justify-end items-center gap-2">
            <button
              className="bg-sky-1 py-3 px-4 rounded-lg flex-center gap-1"
              onClick={handleClick}
            >
              {buttonText}
              {buttonIcon && (
                <Image src={buttonIcon} width={14} height={14} alt="" />
              )}
            </button>
            <CopyLink link={link} text="Copy invitation" />
          </div>
        )}
      </div>
    </div>
  );
}

export default MeetingCard;
