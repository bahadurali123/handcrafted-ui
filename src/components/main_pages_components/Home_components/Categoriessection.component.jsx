import { useSelector } from "react-redux";
import { BlogCategorySlider } from "../../index";

const CategoriesSection = () => {
    const categoriesdata = useSelector((state) => state.category);
    const categories = categoriesdata.categories.categoriessData;
    // const categories = [
    //     { id: 1, name: 'Home Decor', img: '/Handcrafted_Table.jpg' },
    //     { id: 2, name: 'Jewelry', img: '/Handcrafted_Table.jpg' },
    //     { id: 3, name: 'Wall Art', img: '/Handcrafted_Table.jpg' },
    //     { id: 4, name: 'Roof Art', img: '/Handcrafted_Table.jpg' },
    //     { id: 5, name: 'Lamp Art', img: '/Handcrafted_Table.jpg' },
    // ];

    return (
        <div className="categories-section" id="home-categories">
            <h2>Categories</h2>
            <BlogCategorySlider categories={categories} />
        </div>
    );
};

export default CategoriesSection;