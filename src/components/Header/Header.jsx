import logo from "../../assets/images/logo.svg"
import styles from "./Header.module.css"

const Header = props => (
    <header>
        <div className={styles.header_main}>
            <img className={styles.logo} src={logo} alt={'logo'}/>
            <div>Pizza</div>
        </div>
        <div className={styles.header__cart_button}>Корзина</div>
    </header>
);

export default Header