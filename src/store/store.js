import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth.slice';
import blogSlice from './slices/blog.slice';
import categorySlice from './slices/category.slice';
import productSlice from './slices/Product.slice';
import shippingSlice from './slices/shipping.slice';
import reviewSlice from './slices/review.slice';
import likesSlice from './slices/like.slice';
import commentSlice from './slices/comment.slice';
import filterSlice from './slices/filter.slice';
import userSlice from './slices/users.slice';
import cartSlice from './slices/cart.slice';
import orderSlice from './slices/order.slice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        users: userSlice,
        blog: blogSlice,
        category: categorySlice,
        product: productSlice,
        shipping: shippingSlice,
        review: reviewSlice,
        like: likesSlice,
        comment: commentSlice,
        filters: filterSlice,
        cart: cartSlice,
        orders: orderSlice,
    }
})

export default store;