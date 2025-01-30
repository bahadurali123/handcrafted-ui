import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "handcrafted",
    categories: [],
    loading: false,
    // error: null
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategoryLoading: (state, action) => {
            state.loading = action.payload;
        },
        // setError: (state, action) => {
        //     state.error = action.payload;
        // },
        loadAllCategories: (state, action) => {
            state.categories = action.payload;
            state.loading = false;
            state.status = "succeeded";
            // state.error = null;
        },
        addNewCategory: (state, action) => {
            // console.log("Payload: ", action.payload);
            state.categories.categoriessData.push(action.payload.categoryData);
        },
        updateCategory: (state, action) => {
            // console.log("In Category slice: ", action.payload);
            const { _id } = action.payload.categoryData;
            // const { _id, name, parentId, createdAt, updatedAt } = action.payload.categoryData;
            // state.categories.categoriessData = state.categories.categoriessData.map(item => item._id == _id ? { _id, name, parentId, createdAt, updatedAt } : item);
            state.categories.categoriessData = state.categories.categoriessData.map(item => item._id == _id ? { ...action.payload.categoryData } : item);
        },
        deleteCategory: (state, action) => {
            state.categories.categoriessData = state.categories.categoriessData.filter(category => category._id !== action.payload.categoryId);
        },
        filterCategories: (state, action) => {
            state.categories = action.payload;
            state.loading = false;
            state.status = "succeeded";
            // state.error = null;
        },
    }
});

// export const { setLoading, setError, loadCategories, addCategory, updateCategory, deleteCategory } = categorySlice.actions;
export const { setCategoryLoading, setError, loadAllCategories, addNewCategory, updateCategory, deleteCategory, filterCategories } = categorySlice.actions;

export default categorySlice.reducer;