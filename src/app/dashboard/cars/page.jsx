import Link from "next/link";

export default function cars() {
  return (
        <div className=' w-full  grid grid-cols-5 gap-8 px-8'>
          <Link href={'/dashboard/cars/Toyota'} className="bg-slate-900 rounded-xl p-4 flex flex-col gap-4">
            <h1 className="text-xl font-sans">Toyota</h1>
            <div
              className="h-52 w-full bg-slate-700 rounded-lg"
            >

            </div>
          </Link>
          <Link href={'/dashboard/cars/Mazda'} className="bg-slate-900 rounded-xl p-4 flex flex-col gap-4">
            <h1 className="text-xl font-sans">Mazda</h1>
            <div
              className="h-52 w-full bg-slate-700 rounded-lg"
            >

            </div>
          </Link>
          <Link href={'/dashboard/cars/Mercedes'} className="bg-slate-900 rounded-xl p-4 flex flex-col gap-4">
            <h1 className="text-xl font-sans">Mercedes</h1>
            <div
              className="h-52 w-full bg-slate-700 rounded-lg"
            >

            </div>
          </Link>
          <Link href={'/dashboard/cars/Megane'} className="bg-slate-900 rounded-xl p-4 flex flex-col gap-4">
            <h1 className="text-xl font-sans">Megane</h1>
            <div
              className="h-52 w-full bg-slate-700 rounded-lg"
            >

            </div>
          </Link>
          <Link href={'/dashboard/cars/Fiat'} className="bg-slate-900 rounded-xl p-4 flex flex-col gap-4">
            <h1 className="text-xl font-sans">Fiat</h1>
            <div
              className="h-52 w-full bg-slate-700 rounded-lg"
            >

            </div>
          </Link>
        </div>
  )
}
