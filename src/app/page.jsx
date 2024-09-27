import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-[4rem] ">
        <nav className="flex gap-3 h-full px-4 *:h-full *:flex *:items-center">
          <Link href={"/"}>Home</Link>
          <Link href={"/dashboard"}>Dashboard</Link>
          <Link href={"/login"}>Login</Link>
        </nav>
      </div>
      <div className="text-white w-full h-screen flex items-center justify-center bg-orange-500 text-[5rem] font-bold">
        Home
      </div>
    </>
  );
}
