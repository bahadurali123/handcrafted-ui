import { ProductComponent, ProductFilterPopup, Pagination, NoData } from "../index";
import "../../styles/Ui/Products.css"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const ProductsPage = () => {
    const navigate = useNavigate();
    const [showFilter, setShowFilter] = useState(false);
    const productsdata = useSelector((state) => state.product);
    const products = productsdata.products.ProductsData;

    const filterState = useSelector((state) => state.filters);
    const filterProducts = filterState.filteredData;

    const imageSrc = "/Handcrafted.png";

    // console.log("Filtered Categories: ", filterState);

    // Check filter status true or false
    const dataIs = filterState.entity === "userProducts" && filterState.status === true ? filterProducts : products;

    const toggleFilterPopup = () => {
        setShowFilter(!showFilter);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;

    // Pagination logic
    const indexOfLastproduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastproduct - productsPerPage;
    const currentProducts = dataIs.slice(indexOfFirstProduct, indexOfLastproduct);
    const totalPages = Math.ceil(dataIs.length / productsPerPage);

    return (
        <>
            {
                currentProducts.length >= 1 ? (
                    <div className="products-page">
                        {/* Filter Section */}
                        <div className="filter-section">
                            <i className="bi bi-funnel filter-icon" onClick={toggleFilterPopup}></i>
                        </div>

                        {/* Product Grid */}
                        <div className="product-grid">
                            {currentProducts.map(product => (
                                <ProductComponent
                                    key={product._id}
                                    name={product.name}
                                    price={product.price}
                                    imageUrl={product.images[0]}
                                    QuickView={() => navigate(`/shop/product/${product._id}`)}
                                />
                            ))}
                        </div>

                        {/* Filter Popup */}
                        {showFilter && <ProductFilterPopup onClose={toggleFilterPopup} />}

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

export default ProductsPage;