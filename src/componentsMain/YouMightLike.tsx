import { Button } from "@/components/ui/button";
import PersonCard from "./PersonCard";

export default function YouMightLike() {
    const profiles = [
        { name: "IIT Bombay", handle: "@TezpurUniv", imgSrc: "src/assets/images/iitbombay.png" },
        { name: "PDEU, Gandhinagar", handle: "@deeppatel0586", imgSrc: "src/assets/images/pdeu.png" },
        { name: "IIIT Vadodara", handle: "@lizbayleyphysio", imgSrc: "src/assets/images/iitvadodara.png" },
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
