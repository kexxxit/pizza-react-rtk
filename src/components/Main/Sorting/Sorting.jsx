import styles from './Sorting.module.css'
import {useRef, useState} from "react";
import {fetchProducts, fetchSortedProducts} from "../../../store/products/productsSlice";
import {useDispatch} from "react-redux";

const Sorting = props => {
    const [isOpen, setIsOpen] = useState(false)
    const popupRef = useRef()
    const sortByRef = useRef()
    const dispatch = useDispatch()

    const togglePopup = () => {
        if (isOpen) {
            setIsOpen(false)
            popupRef.current.style.display = "none"
        } else {
            setIsOpen(true)
            popupRef.current.style.display = "block"
        }
    }

    const onSelectSortType = (sortBy, order, sortType) => {
        togglePopup()
        dispatch(fetchSortedProducts({sortBy, order}))
        sortByRef.current.innerHTML = sortType
    }

    return <div className={styles.sort}>
        <span>Соритровать по:</span>
        <span ref={sortByRef} onClick={togglePopup} className={styles.sort_type}>рейтингу</span>
        <div ref={popupRef} className={styles.popup}>
            <div onClick={() => {
                onSelectSortType('rating', 'desc', 'рейтингу')
            }} className={styles.popup_elem}>рейтингу
            </div>
            <div onClick={() => {
                onSelectSortType('price', 'asc', 'возрастанию цены')
            }} className={styles.popup_elem}>возрастанию цены
            </div>
            <div onClick={() => {
                onSelectSortType('price', 'desc', 'убыванию цены')
            }} className={styles.popup_elem}>убыванию цены
            </div>
        </div>
    </div>
}

export default Sorting