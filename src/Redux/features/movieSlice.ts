import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Movie } from "../../../src/types/Types";
import axios from "axios";
import { api_key, base_Url } from "../../pages/Utils";


interface moviesstate {
  items: Movie[];
  status: "loading" | "success" | "failed"; 
  error: string | null;
}

const initialState: moviesstate = {
  items: [],
  status: "success",
  error: null,
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (type: "day" | "week") => {
    const response = await axios.get(
      `${base_Url}/trending/movie/${type}?api_key=${api_key}`
    );
    return response.data.results as Movie[];
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending,(state, action)=>{
        state.status = "loading";
    })
    .addCase(fetchMovies.fulfilled,(state, action)=>{
        (state.status = "success"), (state.items = action.payload);
    })
    .addCase(fetchMovies.rejected,(state, action) => {
     (state.status = "failed"),
     (state.error = action.error.message = "something went wrong!")
    })
    console.log("+#",fetchMovies);
  },
  
});

export default movieSlice.reducer;
 