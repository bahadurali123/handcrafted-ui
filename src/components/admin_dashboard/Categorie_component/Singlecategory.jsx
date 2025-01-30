import { useState } from "react";
import { Button } from "../../index";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import categoryService from "../../../../services/category.service";
import { deleteCategory } from "../../../store/slices/category.slice";

// Component for rendering a single category row
const SingleCategory = ({ category }) => {
    console.log("category Item: ", category);
    const categoriesdata = useSelector((state) => state.category);
    const categories = categoriesdata.categories.categoriessData;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showActions, setShowActions] = useState(false);

    const UpdateExistingCategory = () => {
        navigate(`/admin/category/update/${category._id}`);
        setShowActions(!showActions)
    }
    const DeleteExistingCategory = async () => {
        try {
            const response = await categoryService.deleteCategory(category._id);
            if (response) {
                if (response.data) {
                    const categoryId = category._id;
                    dispatch(deleteCategory({ categoryId }));
                }
            }
        } catch (error) {
            console.log(error);
        }
        setShowActions(!showActions)
    }
    return (
        <tr>
            <td><img src={category.image} alt={category.name} className="product-image" /></td>
            <td>{category.name}</td>
            <td>{categories.find(item => item._id === category.parentId)?.name || ""}</td>
            <td>
                <button className="actions-button" onClick={() => setShowActions(!showActions)}>
                    <i className="bi bi-three-dots-vertical"></i>
                </button>
                {showActions && (
                    <div className="actions-popup">
                        <Button
                            type='button'
                            onClick={UpdateExistingCategory}>Update
                        </Button>
                        <Button
                            type='button'
                            onClick={DeleteExistingCategory}>Delete
                        </Button>
                    </div>
                )}
            </td>
        </tr>
    );
};

export default SingleCategory;