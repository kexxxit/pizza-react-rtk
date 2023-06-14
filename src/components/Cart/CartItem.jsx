import styles from "./Cart.module.css"
import {addProductToCart, removeSingleProductFromCart} from "../../store/products/cartSlice";
import {useDispatch} from "react-redux";

const CartItem = ({id, title, size, price, count, imageUrl}) => {
    const dispatch = useDispatch()

    const addToCartHandler = () => {
        dispatch(addProductToCart({id, title, size, price, imageUrl}))
    }

    const removeFromCartHandler = () => {
        dispatch(removeSingleProductFromCart({id,size}))
    }

    return <div className={styles.cart_item}>
        <img className={styles.cart_item__img} src={imageUrl}/>
        <div className={styles.cart_item__options}>
            <div className={styles.cart_item__options_name}>{title}</div>
            <div className={styles.cart_item__options_size}>{size} см.</div>
        </div>
        <div className={styles.cart_item__counter}>
            <div onClick={removeFromCartHandler} className={styles.cart_item__counter_button}>
                <span >-</span>
            </div>
            <span>{count}</span>
            <div onClick={addToCartHandler} className={styles.cart_item__counter_button}>
                <span >+</span>
            </div>
        </div>
        <div className={styles.cart_item__total}>{price * count} руб.</div>
        <div className={styles.cart_item__delete_button}>✖</div>
    </div>
}

export default CartItem