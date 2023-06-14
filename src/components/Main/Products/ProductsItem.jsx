import styles from "./Products.module.css";
import {useState} from "react";
import {addProductToCart} from "../../../store/products/cartSlice";
import {useDispatch, useSelector} from "react-redux";

const ProductsItem = ({id, imageUrl, title, typed, sizes, price, category, rating}) => {
    const [activeSize, setActiveSize] = useState(0)
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.cart)

    const addToCartHandler = () => {
       dispatch(addProductToCart({id, title, size: sizes[activeSize], price, imageUrl, count: 1}))
    }

    return <div className={styles.products_item}>
        <div>
            <img className={styles.products_item__img} src={imageUrl}/>
        </div>
        <div className={styles.products_item__title}>{title}</div>
        <div className={styles.products_item__options}>
            <div className={styles.products_item__options_size}>
                {sizes.map((size, index) => <div key={index}
                                                 onClick={() => setActiveSize(index)}
                                                 className={`${styles.products_item__options_size_item} ${index === activeSize && styles.products_item__options_size__active}`}>{size} см</div>)}
            </div>
        </div>
        <div className={styles.products_item__checkout}>
            <div>От {price} руб</div>
            <div onClick={addToCartHandler} className={styles.add_to_cart_button}>В корзину</div>
        </div>
    </div>
}

export default ProductsItem