import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/tendrSlice.js'
import authReducer from './redux/authSlice.js'
import eventPlanningReducer from './redux/eventPlanningSlice.js';
import listingFiltersReducer from './redux/listingFiltersSlice.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    eventPlanning: eventPlanningReducer,
    listingFilters: listingFiltersReducer,
  },
})

export default store;