
export default function car(props) {
  return (
    <>
      <div className="bg-slate-900 rounded-xl p-4 flex flex-col gap-4">
        <h1 className="text-xl font-sans">{props.params.car}</h1>
        <div className="h-52 w-full bg-slate-700 rounded-lg"></div>
      </div>
    </>
  );
}
