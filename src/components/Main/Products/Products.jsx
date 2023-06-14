import styles from "./Products.module.css"
import ProductsItem from "./ProductsItem";
import {useEffect} from "react";
import {useSelector} from "react-redux";

const Products = props => {
    const products = useSelector(state => state.products.products)
        .map((product, index) => <ProductsItem {...product} key={product.id}/>)

    return <div>
        <div className={styles.products_title}>Пицца</div>
        <div className={styles.products_items}>
            {products}
        </div>
    </div>
}

export default Products