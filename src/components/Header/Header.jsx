import logo from "../../assets/images/logo.svg"
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = props => {

    return <header>
        <div className={styles.header_main}>
            <img className={styles.logo} src={logo} alt={'logo'}/>
            <div>Pizza</div>
        </div>
        <NavLink to={'/cart'} className={styles.header__cart_button}>Корзина</NavLink>
    </header>
};

export default Header