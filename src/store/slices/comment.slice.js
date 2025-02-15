import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "handcrafted",
    comments: [],
    currentComment: null,
    loading: false,
    // error: null
};

const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        setCommentLoading: (state, action) => {
            state.loading = action.payload;
        },
        loadAllComments: (state, action) => {
            state.comments = action.payload;
            state.status = "succeeded";
            state.loading = false;
        },
        addNewComment: (state, action) => {
            state.comments.CommentsData.push(action.payload.CommentData);
        },
        updateComment: (state, action) => {
            state.comments.CommentsData = state.comments.CommentsData.map(item => item._id == action.payload.commentData._id ? { ...action.payload.commentData } : item);
        },
        deleteComment: (state, action) => {
            state.comments.CommentsData = state.comments.CommentsData.filter(item => item._id !== action.payload._id);
        },
    }
});

export const { setCommentLoading, setError, loadAllComments, addNewComment, updateComment, deleteComment, setCurrentComment, clearCurrentComment } = commentSlice.actions;

export default commentSlice.reducer;