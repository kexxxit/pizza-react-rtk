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
    items: [],
    isLoading: true
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    },
    extraReducers: {
        [fetchProducts.fulfilled]: (state, action) => {
            state.items = action.payload
        },
        [fetchProducts.rejected]: (state, action) => {
            console.log('Ошибка получения товаров')
        },
        [fetchSortedProducts.fulfilled]: (state, action) => {
            state.items = action.payload
            state.isLoading = false
        },
        [fetchSortedProducts.rejected]: (state, action) => {
            console.log('Ошибка получения товаров')
        }
    }
})

export const {setProducts, setIsLoading} = productsSlice.actions

export default productsSlice.reducer