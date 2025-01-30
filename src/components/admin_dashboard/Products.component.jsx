import React, { useState } from 'react';
import { PageHeader, ProductRow, FilterPopup, Pagination, NoData } from "../index";
import "../../styles/Components/admin/Products.css";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const imageSrc = "/Handcrafted.png";
    const productsdata = useSelector((state) => state.product);
    const products = productsdata.products.ProductsData;
    const navigate = useNavigate();
    const filterState = useSelector((state) => state.filters);
    const filterProducts = filterState.filteredData;

    console.log("Filtered Categories: ", filterState);

    // Check filter status true or false
    const dataIs = filterState.entity === "Products" && filterState.status === true ? filterProducts : products;



    const [showFilter, setShowFilter] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;

    // Pagination logic
    const indexOfLastproduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastproduct - productsPerPage;
    const currentProducts = dataIs.slice(indexOfFirstProduct, indexOfLastproduct);
    const totalPages = Math.ceil(dataIs.length / productsPerPage);


    const handleFilterClick = () => setShowFilter(true);
    const handleFilterClose = () => setShowFilter(false);

    return (
        <div className="products-container">
            <PageHeader
                title="Products"
                buttonText="Add New"
                onButtonClick={() => navigate("/admin/product/add")}
                onFilterClick={handleFilterClick}
            />

            <table className="product-table">
                {currentProducts.length === 0 ? (
                    <NoData
                        type="products"
                        message="No Products Exist"
                        imageSrc={imageSrc}
                    />
                ) :
                    <>
                        <thead>
                            <tr>
                                <th>Picture</th>
                                <th>Product Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentProducts.map((product) => (
                                <ProductRow key={product.id} product={product} />
                            ))}
                        </tbody>
                    </>
                }
            </table>

            {showFilter && <FilterPopup onClose={handleFilterClose} />}

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
        </div>
    );
};

export default Products;