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
            console.log("Blog data in Slice: ", action.payload);
            state.posts.postsData.push(action.payload.postData);
        },
        updatePost: (state, action) => {
            console.log("In Blog slice: ", action.payload);
            const { _id } = action.payload.blogData;
            state.posts.postsData = state.posts.postsData.map(item => item._id == _id ? { ...action.payload.blogData } : item);
        },
        deletePost: (state, action) => {
            state.posts.postsData = state.posts.postsData.filter(post => post._id !== action.payload.blogId);
        },
        // setCurrentPost: (state, action) => {
        //     state.currentPost = action.payload;
        // },
        // clearCurrentPost: (state) => {
        //     state.currentPost = null;
        // }
    }
});

// export const { setLoading, loadPosts, addPost, updatePost, deletePost, setCurrentPost, clearCurrentPost } = blogSlice.actions;
export const { setPostsLoading, allPosts, addPost, updatePost, deletePost, setCurrentPost, clearCurrentPost } = blogSlice.actions;

export default blogSlice.reducer;