import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "handcrafted",
    likes: [],
    loading: false,
    // error: null
};

const likesSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
        setLikeLoading: (state, action) => {
            state.loading = action.payload;
        },
        // setError: (state, action) => {
        //     state.error = action.payload;
        // },
        loadAllLikes: (state, action) => {
            state.likes = action.payload;
            state.status = "succeeded";
            state.loading = false;
            // state.error = null;
        },
        // addLike: (state, action) => {
        //     state.likes.push(action.payload);
        // },
        // removeLike: (state, action) => {
        //     state.likes = state.likes.filter(like => like.id !== action.payload);
        // }
    }
});

// export const { setLoading, setError, loadLikes, addLike, removeLike } = likesSlice.actions;
export const { setLikeLoading, setError, loadAllLikes, addLike, removeLike } = likesSlice.actions;

export default likesSlice.reducer;