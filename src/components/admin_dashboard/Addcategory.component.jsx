import { useDispatch } from 'react-redux';
import categoryService from '../../../services/category.service';
import { CategoryForm } from '../index';
import { addNewCategory } from '../../store/slices/category.slice';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleAddCategory = async (data) => {
        // console.log("Category Added:", data);
        const formData = new FormData();
        formData.append("name", data.name); // Append text field
        formData.append("parentId", data.parentId); // Append text field
        formData.append("image", data.image[0]); // Append file input (first file)

        // console.log("FormData", formData);
        // Here, you can send the data to the backend to add the category
        try {
            const response = await categoryService.createCategory(formData);
            // console.log("In Add Category: ", response);
            // console.log("In Add Category data: ", response.data);
            if (response) {
                const categoryData = response.data;
                if (categoryData) {
                    dispatch(addNewCategory({ categoryData }));
                }
                navigate("/admin/categories");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <CategoryForm onSubmit={handleAddCategory} />
        </div>
    );
};

export default AddCategory;