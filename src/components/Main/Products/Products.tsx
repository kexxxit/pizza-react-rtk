import styles from "./Products.module.css"
import ProductsItem from "./ProductsItem";
import Sorting from "../Sorting/Sorting";
import ProductsLoader from "../../ui/ProductsLoader/ProductsLoader";
import React from "react";
import {useTypedSelector} from "../../../hooks/useTypesSelector";
import {Product} from "../../../store/products/productsSlice";

const Products: React.FC = () => {
    const products = useTypedSelector(state => state.products.items)
        .map((product: Product) => <ProductsItem {...product} key={product.id}/>)
    const isLoading = useTypedSelector(state => state.products.isLoading)
    const loader = [...new Array(8)].map((_, index) => <ProductsLoader key={index}/>)

    return <div className={styles.products}>
        <div className={styles.products_header}>
            <div className={styles.products_title}>Пицца</div>
            <Sorting/>
        </div>

        <div className={styles.products_items}>
            {isLoading ? loader : products}
        </div>
    </div>
}

export default Products