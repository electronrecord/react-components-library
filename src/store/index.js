import { configureStore } from '@reduxjs/toolkit'
import homepage from './modules/homepage.js'

export const store = configureStore({
  reducer: {
    homepage
  },
})
