"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";

// const AuthProvider = async ({ children }) => {
//   const session = await getServerSession();
//   return <SessionProvider session={session}>{children}</SessionProvider>;
// };
const AuthProvider = async ({ children }) => {
  const session = await getServerSession();
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;

// "use client";
// import React from "react";
// import { SessionProvider } from "next-auth/react";

// export function  AuthProvider ({ children }) {
//   return (
//     <SessionProvider>{children}</SessionProvider>
//     )
// };
