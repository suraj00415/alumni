import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useEffect, useState } from 'react'
import { FaBookmark, FaCalendarCheck, FaHome } from 'react-icons/fa'
import { GiTrophy } from 'react-icons/gi'
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io'
import { IoStatsChart } from 'react-icons/io5'
import { PiNetworkDuotone } from 'react-icons/pi'
import { RiAccountCircleFill } from 'react-icons/ri'
import { SiCodementor } from 'react-icons/si'
import { TbSettings2 } from 'react-icons/tb'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useNavigate } from "react-router-dom"

export default function SideBar() {
    const [scrollAreaHeight, setScrollAreaHeight] = useState(0);
    const [isCommentOpen, setIsCommentOpen] = useState(true)
    const [isCommentOpen2, setIsCommentOpen2] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const updateHeight = () => {
            const navbarHeight = 64; // height of the navbar (h-16) in pixels
            const windowHeight = window.innerHeight;
            setScrollAreaHeight(windowHeight - navbarHeight);
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);

        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return (
        <ScrollArea className="w-64 bg-zinc-900 p-5 border-r border-zinc-700" style={{ height: scrollAreaHeight }}>
            <div className="">
                <Collapsible open={isCommentOpen}>
                    <CollapsibleTrigger className=' ' onClick={() => setIsCommentOpen((prev) => !prev)}>
                        <div className='mt-5 hover:bg-zinc-800 p-1 rounded-lg flex items-center pr-5 font-bold text-lg'>
                            {!isCommentOpen && <IoMdArrowDropright className='size-7 text-orange-400' />}
                            {isCommentOpen && <IoMdArrowDropdown className="size-7 text-orange-400" />}
                            <div>Main Menu</div>
                        </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className='pl-5'>
                        <div className='flex items-center gap-2 hover:bg-zinc-800 rounded-lg cursor-pointer p-2' onClick={() => navigate('/institute')}>
                            <FaHome className='size-5 text-orange-400' />
                            <div>Home</div>
                        </div>
                        <div className='flex items-center gap-2 hover:bg-zinc-800 rounded-lg cursor-pointer p-2'>
                            <SiCodementor className='size-5 text-orange-400' />
                            <div>Mentorship</div>
                        </div>
                        <div className='flex items-center gap-2 hover:bg-zinc-800 rounded-lg cursor-pointer p-2'>
                            <PiNetworkDuotone className='size-5 text-orange-400' />
                            <div>Networks</div>
                        </div>
                        <div className='flex items-center gap-2 hover:bg-zinc-800 rounded-lg cursor-pointer p-2'>
                            <GiTrophy className='size-5 text-orange-400' />
                            <div>Success Stories</div>
                        </div>
                        <div className='flex items-center gap-2 hover:bg-zinc-800 rounded-lg cursor-pointer p-2'>
                            <FaCalendarCheck className='size-5 text-orange-400' />
                            <div>Event</div>
                        </div>
                    </CollapsibleContent>
                </Collapsible>
                <Collapsible open={isCommentOpen2}>
                    <CollapsibleTrigger className=' ' onClick={() => setIsCommentOpen2((prev) => !prev)}>
                        <div className='mt-5 hover:bg-zinc-800 p-1 rounded-lg flex items-center pr-5 font-bold text-lg'>
                            {!isCommentOpen2 && <IoMdArrowDropright className='size-7 text-orange-400' />}
                            {isCommentOpen2 && <IoMdArrowDropdown className="size-7 text-orange-400" />}
                            <div>My Menu</div>
                        </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent className='pl-5'>
                        <div className='flex items-center gap-2 hover:bg-zinc-800 rounded-lg cursor-pointer p-2'>
                            <RiAccountCircleFill className='size-7 text-orange-400' />
                            <div>Profile</div>
                        </div>
                        <div className='flex items-center gap-2 hover:bg-zinc-800 rounded-lg cursor-pointer p-2'>
                            <FaBookmark className='size-5 text-orange-400' />
                            <div>Saved</div>
                        </div>
                        <div className='flex items-center gap-2 hover:bg-zinc-800 rounded-lg cursor-pointer p-2'>
                            <IoStatsChart className='size-5 text-orange-400' />
                            <div>My Activity</div>
                        </div>
                        <div className='flex items-center gap-2 hover:bg-zinc-800 rounded-lg cursor-pointer p-2'>
                            <TbSettings2 className='size-5 text-orange-400' />
                            <div>Settings</div>
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </div>
            <div className="absolute bottom-3">
                <div className="flex items-center gap-3">
                    <div className="">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="rounded-full border-2 border-orange-500">
                                <img src="https://res.cloudinary.com/dfu2zsjpw/image/upload/v1725187054/qz4t9inrgnr4ojh4rcal.jpg" alt="" className="size-12 rounded-full" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>Subscription</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="text-zinc-200 font-bold">
                        <div className="">Suraj Shah</div>
                        <div className="text-xs"><span className="text-orange-400">@</span>suraj123</div>
                    </div>
                </div>
            </div>
        </ScrollArea >
    )
}
