import { configureStore } from '@reduxjs/toolkit'
import homepage from './modules/homepage.js'
import { setupListeners } from '@reduxjs/toolkit/query'
import { blogpostApi } from './modules/homepage.js'

export const store = configureStore({
  reducer: {
    homepage,
    [blogpostApi.reducerPath]: blogpostApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogpostApi.middleware),
})

setupListeners(store.dispatch)
