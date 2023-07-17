import Products from "./Products/Products";
import React, {useEffect} from "react";
import {fetchSortedProducts, setIsLoading} from "../../store/products/productsSlice";
import {useThunkDispatch} from "../../hooks/useAppDispatch";

const Main = () => {
    const dispatch = useThunkDispatch()

    useEffect(() => {
        dispatch(fetchSortedProducts({sortBy: "rating", order: "desc"}))

        return () => {
            dispatch(setIsLoading(true))
        }
    }, [])

    return <>
        <Products/>
    </>
}

export default Main