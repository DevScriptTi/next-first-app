import Link from "next/link";
import React from "react";

export default function layout({ children }) {
  return (
    <>
      <div className="h-[4rem] ">
        <nav className="flex gap-3 h-full px-4 *:h-full *:flex *:items-center">
          <Link href={"/"}>Home</Link>
          <Link href={"/dashboard"}>Dashboard</Link>
          <Link href={"/login"}>Login</Link>
        </nav>
      </div>
      {children}
    </>
  );
}
