import styles from './Cart.module.css'
import CartItem from "./CartItem";
import {CartProduct, clearCart} from "../../store/products/cartSlice";
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypesSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";

const Cart = () => {
    const products = useTypedSelector(state => state.cart.items)
        .map((elem: CartProduct, index: number) => <CartItem key={index} {...elem}/>)
    const totalPrice = useTypedSelector(state => state.cart.totalPrice)
    const dispatch = useAppDispatch()

    return <div className={styles.cart}>
        <div>
            <Link to={'/'} className={styles.cart_return_button}>❮ Назад</Link>
            <div className={styles.cart_header}>
                <div className={styles.cart_header__title}>Корзина</div>
                <div onClick={() => {
                    dispatch(clearCart())
                }} className={styles.cart_header__clear_button}>🛒 Очистить корзину
                </div>
            </div>
            <div>
                {products.length === 0 ? <div className={styles.cart_empty}>Корзина пуста 😩</div> : products}
            </div>
            <div className={styles.cart_footer}>
                <div className={styles.cart_footer__total}>
                    <span>Сумма заказа:</span>
                    <span className={styles.cart_footer__total_price}>{totalPrice} ₽
                    </span>
                </div>
                <div className={styles.cart_footer__button}>Оформить заказ</div>
            </div>
        </div>
    </div>
}

export default Cart