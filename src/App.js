import React, {Component} from 'react';
import './App.css';

import CartProductDetails from './components/CartProductDetails'
import CartFooter from './components/CartFooter'

class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="app-header">
                    <h2>
                        Shopping Cart
                    </h2>
                </header>
                <main className="app-main">
                    <div className="cart-content">
                        <div className="cart-header">
                            <div className="cart-header-steps-wrapper">
                                <div className="cart-step">1</div>
                                <div className="cart-step">2</div>
                                <div className="cart-step">3</div>
                                <div className="cart-step">4</div>
                            </div>
                        </div>
                        <CartProductDetails ></CartProductDetails>
                        <CartProductDetails ></CartProductDetails>
                        <CartFooter></CartFooter>       
                    </div>
                </main>

                <footer className="app-footer">
                    Shopping cart hands on

                </footer>
            </div>
        );
    }
}

export default App;
