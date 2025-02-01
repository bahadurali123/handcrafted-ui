import React, { useState } from 'react';
import { NoData, SingleWishlistItem } from "../index";
import "../../styles/Components/user/Wishlists.css"
import { useDispatch, useSelector } from 'react-redux';
import wishlistService from '../../../services/wishlist.service';
import { login } from '../../store/slices/auth.slice';

const WishlistPage = () => {
    const dispatch = useDispatch();
    const imageSrc = "/Handcrafted.png";
    const userdata = useSelector((state) => state.auth);
    const logedUser = userdata.data.userData;
    const productIds = logedUser?.wishlist;
    const productsdata = useSelector((state) => state.product);
    const products = productsdata.products.ProductsData;
    const wishlistProducts = products?.filter(product => productIds.includes(product._id));

    const handleRemoveFromWishlist = async (productId) => {
        try {
            const response = await wishlistService.addItemToWishlist(productId);
            if (response) {
                const wishlistData = response.data;
                if (wishlistData) {
                    dispatch(login({ userData: wishlistData }));
                }
            }
        } catch (error) {
            console.log("WishList Error: ", error);
        }
    };

    return (
        <div className="wishlist-page">
            <h2>Wishlist</h2>
            <table className="wishlist-table">
                {wishlistProducts.length === 0 ? (
                    <NoData
                        type="wishlist"
                        message="No Wishlist Found"
                        imageSrc={imageSrc}
                    />
                ) :
                    <>
                        <tbody>
                            {
                                wishlistProducts.map((product) => (
                                    <SingleWishlistItem
                                        key={product._id}
                                        product={product}
                                        onRemoveFromWishlist={handleRemoveFromWishlist}
                                    />
                                ))}
                        </tbody>
                    </>
                }
            </table>
        </div>
    );
};

export default WishlistPage;