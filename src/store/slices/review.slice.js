import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "handcrafted",
    reviews: [],
    loading: false,
};

const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {
        setReviewLoading: (state, action) => {
            state.loading = action.payload;
        },
        loadAllReviews: (state, action) => {
            state.reviews = action.payload;
            state.status = "succeeded";
            state.loading = false;
            // state.error = null;
        },
        addReview: (state, action) => {
            state.reviews.ReviewsData.push(action.payload.reviewData);
        },
        // updateReview: (state, action) => {
        //     const index = state.reviews.findIndex(review => review.id === action.payload.id);
        //     if (index !== -1) {
        //         state.reviews[index] = action.payload;
        //     }
        // },
        // deleteReview: (state, action) => {
        //     state.reviews = state.reviews.filter(review => review.id !== action.payload);
        // },
    }
});

export const { setReviewLoading, setError, loadAllReviews, addReview, updateReview, deleteReview, setCurrentReview, clearCurrentReview } = reviewSlice.actions;

export default reviewSlice.reducer;