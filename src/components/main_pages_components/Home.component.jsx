import { HeroSection, CategoriesSection, FeaturedProducts, FeaturedBlogs, UserSatisfaction } from "../index";
import '../../styles/Ui/Home.css';

const HomePage = () => {
    const HeroSectionData = {
        title: "Where Tradition Meets Design – Explore the Art of Handcrafted Furniture.",
        buttontext: "Explore Now",
        imageUrl: "/Handcrafted_Table.jpg",
        redirectId: "home-categories"
    }
    return (
        <div className="home-page">
            <HeroSection data={HeroSectionData} />
            <CategoriesSection />
            <FeaturedProducts />
            <FeaturedBlogs />
            <UserSatisfaction />
        </div>
    );
};

export default HomePage;