import { Button } from "@/components/ui/button";
import PersonCard from "./PersonCard";

export default function YouMightLike() {
    const profiles = [
        { name: "IIT Bombay", handle: "@iitBombay", imgSrc: "https://res.cloudinary.com/dfu2zsjpw/image/upload/v1725187053/anubwpsfwxkwhqsbme2x.png" },
        { name: "PDEU, Gandhinagar", handle: "@pdeuGandhinagar", imgSrc: "https://res.cloudinary.com/dfu2zsjpw/image/upload/v1725187054/dtctq7tpf2f6bun5onco.png" },
        { name: "IIIT Vadodara", handle: "@iiitvadodara", imgSrc: "https://res.cloudinary.com/dfu2zsjpw/image/upload/v1725187053/ffbhyvtsqvoo8yysf5re.png" },
    ];
    return (
        <div className="flex flex-col mt-2">
            <h2 className="text-xl font-bold mb-4">Other Institutions</h2>
            <div className="bg-zinc-900 text-white p-4 rounded-lg w-[400px] border border-zinc-700">
                <div className="space-y-4">
                    {profiles.map((profile, index) => (
                        <PersonCard key={index} index={index} profile={profile} />
                    ))}
                </div>
                <div className="mt-4">
                    <Button variant="link" className="text-blue-400">Show more</Button>
                </div>
            </div>
        </div>
    );
}
