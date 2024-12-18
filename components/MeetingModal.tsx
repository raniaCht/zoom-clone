import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function MeetingModal({
  isOpen,
  close,
  title,
  handleClick,
}: {
  isOpen: boolean;
  close: () => void;
  title: string;
  handleClick: () => void;
}) {
  return (
    isOpen && (
      <Dialog open={isOpen} onOpenChange={close}>
        <DialogContent className="sm:max-w-[425px] bg-dark-2">
          <DialogTitle>{title}</DialogTitle>
          <button
            className="bg-blue-1 py-2 rounded-lg mt-2 outline-none"
            onClick={handleClick}
          >
            Continue
          </button>
        </DialogContent>
      </Dialog>
    )
  );
}

export default MeetingModal;
