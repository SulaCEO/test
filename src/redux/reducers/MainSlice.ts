import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type TypePost = {
    id: number,
    title: string,
    body: string
}

type TypeState = {
    number: number,
    posts: TypePost[]
}

const initialState: TypeState = {
    number: 0,
    posts: []
}

export const getAllPosts = createAsyncThunk<TypePost[]>(
    'MainSlice/getAllPosts',
    async ()=>{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

        return res.data;
    }
)

const MainSlice = createSlice({
    name: 'MainSlice',
    initialState,
    reducers: {
        increment: (state)=>{
            state.number++;
        },
        dicrement: (state)=>{
            state.number--;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(getAllPosts.fulfilled, (state, action)=>{
            state.posts = action.payload;
        })
    }
})

export default MainSlice.reducer;
export const {increment, dicrement} = MainSlice.actions;