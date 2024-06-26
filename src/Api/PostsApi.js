import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POSTS_URL = "https://jsonplaceholder.typecode.com/posts";

export const getAllPosts = createAsyncThunk('post/getAll', async () => {
        const res = await axios.get(POSTS_URL);
        return res.data;
})