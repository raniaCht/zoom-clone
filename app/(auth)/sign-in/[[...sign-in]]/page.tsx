import React from "react";
import { SignIn } from "@clerk/nextjs";

function SignInPage() {
  return (
    <main className="flex-center min-h-screen">
      <SignIn />
    </main>
  );
}

export default SignInPage;
