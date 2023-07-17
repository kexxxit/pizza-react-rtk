import styles from "./Products.module.css";
import React, {useState} from "react";
import {addProductToCart, CartProduct} from "../../../store/products/cartSlice";
import {Link} from "react-router-dom";
import {useTypedSelector} from "../../../hooks/useTypesSelector";
import {useAppDispatch} from "../../../hooks/useAppDispatch";

type ProductsItemProps = {
    id: string,
    imageUrl: string,
    title: string,
    sizes: number[],
    price: number
}

const ProductsItem: React.FC<ProductsItemProps> = ({id, imageUrl, title, sizes, price}) => {
    const [activeSize, setActiveSize] = useState<number>(0)
    const dispatch = useAppDispatch()
    const cartItems = useTypedSelector(state => state.cart.items)
    const itemIncludes = cartItems.find((obj: CartProduct) => obj.id === id && obj.size === sizes[activeSize])

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
            <div>{price} ₽</div>
            <div onClick={addToCartHandler}
                 className={styles.add_to_cart_button}>{itemIncludes ? `Добавить | ${itemIncludes.count}` : 'В корзину'}</div>
        </div>
    </div>
}

export default ProductsItem
