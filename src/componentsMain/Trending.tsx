import { Button } from '@/components/ui/button';
import MoreOptions from './shadcnuiWrappers/MoreOptions';

export default function WhatsHappening() {
    const trends = [
        { category: "Trending in India", topic: "#BoycottNetflix", posts: "1,066 posts" },
        { category: "Trending", topic: "Arrest", posts: "149K posts" },
        { category: "Entertainment · Trending", topic: "#TheGOAT", extra: "Trending with #Matta" },
        { category: "Trending in India", topic: "#BEEF" },
    ];

    return (
        <div className='mt-3'>
            <h2 className="text-xl font-bold mb-4">What's happening</h2>
            <div className="bg-zinc-900 text-white p-4 rounded-lg  mt-6 border border-zinc-700">
                <div className="space-y-4">
                    {trends.map((trend, index) => (
                        <div key={index} className="flex justify-between">
                            <div>
                                <p className="text-sm text-gray-400">{trend.category}</p>
                                <h3 className="font-semibold">{trend.topic}</h3>
                                {trend.posts && <p className="text-sm text-gray-400">{trend.posts}</p>}
                                {trend.extra && <p className="text-sm text-gray-400">{trend.extra}</p>}
                            </div>
                            <MoreOptions />
                        </div>
                    ))}
                </div>
                <div className="">
                    <Button variant="link" className="text-blue-400">Show more</Button>
                </div>
            </div>
        </div>
    );
}
