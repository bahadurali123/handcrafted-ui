import React, { useState } from 'react';
import { BlogPostItem, Pagination, PageHeader, BlogsFilterPopup, NoData } from "../index";
import '../../styles/Components/admin/Blogposts.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BlogPosts = () => {
    const imageSrc = "/Handcrafted.png";
    const postsdata = useSelector((state) => state.blog);
    const posts = postsdata.posts.postsData;
    const navigate = useNavigate();
    const filterState = useSelector((state) => state.filters);
    const filterPosts = filterState.filteredData;

    console.log("Filtered Categories: ", filterState);

    // Check filter status true or false
    const dataIs = filterState.entity === "posts" && filterState.status === true ? filterPosts : posts;

    const [showFilter, setShowFilter] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    // Pagination logic
    const indexOfLastpost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastpost - postsPerPage;
    const currentBlogs = dataIs.slice(indexOfFirstPost, indexOfLastpost);
    const totalPages = Math.ceil(dataIs.length / postsPerPage);

    const handleFilterClick = () => setShowFilter(true);
    const handleFilterClose = () => setShowFilter(false);
    return (
        <div className="blog-posts-wrapper">
            <PageHeader
                title="Blog Posts"
                buttonText="Add New"
                onButtonClick={() => navigate("/admin/blog/add")}
                onFilterClick={handleFilterClick}
            />

            <div className="blog-posts-table">
                {currentBlogs.length === 0 ? (
                    <NoData
                        type="blogs"
                        message="No Blogs Exist"
                        imageSrc={imageSrc}
                    />
                ) :
                    <>
                        <div className="table-header">
                            <span className="Blog-title">Title</span>
                            <span>Category</span>
                            <span>Date</span>
                            <span>Status</span>
                            <span className="action-btn">Action</span>
                        </div>

                        {currentBlogs.map((post, index) => (
                            <BlogPostItem key={index} post={post} />
                        ))}
                    </>
                }
            </div>

            {showFilter && <BlogsFilterPopup onClose={handleFilterClose} />}

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default BlogPosts;