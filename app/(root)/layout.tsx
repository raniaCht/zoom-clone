import React, { ReactNode } from "react";

function RootLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}

export default RootLayout;
