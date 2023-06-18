import Products from "./Products/Products";
import {useEffect} from "react";
import {fetchSortedProducts, setIsLoading} from "../../store/products/productsSlice";
import {useDispatch, useSelector} from "react-redux";

const Main = props => {
    const dispatch = useDispatch()
    const isLoading = useSelector(state => state.products.isLoading)

    useEffect(() => {
        dispatch(fetchSortedProducts({sortBy: "rating", order: "desc"}))

        return () => {
            dispatch(setIsLoading(true))
        }
    }, [])

    return <>
        <Products isLoading={isLoading}/>
    </>
}

export default Main