import { useState } from "react"
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5"

type CommentProfile = {
    handle: string,
    imgSrc: string,
    name?: string
}
export default function CommentsCard({ index, profile }: { index: number, profile: CommentProfile }) {
    const [isLike, setIsLike] = useState(false)

    return (
        <div key={index} className="flex items-center justify-between gap-2 border-b border-zinc-700 pb-2">
            <div className="flex items-center gap-2">
                <img src={profile.imgSrc} className="text-gray-400 size-10 rounded-full bg-white" />
                <div className="flex flex-col">
                    <div className="flex items-center gap-3" >
                        <div className="text-sm text-white font-medium ">{profile.handle}</div>
                        <div className="text-xs">3 months ago</div>
                    </div>
                    <div>
                        Nice Post. Please make video twice
                    </div>
                    <div>
                        <div className="flex gap-4 items-center">
                            <div className="cursor-pointer flex items-center gap-2 font-medium" onClick={() => setIsLike((prev) => !prev)}>
                                {!isLike && <IoHeartOutline className='size-4 text-red-500' />}
                                {isLike && <IoHeartSharp className='size-4 text-red-500' />}
                                <div className="text-sm">102</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
