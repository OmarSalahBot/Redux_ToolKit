import {  createSlice } from "@reduxjs/toolkit";
import { getAllPosts } from "../../Api/PostsApi";

const initialState = {
    posts: [],
    status: 'idle',
    error: null
}



const postSlice = createSlice({
    name : "post",
    initialState,
    extraReducers(builder) {
        builder
            .addCase(getAllPosts.pending,(state) => {
                state.status = "loading";
            })
            .addCase(getAllPosts.fulfilled,(state ,action) => {
                state.posts = action.payload;
                console.log(action.payload);
                state.status = "good";
            })
            .addCase(getAllPosts.rejected,(state ,action) => {
                console.log(action);
                state.status = "Failed";
                state.error = true;
            })
    }
})

export default postSlice.reducer;