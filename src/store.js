import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from './features/filters/filtersSlice'

export default configureStore({
  reducer: {
    filters: filtersSlice,
  },
})