import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

const App = () => (
    <div className={'container'}>
        <Header />
        <Main />
    </div>
);

export default App;
