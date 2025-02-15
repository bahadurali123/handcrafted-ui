import { useDispatch } from 'react-redux';
import BlogService from '../../../services/blog.sercice';
import { BlogForm } from '../index';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../../store/slices/blog.slice';

const AddBlog = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleAddBlog = async (data) => {
        // console.log("Blog Added:", data);
        const formData = new FormData();
        formData.append("title", data.title); // Append text field
        formData.append("slug", data.slug); // Append text field
        formData.append("metaDesc", data.metaDesc); // Append text field
        formData.append("content", data.content); // Append text field
        formData.append("image", data.image[0]); // Append file input (first file)
        formData.append("categoryId", data.categoryId); // Append text field
        formData.append("publishedAt", data.publishedAt); // Append text field
        formData.append("status", data.status); // Append text field

        // console.log("FormData", formData);

        const response = await BlogService.createPost(formData);
        if (response) {
            const postData = response.data;
            if (postData) {
                dispatch(addPost({ postData }));
            }
            navigate(`/admin/blogs`)
        }
    };

    return (
        <div>
            <BlogForm onSubmit={handleAddBlog} />
        </div>
    );
};

export default AddBlog;