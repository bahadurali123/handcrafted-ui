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
        loadAllLikes: (state, action) => {
            state.likes = action.payload;
            state.status = "succeeded";
            state.loading = false;
            // state.error = null;
        },
    }
});

export const { setLikeLoading, setError, loadAllLikes, addLike, removeLike } = likesSlice.actions;

export default likesSlice.reducer;