import React from 'react';
import { Link } from 'react-router-dom';

export default function StoreSection() {
    return (
        <div className="store-info">
            <div className="container">
                <div className="store-images">
                    <Link to={'/products'}>
                        <img
                            src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
                            alt="product-image1"
                        ></img>
                        <img
                            src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
                            alt="product-image2"
                        ></img>
                        <img
                            src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                            alt="product-image3"
                        ></img>
                        <img
                            src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg"
                            alt="product-image4"
                        ></img>
                    </Link>
                </div>
                <p className="store-info-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    );
}
