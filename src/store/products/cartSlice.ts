import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type CartProduct = {
    id: string,
    title: string,
    size: number,
    price: number,
    imageUrl: string,
    count?: number
}

interface Cart {
    totalPrice: number,
    items: CartProduct[]
}

const initialState: Cart = {
    totalPrice: 0,
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action: PayloadAction<CartProduct>) => {
            const findItem: CartProduct | undefined = state.items.find(obj => (obj.id === action.payload.id) && (obj.size === action.payload.size))
            if (findItem && findItem.count) {
                findItem.count++
            } else {
                state.items = [...state.items, action.payload]
            }

            state.totalPrice = state.items.reduce((accumulator, currentValue) => {
                return accumulator + currentValue.price * currentValue.count!
            }, 0)
        },
        decrementProductFromCart: (state, action) => {
            const findItem: CartProduct | undefined = state.items.find(obj => (obj.id === action.payload.id) && (obj.size === action.payload.size))
            if (findItem && findItem.count) {
                if (findItem.count > 1) {
                    findItem.count--
                } else {
                    state.items = state.items.filter(obj => (obj.id !== findItem.id || obj.size !== findItem.size))
                }
                state.totalPrice -= findItem.price
            }
        },
        removeProductFromCart: (state, action) => {
            const findItem: CartProduct | undefined = state.items.find(obj => (obj.id === action.payload.id) && (obj.size === action.payload.size))
            if (findItem) {
                state.items = state.items.filter(obj => (obj.id !== findItem.id || obj.size !== findItem.size))
                state.totalPrice -= findItem.price * findItem.count!
            }

        },
        clearCart: (state) => {
            state.items = []
            state.totalPrice = 0
        }
    },
})

export const {addProductToCart, decrementProductFromCart, clearCart, removeProductFromCart} = cartSlice.actions

export default cartSlice.reducer