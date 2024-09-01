import Post from "./Post";
import { posts } from "../data/posts"
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";


function Posts() {
    const [scrollAreaHeight, setScrollAreaHeight] = useState(0);
    useEffect(() => {
        const updateHeight = () => {
            const navbarHeight = 64;
            const windowHeight = window.innerHeight;
            setScrollAreaHeight(windowHeight - navbarHeight);
        };
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return (
        <ScrollArea className="w-[50%] overflow-y-auto" style={{ height: scrollAreaHeight }}>
            <div className="p-2 pr-3 flex flex-col gap-5">
                {
                    posts.map((post) => <Post post={post} />)
                }
            </div>
        </ScrollArea>
    );
}

export default Posts;
