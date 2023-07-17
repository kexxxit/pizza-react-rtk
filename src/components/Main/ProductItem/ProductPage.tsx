import styles from './ProductPage.module.css'
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {productsAPI} from "../../../api/api";
import ProductsLoader from "../../ui/ProductsLoader/ProductsLoader";
import {Product} from "../../../store/products/productsSlice";
import ProductsItem from "../Products/ProductsItem";

const ProductPage: React.FC = () => {

    const [currentProduct, setCurrentProduct] = useState<Product>()
    const {id} = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const {data} = await productsAPI.getProductById(id!)
                setCurrentProduct(data)
            } catch (e) {
                console.log(e)
            }
        }

        fetchProduct()
    }, [])

    return <div className={styles.pizza_item}>
        <div className={styles.pizza_item__wrapper}>
            {!currentProduct ? <ProductsLoader/> : <ProductsItem {...currentProduct}/>}
        </div>
    </div>
}

export default ProductPage