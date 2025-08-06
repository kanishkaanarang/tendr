import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/tendrSlice.js'
import authReducer from './redux/authSlice.js'
import eventPlanningReducer from './redux/eventPlanningSlice.js';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    eventPlanning: eventPlanningReducer
  },
})

export default store;