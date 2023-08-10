import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ProductDetails() {
    const { id } = useParams();

    const [product, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
            setData(response.data);
        });
    }, [id]);

    return (
        <div className="product-details">
            <Link to={`/products/category/${product.category}`} className="go-to-back">
                Go to back
            </Link>
            <div className="product">
                <img src={product.image} alt="product" className="product-image" />
                <div className="product-body">
                    <p className="product-title">{product.title}</p>
                    <p className="product-description">{product.description}</p>
                    <div className="product-price">
                        <span>Price : </span>
                        {product.price} $
                    </div>
                </div>
            </div>
        </div>
    );
}
