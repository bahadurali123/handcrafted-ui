import { useParams } from "react-router-dom"
// import BlogService from "../../../../services/blog.sercice";
import BlogService from "../../../services/blog.sercice";
import { useEffect, useState } from "react";

console.log("Blog");
function Blog() {
    const [Blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const data = await BlogService.getById(slug); // Fetch all users
                setBlog(data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <ul>
                <h1>{Blog.title}</h1>
                <p>{Blog.content}</p>
                <p>{Blog.image}</p>
                {/* <img src={Blog.image} alt="image" /> */}
            </ul>
        </div>
    );
}

export default Blog;