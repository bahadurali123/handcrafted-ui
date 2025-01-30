// export default FilterPopup;
import { useForm } from "react-hook-form";

import { Button, Input } from "../../index";
import "../../../styles/Components/admin/Pageheader.css"
import { useDispatch, useSelector } from 'react-redux';
import { setFiltered } from "../../../store/slices/filter.slice";

const ProductFilterPopup = ({ onClose }) => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const categoriesdata = useSelector((state) => state.category);
    const categories = categoriesdata.categories.categoriessData;
    const productsdata = useSelector((state) => state.product);
    const products = productsdata.products.ProductsData;

    function filterHierarchy(categories, parentName) {
        const result = [];
        const findChildren = (parentId) => {
            // Find all children of the current parent
            const children = categories.filter(category => category.parentId === parentId);
            result.push(...children); // Add them to the result array
            children.forEach(child => findChildren(child._id)); // Recursively find their children
        };

        // Find and add the parent by name
        const parent = categories.find(category => category._id === parentName);
        if (parent) {
            result.push(parent); // Add the parent to the result array
            findChildren(parent._id); // Start finding its children
        }

        return result;
    };
    const filteredCategories = filterHierarchy(categories, "6728d5ec46ad752365cab7c9");
    console.log("hierarchy 1", filteredCategories);

    const onSubmit = async (data) => {
        console.log("Hook Form Data is: ", data);
        try {
            // console.log("Products LIst: ", products);
            const findcolor = (array, item) => {
                console.log("find items: ", array, item);
                return array.find(color => color === item);
            };
            const filteredProductsList = products.filter(item => {
                return item.name === data?.productname ||
                    item.categoryId === data?.productcategory ||
                    item.price >= parseInt(data?.minPrice) &&
                    item.price <= parseInt(data?.maxPrice) ||
                    findcolor(item.colors, data?.color)
            });
            console.log("Filtered Products LIst: ", filteredProductsList);

            if (filteredProductsList.length >= 1) {
                const productData = filteredProductsList;
                if (productData) {
                    dispatch(setFiltered(
                        {
                            name: "userProducts", // The name of the entity
                            filteredData: productData
                        }
                    ));
                }
            } else {
                alert("What do you want to filter, without any proper input.");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="filter-popup">
            <div className="filter-popup-header">
                <h3>Filter Products</h3>
                <button onClick={onClose} className="close-button">✖</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="filter-form">
                <Input
                    label="Name:"
                    type="text" placeholder="Name" {...register('productname')}
                />
                <div className="full-width">
                    <label>Category</label>
                    <select
                        {...register('productcategory')}
                    >
                        <option value="">Select Category</option>
                        {filteredCategories.map((c) => (
                            <option key={c._id} value={c._id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>

                <Input
                    label="Price Range:"
                    type="number" placeholder="Min" {...register('minPrice')}
                />
                <Input
                    type="number" placeholder="Max" {...register('maxPrice')}
                />
                <Input
                    label="Color:"
                    type="text" placeholder="Color" {...register('color')}
                />

                <div className="popup-actions">
                    <Button
                        type='button'
                        onClick={onClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        type='submit'
                        onClick={() => setTimeout(onClose, 200)}
                    >
                        Apply Filters
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ProductFilterPopup;