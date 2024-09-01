import ButtonComp from "./Button";
type CommentProfile = {
    handle: string,
    imgSrc: string,
    name?: string
}
export default function PersonCard({ index, profile }: { index: number, profile: CommentProfile }) {
    return (
        <div key={index} className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
                <img src={profile.imgSrc} className="text-gray-400 size-16 rounded-full bg-white" />
                <div className="break-words w-[70%]" >
                    <div className="font-semibold text-balance break-words ">{profile.name}</div>
                    <div className="text-sm text-gray-400 ">{profile.handle}</div>
                </div>
            </div>
            <ButtonComp name="Follow" color="bg-white" textColor="text-black" />
        </div>)
}
