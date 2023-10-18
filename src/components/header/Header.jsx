import Link from "next/link"
import { MdOutlineLocalLibrary } from "react-icons/md"

export default function Header(){
  return (
    <div className="bg-gradient-to-r from-slate-600 via-sky-800 to-sky-400 md:px-28 py-5 px-3">
      <div className="flex items-center justify-between">
        <Link href={"/"} passHref>
          <div className="flex items-center text-gray-100 gap-3">
          <MdOutlineLocalLibrary size={30} />
            <h1 className=" text-2xl md:text-3xl font-bold ">Synapsis Test</h1>
          </div>
        </Link>

        <Link href={"/user"} passHref>
          <button className="ring-1 ring-gray-100 rounded-full px-6 py-2 md:px-8 md:text-lg md:h-10 md:py-0 text-gray-100 font-bold hover:bg-[#25568f]">
            User
          </button>
        </Link>
      </div>
    </div>
  );
};