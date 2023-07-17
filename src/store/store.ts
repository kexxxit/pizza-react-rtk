import {configureStore, Store} from '@reduxjs/toolkit'
import productsReducer from './products/productsSlice'
import cartReducer from './products/cartSlice'

export const store: Store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch