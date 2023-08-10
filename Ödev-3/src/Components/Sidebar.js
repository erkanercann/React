import React from 'react';
import { Link } from 'react-router-dom';

document.body.addEventListener('click', function (e) {
    const sidebar = document.querySelector('.sidebar');

    if (!sidebar.contains(e.target) && !e.target.classList.contains('menu-icon')) {
        sidebar.style.right = -400 + 'px';
    }
});

const activeButtons = (e) => {
    const buttons = document.querySelectorAll('.category-button');

    buttons.forEach((button) => {
        if (e.target === button) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
};

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <h3 className="sidebar-title">Categories</h3>
            <ul onClick={activeButtons} className="categories">
                <li>
                    <Link className="category-button" to="/products">
                        All Products
                    </Link>
                </li>
                <li>
                    <Link className="category-button" to="/products/category/electronics">
                        Electronics
                    </Link>
                </li>
                <li>
                    <Link className="category-button" to="/products/category/jewelery">
                        Jewelery
                    </Link>
                </li>
                <li>
                    <Link
                        className="category-button"
                        to="/products/category/men's%20clothing"
                    >
                        Men's clothing
                    </Link>
                </li>
                <li>
                    <Link
                        className="category-button"
                        to="/products/category/women's%20clothing"
                    >
                        Women's clothing
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
