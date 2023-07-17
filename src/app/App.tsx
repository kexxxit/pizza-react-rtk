import '../assets/styles/App.css';
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import {HashRouter, Route, Routes} from "react-router-dom";
import Cart from "../components/Cart/Cart";
import ProductPage from "../components/Main/ProductItem/ProductPage";
import Footer from "../components/Footer/Footer";

const App = () => {
    return (
        <HashRouter>
            <div className={'container'}>
                <Header/>
                <Routes>
                    <Route path={'/cart'} element={<Cart/>}/>
                    <Route path={'/'} element={<Main/>}/>
                    <Route path={'/pizza/:id'} element={<ProductPage/>}/>
                </Routes>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App;
