import React, {Component} from 'react';
import './App.css';

import AppHeader from './components/AppHeader'
import ShoppingCartProductDetails from './components/ShoppingCartProductDetails'
import ShoppingCartFooter from './components/ShoppingCartFooter'
import ShoppingCartSteps from './components/ShoppingCartSteps'
import UserShippingDetails from './components/UserShippingDetails'

class App extends Component {
    
    render() {
        return (
            <div className="app">
            <AppHeader></AppHeader>
                <main className="app-main">
                    <div className="cart-content">
                        <ShoppingCartSteps></ShoppingCartSteps>
                        <UserShippingDetails></UserShippingDetails>
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
