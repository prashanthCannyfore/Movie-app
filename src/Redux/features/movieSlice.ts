import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Movie } from "../../../src/types/Types";
import axios from "axios";
import { api_key, base_Url } from "../../pages/Utils";

interface MoviesState  {
  items: Movie[];
  status: "loading" | "success" | "failed";
  error: string | null;
}

const initialState: MoviesState  = {
  items: [],
  status: "success",
  error: null,
};


export const fetchMovies = createAsyncThunk(
    "movie/popular?api_key",
    async (type: "movie" | "tv") => {
      const response = await axios.get(
        `${base_Url}/${type}/popular?api_key=${api_key}`
      );
  
      return response.data.results as Movie[];
    }
  );

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
        state.error = null; 
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = "failed";
        state.error = "Something went wrong!";
      });
  },
});
export const selectMovies = (state:any) => state.movies;
  
export default movieSlice.reducer