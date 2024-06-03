import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearch: false,
    recommendedMoviesNames: null,
    recommendedMovies: null,
  },
  reducers: {
    toggleGPTSearch: (state) => {
      state.gptSearch = !state.gptSearch;
    },
    addRecommendedMovies: (state, action) => {
      const { recommendedMovies, movies } = action.payload;
      state.recommendedMovies = movies;
      state.recommendedMoviesNames = recommendedMovies;
    },
  },
});

export const { toggleGPTSearch, addRecommendedMovies } = gptSlice.actions;

export default gptSlice.reducer;
