import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { cn } from "@/lib/utils";

function MeetingModal({
  isOpen,
  close,
  title,
  handleClick,
  children,
  image,
  buttonIcon,
  buttonText,
}: {
  isOpen: boolean;
  close: () => void;
  title: string;
  handleClick: () => void;
  children?: ReactNode;
  image?: string;
  buttonIcon?: string;
  buttonText: string;
}) {
  return (
    isOpen && (
      <Dialog open={isOpen} onOpenChange={close}>
        <DialogContent className="sm:max-w-[425px] bg-dark-2">
          {image && (
            <div className="flex-center">
              <Image alt="" src={image} width={72} height={72} />
            </div>
          )}
          <DialogTitle className={cn({ "text-center": image })}>
            {title}
          </DialogTitle>
          {children}
          <button
            className="bg-blue-1 py-2 rounded-lg mt-2 outline-none flex-center gap-1"
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image src={buttonIcon} height={18} width={18} alt="" />
            )}
            {buttonText}
          </button>
        </DialogContent>
      </Dialog>
    )
  );
}

export default MeetingModal;
