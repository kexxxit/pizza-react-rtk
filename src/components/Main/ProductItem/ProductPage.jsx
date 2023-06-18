import styles from './ProductPage.module.css'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {productsAPI} from "../../../api/api";
import ProductsItem from "../Products/ProductsItem";

const ProductPage = (props) => {
    const [currentProduct, setCurrentProduct] = useState(undefined)
    const {id} = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const {data} = await productsAPI.getProductById(id)
                setCurrentProduct(data)
            } catch (e) {
                console.log(e)
            }
        }

        fetchProduct()
    }, [])

    if (!currentProduct) {
        return <div>грузимся</div>
    }

    return <div className={styles.pizza_item}>
        <div className={styles.pizza_item__wrapper}>
            <ProductsItem {...currentProduct}/>
        </div>
    </div>
}

export default ProductPage