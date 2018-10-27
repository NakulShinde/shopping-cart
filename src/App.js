import React, {Component} from 'react';
import './App.css';

import ShoppingCartProductDetails from './components/ShoppingCartProductDetails'
import ShoppingCartFooter from './components/ShoppingCartFooter'
import ShoppingCartSteps from './components/ShoppingCartSteps'

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
                        <ShoppingCartSteps></ShoppingCartSteps>
                        <ShoppingCartProductDetails></ShoppingCartProductDetails>
                        <ShoppingCartProductDetails></ShoppingCartProductDetails>
                        <ShoppingCartFooter></ShoppingCartFooter>       
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
