import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import Homepage from './Pages/Homepage';
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductDetails';

function showSideBar() {
    document.querySelector('.sidebar').style.right = 0;
}

function App() {
    return (
        <div className="App">
            <div className="header-main">
                <div className="container">
                    <Link to="/" className="header__logo">
                        Logo
                    </Link>
                    <button className="header__menu-button">
                        <i
                            onClick={showSideBar}
                            className="menu-icon fa-solid fa-bars"
                        ></i>
                    </button>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/products/" element={<Products />}></Route>
                <Route path="/products/category/:name" element={<Products />}></Route>
                <Route path="/product-details/:id" element={<ProductDetails />}></Route>
            </Routes>

            <Sidebar />
            <Footer />
        </div>
    );
}

export default App;
