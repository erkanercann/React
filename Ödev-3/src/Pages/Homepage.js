import React, { Component } from 'react';
import StoreSection from '../Components/StoreSection';

export default class Homepage extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
            <>
                <div className="greeting">
                    <h1 className="greeting-title">Welcome</h1>
                    <div className="greeting__store-intro">
                        <img
                            className="greeting__store-image"
                            src="https://fakestoreapi.com/icons/intro.svg"
                            alt="store"
                        />

                        <div className="greeting__store-description">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
                <StoreSection />
            </>
        );
    }
}
