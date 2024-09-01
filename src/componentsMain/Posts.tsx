import Post from "./Post";
import { posts } from "../data/posts"


function Posts() {
    return (
        <div>
            {
                posts.map((post) => <Post post={post} />)
            }
        </div>
    );
}

export default Posts;
