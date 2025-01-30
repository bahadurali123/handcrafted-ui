import { Blog, BlogComments } from "../index";
import '../../styles/Ui/Blog.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BlogPage = () => {
    const slug = useParams();
    const postsdata = useSelector((state) => state.blog);
    const posts = postsdata.posts.postsData;
    const post = posts.filter(item => item.slug === slug.slug);
    const postData = post[0];
    const commentdata = useSelector((state) => state.comment);
    const allComments = commentdata.comments.CommentsData;
    const comments = allComments.filter(item => item.blogId === postData._id && item.status === "Approved");

    return (
        <div className="blog-page">
            <div>
                <Blog
                    title={postData.title}
                    imageSrc={postData.image}
                    date={postData.publishedAt}
                    content={postData.content}
                />
            </div>
            <BlogComments data={comments} blogId={postData._id} />
        </div>
    );
};

export default BlogPage;