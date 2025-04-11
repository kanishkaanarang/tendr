import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './redux/tendrSlice.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})