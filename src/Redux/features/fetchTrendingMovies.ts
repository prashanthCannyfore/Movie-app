import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api_key, base_Url } from "../../pages/Utils";
import { Movie } from "../../types/Types";

interface moviesState {
  trendingMovie: Movie[];
  status: "loading" | "success" | "failed";
  error: string | null;
}
const initialState: moviesState = {
  trendingMovie: [],
  status: "success",
  error: null,
}

export const fetchTrendingMovies = createAsyncThunk(
  "movie/trending?api_key",
  async (type: "day" | "week") => {
    const response = await axios.get(
      `${base_Url}/trending/movie/${type}?api_key=${api_key}`
    );
    return response.data.results as Movie[];
  }
);

const TrendingMovies = createSlice({
  name: "Trending ",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.status = "success";
        state.trendingMovie = action.payload;
        state.error = null;
      })
      .addCase(fetchTrendingMovies.rejected, (state) => {
        state.status = "failed";
        state.error = "someting went wrong";
      });
  },
});
export const selectTrendingMovies = (state: { Trending  : moviesState }) => state.Trending;

export default TrendingMovies.reducer;
