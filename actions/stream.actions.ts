"use server";
import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

const STREAM_API_KEY = process.env.NEXT_PUBLIC_STREAM_KEY;
const STREAM_SECRET_KEY = process.env.STREAM_SECRET_KEY;
export async function tokenProvider() {
  const user = await currentUser();

  if (!user) throw new Error("user is not authenticated");
  if (!STREAM_API_KEY) throw new Error("stream key is missing");
  if (!STREAM_SECRET_KEY) throw new Error("stream secret key is missing");

  const streamClient = new StreamClient(STREAM_API_KEY, STREAM_SECRET_KEY);

  const exp = Math.floor(Date.now() / 1000) + 3600;
  const iat = Math.floor(Date.now() / 1000) - 60;
  const token = streamClient.generateUserToken({ user_id: user.id, exp, iat });
  return token;
}
