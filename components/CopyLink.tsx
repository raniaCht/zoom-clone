"use client";
import React from "react";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

function CopyLink({ link, text }: { link: string; text: string }) {
  const { toast } = useToast();

  return (
    <button
      className="flex-center gap-2 bg-dark-3 py-3 px-4 rounded-lg"
      onClick={() => {
        navigator.clipboard.writeText(link);
        toast({ title: "Link copied" });
      }}
    >
      <Image src="/icons/copy.svg" width={14} height={14} alt="" />
      <span>Copy invitation</span>
    </button>
  );
}

export default CopyLink;
