import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Movie } from "../../types/Types";
import { RootState } from "../store/Store"; 

interface SearchState {
  results: Movie[];
  status: "loading" | "success" | "failed";
  error: string | null;
}

const initialState: SearchState = {
  results: [],
  status: "success",
  error: null,
};

export const fetchSearch = createAsyncThunk(
  "search/fetchSearch",
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=db826f7a175bf94727529d5fd50d74f0&query=${query}`
      );
      return response.data.results as Movie[];
    } catch (error: any) {
      return rejectWithValue(error.message || "Failed to fetch search results");
    }
  }
);




const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.status = "success";
        state.results = action.payload;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});


export const searchResults = (state: {search: SearchState}) => state.search;
export default searchSlice.reducer;
