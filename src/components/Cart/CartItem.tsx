import styles from "./Cart.module.css"
import {
    addProductToCart,
    CartProduct,
    decrementProductFromCart,
    removeProductFromCart
} from "../../store/products/cartSlice";
import React from "react";
import {useAppDispatch} from "../../hooks/useAppDispatch";

const CartItem: React.FC<CartProduct> = ({id, title, size, price, count, imageUrl}) => {
    const dispatch = useAppDispatch()

    const addToCartHandler = () => {
        dispatch(addProductToCart({id, title, size, price, imageUrl}))
    }

    const decrementItemFromCartHandler = () => {
        dispatch(decrementProductFromCart({id, size}))
    }

    const removeItemFromCartHandler = () => {
        dispatch(removeProductFromCart({id, size}))
    }

    return <div className={styles.cart_item}>
        <img className={styles.cart_item__img} src={imageUrl}/>
        <div className={styles.cart_item__options}>
            <div className={styles.cart_item__options_name}>{title}</div>
            <div className={styles.cart_item__options_size}>{size} см.</div>
        </div>
        <div className={styles.cart_item__counter}>
            <div onClick={decrementItemFromCartHandler} className={styles.cart_item__counter_button}>
                <span>-</span>
            </div>
            <span>{count}</span>
            <div onClick={addToCartHandler} className={styles.cart_item__counter_button}>
                <span>+</span>
            </div>
        </div>
        <div className={styles.cart_item__total}>{price * count!} ₽</div>
        <div onClick={removeItemFromCartHandler} className={styles.cart_item__delete_button}>✖</div>
    </div>
}

export default CartItem