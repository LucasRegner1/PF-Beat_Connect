import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { serverUrl } from "@/data/config";
import axios from "axios";
import { sortArr } from "@/data/fakeDB";

export const fetchGenres = createAsyncThunk("genres/fetchGenres", async () => {
  const { data } = await axios.get(`${serverUrl}genres`);
  const genresResponse = data;
  return genresResponse;
});

const initialState = {
  searchFilter: "",
  genres: [],
  genresFilter: [],
  priceFilter: {
    min: 0,
    max: 0,
  },
  BpmFilter : {
    min: 0,
    max: 0,
  },
  sorter: "default",
  sorterValues: sortArr,
  typesFilter: [],
};

const filtersSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setSearchFilter(state, action) {
      state.searchFilter = action.payload;
    },
    setGenresFilter(state, action) {
      const isSelected = state.genresFilter.includes(action.payload);

      if (isSelected) {
        state.genresFilter = state.genresFilter.filter(
          (genre) => genre !== action.payload
        );
      } else {
        state.genresFilter = action.payload;
      }
    },
    setTypesFilter(state, action) {
      const isSelected = state.typesFilter.includes(action.payload);

      if (isSelected) {
        state.typesFilter = state.typesFilter.filter(
          (genre) => genre !== action.payload
        );
      } else {
        state.typesFilter = action.payload;
      }
    },
    setPriceFilter(state, action) {
      state.priceFilter = action.payload;
    },

    setBpmFilter(state, action) {
      state.BpmFilter = action.payload;
    },
    setSorter(state, action) {
      state.sorter = action.payload;
    },

    restoreFilters(state, action) {
      state.searchFilter = "";
      state.genresFilter = [];
      state.typesFilter = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenres.fulfilled, (state, action) => {
        //puede cambiar a _id
        const formatedGenres = action.payload.map((genre) => ({
          label: genre.name,
          value: genre._id,
        }));

        state.genres = formatedGenres;
      })
      .addCase(fetchGenres.rejected, (state, action) => {
        state.genres = [];
      })
      .addCase(fetchGenres.pending, (state, action) => {
        state.genres = [];
      });
  },
});

export const {
  setSearchFilter,
  setGenresFilter,
  setTypesFilter,
  restoreFilters,
  setPriceFilter,
  setBpmFilter,
  setSorter,
} = filtersSlice.actions;

export default filtersSlice.reducer;
