
export default function Alumni() {
    const people = [
        {
            name: "Rohan Patel",
            description: "Software Engineer @Google",
            mutualConnections: "72 other mutual connections",
            imageSrc: "src/assets/images/p1.jpg",
        },
        {
            name: "Aryan Mehta",
            description: "Data Scientist | AI Enthusiast",
            mutualConnections: "65 other mutual connections",
            imageSrc: "src/assets/images/p2.jpg",
        },
        {
            name: "Meera Singh",
            description: "Product Manager @Meta",
            mutualConnections: "80 other mutual connections",
            imageSrc: "src/assets/images/p3.jpg",
        },
        {
            name: "Arjun Verma",
            description: "UX Designer @Adobe",
            mutualConnections: "45 other mutual connections",
            imageSrc: "src/assets/images/p4.jpg",
        },
        {
            name: "Karan Bhatt",
            description: "Cybersecurity Analyst @Microsoft",
            mutualConnections: "60 other mutual connections",
            imageSrc: "src/assets/images/p5.jpg",
        },
        {
            name: "Samay Gupta",
            description: "DevOps Engineer @Amazon",
            mutualConnections: "70 other mutual connections",
            imageSrc: "src/assets/images/p6.jpg",
        },
    ];

    return (
        <div className="bg-zinc-950 text-white p-4 rounded-xl border border-zinc-700">
            <h2 className="text-xl font-semibold mb-4">Alumni's from Nirma University</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {people.map((person, index) => (
                    <div
                        key={index}
                        className="cursor-pointer hover:bg-zinc-700 bg-zinc-800 p-4 rounded-lg shadow-lg flex items-center"
                    >
                        <div className="flex-shrink-0">
                            <img src={person.imageSrc} className="size-16 rounded-full bg-gray-700"></img>
                        </div>
                        <div className="ml-4">
                            <div className="font-bold">{person.name}</div>
                            <div className="text-sm text-gray-400">{person.description}</div>
                            <div className="text-xs text-gray-500">{person.mutualConnections}</div>
                            <button className="mt-2 bg-orange-500 hover:bg-orange-700 text-white py-1 px-3 rounded-full text-sm">
                                Connect
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
