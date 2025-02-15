import React, { useState } from 'react';
import '../../styles/Components/admin/Categories.css'; // Ensure custom styling

import { PageHeader, CategoryFilterPopup, SingleCategory, Pagination, NoData } from "../index";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const imageSrc = "/Handcrafted.png";
    const [showFilter, setShowFilter] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const categoriesPerPage = 5;

    const navigate = useNavigate();

    const categoriesdata = useSelector((state) => state.category);
    const categories = categoriesdata.categories.categoriessData;
    const filterState = useSelector((state) => state.filters);
    const filterCategories = filterState.filteredData;

    // console.log("Filtered Categories: ", filterState);


    // Check filter status true or false
    const dataIs = filterState.entity === "categories" && filterState.status === true ? filterCategories : categories;

    // Pagination logic
    const indexOfLastcategory = currentPage * categoriesPerPage;
    const indexOfFirstCategory = indexOfLastcategory - categoriesPerPage;
    const currentCategories = dataIs.slice(indexOfFirstCategory, indexOfLastcategory);
    const totalPages = Math.ceil(dataIs.length / categoriesPerPage);


    const handleFilterClick = () => setShowFilter(true);
    const handleFilterClose = () => setShowFilter(false);
    const addCategory = () => navigate("/admin/category/add");

    return (
        <div className="categories-container">
            {/* Page Header */}
            <PageHeader
                title="Categories"
                buttonText="Add new"
                onButtonClick={addCategory}
                onFilterClick={handleFilterClick}
            />

            {/* Categories Table */}
            <table className="categories-table">
                {currentCategories.length === 0 ? (
                    <NoData
                        type="blogs"
                        message="No Blogs Exist"
                        imageSrc={imageSrc}
                    />
                ) :
                    <>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Category</th>
                                <th>Parent Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentCategories.map((category, index) => (
                                <SingleCategory
                                    key={index}
                                    category={category}
                                />
                            ))}
                        </tbody>
                    </>
                }
            </table>

            {/* Pagination */}
            {showFilter && <CategoryFilterPopup onClose={handleFilterClose} />}

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default Categories;