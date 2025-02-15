import { useSelector } from "react-redux";
import { BlogCategorySlider } from "../../index";

const CategoriesSection = () => {
    const categoriesdata = useSelector((state) => state.category);
    const categories = categoriesdata.categories.categoriessData;

    return (
        <div className="categories-section" id="home-categories">
            <h2>Categories</h2>
            <BlogCategorySlider categories={categories} />
        </div>
    );
};

export default CategoriesSection;