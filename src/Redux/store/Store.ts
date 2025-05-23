import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from '../features/movieSlice';
import TrendingReducer from '../features/fetchTrendingMovies';
import searchReducer from '../features/searchSlice';


export const store = configureStore({
    reducer: {
        movies:moviesReducer,
        Trending:TrendingReducer,
        search: searchReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;