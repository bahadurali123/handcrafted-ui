import { useDispatch } from 'react-redux';
import productService from '../../../services/product.service';
import { addProduct } from '../../store/slices/Product.slice';
import { ProductForm } from '../index';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddProduct = async (data) => {
        console.log("Product Added:", data);
        const formData = new FormData();
        const colors = data.colors.split(', ');
        // console.log("Collers: ", colors);
        const featured = data.featured === true ? true : false;
        console.log("featured: ", featured);

        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", data.price);
        formData.append("categoryId", data.categoryId);
        formData.append("stockQuantity", data.stockQuantity);
        formData.append("colors", colors);
        formData.append("weight", data.weight);
        formData.append("length", data.length);
        formData.append("width", data.width);
        formData.append("height", data.height);
        // formData.append("images", data.images[0]);
        formData.append("featured", featured);
        for (let i = 0; i < data.images.length; i++) {
            formData.append("images", data.images[i]);
        }

        console.log("FormData", formData);
        try {
            // Here, you can send the data to the backend to add the product
            const response = await productService.createProduct(formData);
            if (response) {
                const productData = response.data;
                if (productData) {
                    dispatch(addProduct({ productData }));
                }
                navigate(`/admin/products`)
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <ProductForm onSubmit={handleAddProduct} />
        </div>
    );
};

export default AddProduct;