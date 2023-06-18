import styles from "./Products.module.css"
import ProductsItem from "./ProductsItem";
import {useSelector} from "react-redux";
import Sorting from "../Sorting/Sorting";
import ProductsLoader from "../../ui/ProductsLoader/ProductsLoader";

const Products = props => {
    const products = useSelector(state => state.products.items)
        .map((product) => <ProductsItem {...product} key={product.id}/>)
    const isLoading = useSelector(state => state.products.isLoading)
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