import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";
import { PiShareFat } from "react-icons/pi";
import CommentsCard from "./CommentsCard";
import MoreOptions from "./shadcnuiWrappers/MoreOptions";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export default function Post({ post }: { post: any }) {
    const [isLike, setIsLike] = useState(false);
    const [isCommentOpen, setIsCommentOpen] = useState(false);

    return (
        <div className="">
            <div className="p-2 bg-zinc-900 rounded-lg px-4 border border-zinc-700">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src={post?.profileImg} alt="" className="rounded-full size-12" />
                        <div>
                            <div className="font-bold">{post?.name}</div>
                            <div className="font-extralight text-sm">{post?.timestamp}</div>
                        </div>
                    </div>
                    <div>
                        <MoreOptions />
                    </div>
                </div>
                <div className="mt-2">
                    {post?.content}
                </div>
                <div className="mt-3">
                    <img src={post?.image} alt="" className="rounded-lg h-[400px] object-cover w-full" />
                </div>
                <div className="flex mt-3 justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <div className="cursor-pointer flex items-center gap-2 font-medium" onClick={() => setIsLike((prev) => !prev)}>
                            {!isLike && <IoHeartOutline className="size-7 text-red-500" />}
                            {isLike && <IoHeartSharp className="size-7 text-red-500" />}
                            <div>{post?.likes}</div>
                        </div>
                        <div className="cursor-pointer flex items-center gap-3 font-medium">
                            <FaRegComment className="size-6 text-white" />
                            <div>{post?.commentsCount}</div>
                        </div>
                        <div className="cursor-pointer">
                            <PiShareFat className="size-6 text-white" />
                        </div>
                    </div>
                    <div className="mr-1 cursor-pointer">
                        {!isLike && <MdBookmarkBorder className="size-7 text-white" />}
                        {isLike && <MdBookmark className="size-7 text-white" />}
                    </div>
                </div>
                <div className="mt-2">
                    <Collapsible>
                        <CollapsibleTrigger onClick={() => setIsCommentOpen((prev) => !prev)} className="bg-zinc-800 w-full justify-between hover:bg-zinc-700 flex p-2 rounded-xl">
                            <div>Comments....</div>
                            <div>
                                {!isCommentOpen && <IoMdArrowDropdown className="size-5" />}
                                {isCommentOpen && <IoMdArrowDropup className="size-5" />}
                            </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <div className="flex flex-col gap-4 mt-5">
                                {post?.comments.map((profile: any, index: number) => (
                                    <CommentsCard key={index} index={index} profile={profile} />
                                ))}
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </div>
        </div>
    );
}
