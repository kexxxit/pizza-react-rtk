import styles from "./Footer.module.css"
import {useLocation} from "react-router-dom";
import React from "react";

const Footer: React.FC = () => {
    const {pathname} = useLocation()

    if (pathname === "/cart" || pathname.includes("/pizza")) {
        return undefined
    }

    return <footer className={styles.footer}>
        <div>ReactPizza © 2023</div>
        <div>
            <a className={styles.footer_nav__elem}>Правовая информация</a>
            <a className={styles.footer_nav__elem}>Калорийность и состав</a>
            <a className={styles.footer_nav__elem}>Помощь</a>
        </div>
    </footer>
}

export default Footer