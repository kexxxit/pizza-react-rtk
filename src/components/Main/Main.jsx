import Products from "./Products/Products";
import {useEffect} from "react";
import { fetchSortedProducts } from "../../store/products/productsSlice";
import {productsAPI} from "../../api/api";
import {useDispatch} from "react-redux";
import Sorting from "./Sorting/Sorting";


const Main = props => {
  const dispatch = useDispatch()

  useEffect( () => {
      dispatch(fetchSortedProducts({sortBy: "rating", order: "desc"}))
  }, [])

  return <>
      <Sorting />
      <Products />
  </>
}

export default Main