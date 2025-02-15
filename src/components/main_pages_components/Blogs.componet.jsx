import { NoData, Pagination } from "../index";
import "../../styles/Ui/Blogs.css";

// Individual components
import { HeroSection, BlogCategorySlider, BlogList } from "../index";
import { useState } from "react";
import { useSelector } from "react-redux";

const BlogsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { posts } = useSelector((state) => state.blog);
    const imageSrc = "/Handcrafted.png";

    // .............
    const HeroSectionData = {
        title: "Discover the artistry behind handcrafted woodwork.",
        buttontext: "Read More",
        imageUrl: "/Handcrafted_Table.jpg",
        redirectId: "blog-section"
    }

    const blogs = posts.postsData;
    // console.log("Data: ", blogs);

    const categoriesdata = useSelector((state) => state.category);
    const categories = categoriesdata.categories.categoriessData;

    const blogsPerPage = 5;

    // Pagination logic
    const indexOfLastblog = currentPage * blogsPerPage;
    const indexOfFirstUser = indexOfLastblog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstUser, indexOfLastblog);
    const totalPages = Math.ceil(blogs.length / blogsPerPage);

    return (
        <>
            {
                currentBlogs.length >= 1 ? (
                    <div className="blog-page">
                        {/* Hero Section */}
                        <HeroSection data={HeroSectionData} />

                        {/* Categories Section */}
                        <div className="category-section">
                            <h2 className="section-heading">Category</h2>
                            <BlogCategorySlider categories={categories} />
                        </div>

                        {/* Blogs Section */}
                        <div className="blog-section" id="blog-section">
                            <h2 className="section-heading">Blogs</h2>
                            <BlogList blogs={currentBlogs} />
                        </div>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                ) : (
                    <NoData
                        type="item"
                        message="Page Is Empty"
                        imageSrc={imageSrc}
                    />
                )
            }
        </>
    );
};

export default BlogsPage;