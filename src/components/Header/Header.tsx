import logo from "../../assets/images/logo.svg"
import styles from "./Header.module.css"
import {NavLink, useLocation} from "react-router-dom";
import React from "react";

const Header: React.FC = () => {
    const {pathname} = useLocation()

    return <header>
        <NavLink to={"/"}>
            <div className={styles.header_main}>
                <img className={styles.logo} src={logo} alt={'logo'}/>
                <div>Pizza</div>
            </div>
        </NavLink>
        {pathname === '/cart' ? undefined :
            <NavLink to={'/cart'} className={styles.header__cart_button}>Корзина</NavLink>}
    </header>
};

export default Header