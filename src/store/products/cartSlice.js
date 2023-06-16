import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    cart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const findItem = state.cart.find(obj => (obj.id === action.payload.id) && (obj.size === action.payload.size))
            if (findItem) {
                findItem.count++
            } else {
                state.cart = [...state.cart, action.payload]
            }

            state.totalPrice = state.cart.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.price * currentValue.count
            }, 0)
        },
        decrementProductFromCart: (state, action) => {
            const findItem = state.cart.find(obj => (obj.id === action.payload.id) && (obj.size === action.payload.size))
            if (findItem.count > 1) {
                findItem.count--
            } else {
                state.cart = state.cart.filter(obj => (obj.id !== findItem.id || obj.size !== findItem.size))
            }
            state.totalPrice -= findItem.price
        },
        removeProductFromCart: (state, action) => {
            const findItem = state.cart.find(obj => (obj.id === action.payload.id) && (obj.size === action.payload.size))
            state.cart = state.cart.filter(obj => (obj.id !== findItem.id || obj.size !== findItem.size))
            state.totalPrice -= findItem.price * findItem.count
        },
        clearCart: (state) => {
            state.cart = []
            state.totalPrice = 0
        }
    },
})

export const {addProductToCart, decrementProductFromCart, clearCart, removeProductFromCart} = cartSlice.actions

export default cartSlice.reducer