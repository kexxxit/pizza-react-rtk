import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {productsAPI} from "../../api/api";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await productsAPI.getProductsData()
        return response.data
    }
)

export const fetchSortedProducts = createAsyncThunk(
    'products/fetchSortedProducts',
    async (params) => {
        const {sortBy, order} = params
        const response = await productsAPI.getProductsDataSorted(sortBy, order)
        return response.data
    }
)

const initialState = {
    products: [{
        id: 0,
        imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
        title: "Пепперони Фреш с перцем",
        types: [0, 1],
        sizes: [26, 30, 40],
        price: 803,
        category: 0,
        rating: 4
    }]
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
    },
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            state.products = action.payload
        },
        [fetchProducts.rejected]: (state, action) => {
            console.log('Ошибка получения товаров')
        },
        [fetchSortedProducts.fulfilled]: (state, action) => {
            state.products = action.payload
        },
        [fetchSortedProducts.rejected]: (state, action) => {
            console.log('Ошибка получения товаров')
        }
    }
})

export const {setProducts} = productsSlice.actions

export default productsSlice.reducer