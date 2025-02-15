import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "handcrafted", // 'handcrafted' | 'succeeded' | 'failed'
    posts: [],
    currentPost: null,
    loading: false
};

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        setPostsLoading: (state, action) => {
            state.loading = action.payload;
        },
        allPosts: (state, action) => {
            state.posts = action.payload;
            state.status = "succeeded";
            state.loading = false;
        },
        addPost: (state, action) => {
            state.posts.postsData.push(action.payload.postData);
        },
        updatePost: (state, action) => {
            const { _id } = action.payload.blogData;
            state.posts.postsData = state.posts.postsData.map(item => item._id == _id ? { ...action.payload.blogData } : item);
        },
        deletePost: (state, action) => {
            state.posts.postsData = state.posts.postsData.filter(post => post._id !== action.payload.blogId);
        },
    }
});

export const { setPostsLoading, allPosts, addPost, updatePost, deletePost, setCurrentPost, clearCurrentPost } = blogSlice.actions;

export default blogSlice.reducer;