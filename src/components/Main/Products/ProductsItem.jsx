import styles from "./Products.module.css";
import {useState} from "react";
import {addProductToCart} from "../../../store/products/cartSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProductsItem = ({id, imageUrl, title, typed, sizes, price, category, rating}) => {
    const [activeSize, setActiveSize] = useState(0)
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cart.items)
    const itemIncludes = cartItems.find(obj => obj.id === id && obj.size === sizes[activeSize])

    const addToCartHandler = () => {
        dispatch(addProductToCart({id, title, size: sizes[activeSize], price, imageUrl, count: 1}))
    }

    return <div className={styles.products_item}>
        <Link to={`/pizza/${id}`}>
            <img className={styles.products_item__img} src={imageUrl}/>
        </Link>
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
            <div onClick={addToCartHandler}
                 className={styles.add_to_cart_button}>{itemIncludes ? `Добавить | ${itemIncludes.count}` : 'В корзину'}</div>
        </div>
    </div>
}

export default ProductsItem