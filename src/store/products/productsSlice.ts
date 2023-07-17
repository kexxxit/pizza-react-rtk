import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {productsAPI} from "../../api/api";

export type Product = {
    id: string,
    imageUrl: string,
    title: string,
    sizes: number[],
    price: number
}

interface Products {
    items: Product[],
    isLoading: boolean
}

export const fetchProducts = createAsyncThunk<Product[]>(
    'products/fetchProducts',
    async () => {
        const response = await productsAPI.getProductsData()
        return response.data
    }
)

export const fetchSortedProducts = createAsyncThunk<Product[], Record<string, string>>(
    'products/fetchSortedProducts',
    async (params) => {
        const {sortBy, order} = params
        const response = await productsAPI.getProductsDataSorted(sortBy, order)
        return response.data
    }
)

const initialState: Products = {
    items: [],
    isLoading: true
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload
        })
        builder.addCase(fetchProducts.rejected, () => {
            console.log('Ошибка получения товаров')
        })
        builder.addCase(fetchSortedProducts.fulfilled, (state, action) => {
            state.items = action.payload
            state.isLoading = false
        })
        builder.addCase(fetchSortedProducts.rejected, () => {
            console.log('Ошибка получения товаров')
        })
    }
    // extraReducers: {
    //     [fetchProducts.fulfilled]: (state: RootState, action: PayloadAction<ProductsItem[]>) => {
    //         state.items = action.payload
    //     },
    //     [fetchProducts.rejected]: () => {
    //         state.items = action.payload
    //         state.isLoading = false
    //     },
    //     [fetchSortedProducts.fulfilled]: (state: RootState, action: PayloadAction<ProductsItem[]>) => {
    //         state.items = action.payload
    //         state.isLoading = false
    //     },
    //     [fetchSortedProducts.rejected]: () => {
    //         console.log('Ошибка получения товаров')
    //     }
    // }
})

export const {setIsLoading} = productsSlice.actions

export default productsSlice.reducer