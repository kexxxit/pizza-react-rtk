import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const findItem = state.items.find(obj => (obj.id === action.payload.id) && (obj.size === action.payload.size))
            if (findItem) {
                findItem.count++
            } else {
                state.items = [...state.items, action.payload]
            }

            state.totalPrice = state.items.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.price * currentValue.count
            }, 0)
        },
        decrementProductFromCart: (state, action) => {
            const findItem = state.items.find(obj => (obj.id === action.payload.id) && (obj.size === action.payload.size))
            if (findItem.count > 1) {
                findItem.count--
            } else {
                state.items = state.items.filter(obj => (obj.id !== findItem.id || obj.size !== findItem.size))
            }
            state.totalPrice -= findItem.price
        },
        removeProductFromCart: (state, action) => {
            const findItem = state.items.find(obj => (obj.id === action.payload.id) && (obj.size === action.payload.size))
            state.items = state.items.filter(obj => (obj.id !== findItem.id || obj.size !== findItem.size))
            state.totalPrice -= findItem.price * findItem.count
        },
        clearCart: (state) => {
            state.items = []
            state.totalPrice = 0
        }
    },
})

export const {addProductToCart, decrementProductFromCart, clearCart, removeProductFromCart} = cartSlice.actions

export default cartSlice.reducer