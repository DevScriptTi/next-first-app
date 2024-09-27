import Link from "next/link";

export default function layout({children}) {
  return (
    <div className="h-[4rem] ">
        <nav className="flex gap-3 h-full px-4 *:h-full *:flex *:items-center">
            <Link href={'/dashboard'}>Home</Link>
            <Link href={'/dashboard/cars'}>Cars</Link>
            <Link href={'/'}>Leave</Link>
        </nav>
        {children}
    </div>
  )
}
