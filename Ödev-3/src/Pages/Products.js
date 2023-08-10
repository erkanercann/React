import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Products() {
    const { name } = useParams();

    const [products, setData] = useState([]);

    useEffect(() => {
        let API_URL = 'https://fakestoreapi.com/products';

        if (name) {
            API_URL = `https://fakestoreapi.com/products/category/${name}`;
        }

        axios.get(API_URL).then((response) => {
            setData(response.data);
        });
    }, [name]);

    return (
        <div className="products">
            <Link to={`/`} className="go-to-homepage">
                Go to Homepage
            </Link>
            {products.map((product) => {
                return (
                    <div key={product.id} className="product">
                        <Link
                            to={`/product-details/${product.id}`}
                            className="product-image-wrapper"
                        >
                            <img
                                src={product.image}
                                alt="product"
                                className="product-image"
                            />
                        </Link>
                        <div className="product-body">
                            <p className="product-title">
                                {product.title.slice(0, 60)}...
                            </p>
                            <p className="product-description">
                                {product.description.slice(0, 30)}...
                            </p>
                            <div className="product-price">
                                <span>Price : </span>
                                {product.price} $
                            </div>
                            <div className="product-rate">
                                <span>
                                    <i className="fa-solid fa-star"></i>{' '}
                                    {product.rating.rate} / 5
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Products;
