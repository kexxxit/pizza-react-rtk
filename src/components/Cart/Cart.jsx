import styles from './Cart.module.css'
import {useDispatch, useSelector} from "react-redux";
import CartItem from "./CartItem";
import {clearCart} from "../../store/products/cartSlice";
import {Link} from "react-router-dom";

const Cart = props => {
    const products = useSelector(state => state.cart.items)
        .map((elem, index) => <CartItem key={index} {...elem}/>)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    const dispatch = useDispatch()

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
            <div className={styles.cart_items}>
                {products.length === 0 ? <div className={styles.cart_empty}>Корзина пуста 😩</div> : products}
            </div>
            <div className={styles.cart_footer}>
                <div className={styles.cart_footer__total}>
                    <span>Сумма заказа:</span>
                    <span className={styles.cart_footer__total_price}>{totalPrice} руб.</span>
                </div>
                <div className={styles.cart_footer__button}>Оформить заказ</div>
            </div>
        </div>
    </div>
}

export default Cart