"use client";
import { useParams } from "next/navigation";
import React from "react";

function page() {
  const { id } = useParams();
  return <div>meeting: {id}</div>;
}

export default page;
