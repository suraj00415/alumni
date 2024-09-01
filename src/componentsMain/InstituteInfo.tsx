import { FaBell } from "react-icons/fa";
import ButtonComp from "./Button";
import MoreOptions from "./shadcnuiWrappers/MoreOptions";
import PersonalInfoTabs from "./PersonalInfoTabs";

export default function InstituteInfo() {
    return (
        <>
            <div className="bg-zinc-900 w-[60%] rounded-xl border">
                {/* <div className="flex items-center justify-between px-5 py-2">
                    <div className="hover:bg-zinc-600 rounded-full  cursor-pointer">
                        <IoIosArrowBack className="size-9 " />
                    </div>
                    <div className="text-xl font-bold">
                        Nirma University
                    </div>
                </div> */}
                <div className="w-full relative">
                    <div>
                        <img src="src/assets/images/nirma1.jpg" alt="" className="w-full h-72 object-cover rounded-xl" />
                    </div>
                    <div className="absolute -bottom-8 left-5 bg-white rounded-full p-2 ">
                        <img src="src/assets/images/nirmalogo.png" alt="" className="size-24 " />
                    </div>
                </div>
                <div className="flex justify-end gap-4 mt-2 items-center">
                    <div><MoreOptions isBorder /></div>
                    <div className="p-1 rounded-full border border-zinc-600 cursor-pointer hover:bg-zinc-600"><FaBell className="size-6  " /></div>
                    <div className="mr-3">
                        <ButtonComp name="Following" color="bg-orange-500" textColor="" />
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <h1 className="text-xl font-bold">Nirma University</h1>
                    <p className="text-gray-400">@NirmaUniTweets</p>
                    <p className="mt-2 text-sm">The Official Twitter account of Nirma University, Ahmedabad, India.</p>

                    <div className="mt-2 text-sm text-gray-400">
                        <div className="flex items-center justify-center gap-2">
                            <span role="img" aria-label="Education">🎓</span> Education
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <span role="img" aria-label="Location">📍</span> Ahmedabad City, India
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <span role="img" aria-label="Link">🔗</span> <a href="https://nirmauni.ac.in" className="text-blue-400">nirmauni.ac.in</a>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <span role="img" aria-label="Joined">🗓</span> Joined August 2015
                        </div>
                    </div>
                    {/* Following and Followers */}
                    <div className="mt-4 flex justify-around text-gray-400 mb-10">
                        <span><span className="font-bold text-white">45</span> Following</span>
                        <span><span className="font-bold text-white">2,345</span> Followers</span>
                    </div>
                    {/* Follow Button */}
                </div>
                <div className="border-t border-zinc-700 pt-3">
                    <PersonalInfoTabs />
                </div>
            </div>
        </>
    )
}
