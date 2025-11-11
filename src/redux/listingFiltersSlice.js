// redux/listingFiltersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loadFilters = () => {
  try {
    const saved = localStorage.getItem("listingFilters");
    return saved ? JSON.parse(saved) : {};
  } catch (err) {
    console.error("Failed to load saved filters:", err);
    return {};
  }
};

const initialState = {
  eventType: "",
  serviceType: "",
  locationType: "",
  date: "",
  guestCount: 0,
  ...loadFilters(), // merge saved filters
};

const listingFiltersSlice = createSlice({
  name: "listingFilters",
  initialState,
  reducers: {
    setFilters(state, action) {
      const newState = { ...state, ...action.payload };
      localStorage.setItem("listingFilters", JSON.stringify(newState));
      return newState;
    },
    resetFilters() {
      localStorage.removeItem("listingFilters");
      return {
        eventType: "",
        serviceType: "",
        locationType: "",
        date: "",
        guestCount: 0,
      };
    },
  },
});

export const { setFilters, resetFilters } = listingFiltersSlice.actions;
export default listingFiltersSlice.reducer;
