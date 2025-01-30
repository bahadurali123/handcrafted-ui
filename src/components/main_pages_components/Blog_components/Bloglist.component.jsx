import { useNavigate } from "react-router-dom";
import { Button } from "../../index";

const BlogList = ({ blogs }) => {

    function getPlainText(richText) {
        // Create a temporary DOM element to hold the rich text content
        const tempElement = document.createElement('div');
        tempElement.innerHTML = richText;

        // Extract the plain text from the rich text
        const plainText = tempElement.textContent || tempElement.innerText || '';

        // Return the first 50 characters of the plain text
        return `${plainText.substring(0, 80)}...`;
    }

    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                // <BlogItem key={blog._id} title={blog.title} description={blog.content} img={blog.image} />
                <BlogItem key={blog._id} title={blog.title} slug={blog.slug} description={getPlainText(blog.content)} img={blog.image} />
            ))}
        </div>
    );
};

const BlogItem = ({ title, slug, description, img }) => {
    const navigate = useNavigate();

    const blogIs = () => {
        navigate(`/blog/${slug}`);
    }
    return (
        <div className="blog-item">
            <img src={img} alt={title} className="blog-img" />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="read-more-btn">
                <Button onClick={blogIs} type="buttobn">Read More</Button>
            </div>
        </div>
    );
};

export default BlogList;