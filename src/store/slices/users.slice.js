import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "handcrafted",
    users: [],
    currentUser: null,
    loading: false,
    // error: null
};

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUserLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        allUsers: (state, action) => {
            state.users = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateUserProfile: (state, action) => {
            state.users.usersData = state.users.usersData.map(item => item._id == action.payload.userData._id ? { ...action.payload.userData } : item);
        }
    }
});

export const { setUserLoading, setError, allUsers, addUser, updateUserProfile, deleteUser, setCurrentUser, clearCurrentUser } = userSlice.actions;

export default userSlice.reducer;