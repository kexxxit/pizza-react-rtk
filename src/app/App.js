import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from "../components/Cart/Cart";

const App = () => (
    <BrowserRouter>
        <div className={'container'}>
            <Header/>
            <Routes>
                <Route path={'/cart'} element={<Cart/>}/>
                <Route path={'/'} element={<Main/>}/>
            </Routes>
        </div>
    </BrowserRouter>
);

export default App;
