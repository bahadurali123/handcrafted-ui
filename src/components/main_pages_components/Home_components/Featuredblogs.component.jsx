import { useSelector } from "react-redux";
import { BlogList } from "../../index";

const FeaturedBlogs = () => {
    const postsdata = useSelector((state) => state.blog);
    const posts = postsdata.posts.postsData;

    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    const shufflePosts = shuffleArray(posts);
    const filteredposts = shufflePosts.slice(0, 4);

    return (
        <div className="featured-blogs">
            <h2>Featured Blogs</h2>
            <div className="featured-blogs-list">
                <BlogList blogs={filteredposts} />
            </div>
        </div>
    );
};

export default FeaturedBlogs;