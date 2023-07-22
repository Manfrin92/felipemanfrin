export function Input() {
  return (
    <div className="">
      <label className="block uppercase tracking-wide text-slate-50 text-xs font-bold mb-2">
        First Name
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id="grid-first-name"
        type="text"
        placeholder="Jane"
      />
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
  );
}
