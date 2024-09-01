import { Button } from '@/components/ui/button';
import MoreOptions from './shadcnuiWrappers/MoreOptions';

export default function WhatsHappening() {
    const trends = [
        { category: "Trending in Education", topic: "#EdTechRevolution", posts: "12.5K posts" },
        { category: "Education", topic: "Scholarships", posts: "45K posts" },
        { category: "Learning · Trending", topic: "#LifelongLearning", extra: "Trending with #OnlineCourses" },
        { category: "Trending in Education", topic: "#STEMEducation" }
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
