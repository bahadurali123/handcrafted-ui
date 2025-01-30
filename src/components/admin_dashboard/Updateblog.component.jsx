import { BlogForm } from '../index';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BlogService from '../../../services/blog.sercice';
import { updatePost } from '../../store/slices/blog.slice';

const UpdateBlog = () => {
    const blogId = useParams();
    const dispatch = useDispatch();
    const postsdata = useSelector((state) => state.blog);
    const posts = postsdata.posts.postsData;
    console.log("Blog posts: ", posts, blogId);

    const post = posts.filter(item => item._id === blogId.blogId);
    console.log("Blog Post for edit is: ", post)

    const handleUpdateBlog = async (data) => {
        console.log("Blog Updated:", data);
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("slug", data.slug);
        formData.append("metaDesc", data.metaDesc);
        formData.append("content", data.content);
        formData.append("image", data.image[0]);
        formData.append("categoryId", data.categoryId);
        formData.append("publishedAt", data.publishedAt);
        formData.append("status", data.status);

        console.log("FormData", formData);
        try {
            const response = await BlogService.updateBlog(post[0]._id, formData);
            console.log("In Update Blog: ", response);
            console.log("In Update Blog data: ", response.data);
            if (response) {
                const blogData = response.data;
                if (blogData) {
                    dispatch(updatePost({ blogData }));
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            {post ? (
                <BlogForm
                    isEdit={true}
                    initialValues={post}
                    onSubmit={handleUpdateBlog}
                />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UpdateBlog;