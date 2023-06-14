import styles from "./Products.module.css";
import {useState} from "react";

const ProductsItem = ({imageUrl, title, typed, sizes, price, category, rating}) => {
    const [activeSize, setActiveSize] = useState(0)

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
            <div className={styles.add_to_cart_button}>В корзину</div>
        </div>
    </div>
}

export default ProductsItem