import { CiSearch } from "react-icons/ci";
import ButtonComp from "./Button";


export default function Navbar() {
    return (
        <div className="flex justify-between items-center h-16 bg-zinc-800 px-3 sticky top-0 left-0 right-0 z-50 border-b  border-zinc-700">
            <div className="bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent text-2xl font-extrabold">
                Alumni
            </div>
            <div className="w-[60%]">
                <div className=" p-2 rounded-3xl w-full bg-zinc-900 border border-zinc-700 flex items-center gap-4">
                    <CiSearch className="size-6 text-white" />
                    <input type="text" placeholder="Search your networks" className="bg-zinc-900 w-full outline-none text-white" />
                </div>
            </div>
            <div>
                <ButtonComp color="bg-orange-500" textColor="text-white" name="Logout" />
            </div>
        </div>
    )
}
