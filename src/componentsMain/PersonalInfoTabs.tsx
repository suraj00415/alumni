import { useState } from "react";
import Post from "./Post";
import Alumni from "./Alumni";
import { posts } from "@/data/posts";

type Tab = {
    name: "alumni" | "posts" | "donation"
}

export default function PersonalInfoTabs() {
    const [tab, setTab] = useState<Tab>({
        name: "alumni"
    });

    const handleTabClick = (tabName: Tab["name"]) => {
        setTab({ name: tabName });
    };

    return (
        <>
            <div className='flex items-center justify-around '>
                <div className="cursor-pointer" onClick={() => handleTabClick("alumni")}>
                    <div className={` ${tab.name === "alumni" ? " font-bold" : ""}`}>
                        Alumni
                    </div>
                    {tab.name === "alumni" && <div className="bg-orange-500 w-full h-1 rounded-full"></div>}
                </div>
                <div className="cursor-pointer" onClick={() => handleTabClick("posts")}>
                    <div className={` ${tab.name === "posts" ? " font-bold" : ""}`}>
                        Posts
                    </div>
                    {tab.name === "posts" && <div className="bg-orange-500 w-full h-1 rounded-full"></div>}
                </div>
                <div className="cursor-pointer" onClick={() => handleTabClick("donation")}>
                    <div className={` ${tab.name === "donation" ? " font-bold" : ""}`}>
                        Donation Received
                    </div>
                    {tab.name === "donation" && <div className="bg-orange-500 w-full h-1 rounded-full"></div>}
                </div>
            </div>
            {tab.name === "posts" && (
                <div className="m-5 mt-10 flex flex-col gap-5">
                    {
                        posts.map((post) => <Post post={post} />)
                    }
                </div>
            )}
            {tab.name === "alumni" && (
                <div className="m-5 mt-10 ">
                    <Alumni />
                </div>
            )}
        </>
    );
}
