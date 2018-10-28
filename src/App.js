import React, {Component} from 'react';
import './App.css';

import AppHeader from './components/AppHeader'
import ShoppingCartProductDetails from './components/ShoppingCartProductDetails'
import ShoppingCartFooter from './components/ShoppingCartFooter'
import ShoppingCartSteps from './components/ShoppingCartSteps'
import UserShippingDetails from './components/UserShippingDetails'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products:[{
                name: "Golden Elegance Tree 1",
                icon: '/images/Golden Elegance Tree 4 - DSC8750 TN.jpg',
                id: 123457656876,
                pricePerUnit: 12345,
                numberOfUnits: 2
            },{
                name: "Golden Elegance Tree21",
                icon: '/images/Golden Elegance Tree 4 - DSC8750 TN.jpg',
                id: 123452135652,
                pricePerUnit: 2345,
                numberOfUnits: 1
            }]
        }
    }

    removeProduct(productId){
        
        let newStateProducts = this.state.products.filter((product) =>{
            return product.id !== productId;
        });
        console.log("newStateProducts",newStateProducts);
        this.setState({products: newStateProducts});
    }

    numberOfUnitsUpdate(productUpdated){
        let newStateProducts = this.state.products.map((product) =>{
            return (product.id !== productUpdated.id)? product : productUpdated;
        });
        
        this.setState({products: newStateProducts});
    }

    render() {
        return (
            <div className="app">
            <AppHeader></AppHeader>
                <main className="app-main">
                    <div className="cart-content">
                        <ShoppingCartSteps></ShoppingCartSteps>
                        <UserShippingDetails></UserShippingDetails>
                        { (this.state.products.length > 0) ?this.state.products.map( (product, index)=> (
                            <ShoppingCartProductDetails 
                                key={index} 
                                product={product}
                                removeProduct={this.removeProduct.bind(this)}
                                numberOfUnitsUpdate={this.numberOfUnitsUpdate.bind(this)}
                                ></ShoppingCartProductDetails>
                            )
                        ) : <ShoppingCartProductDetails></ShoppingCartProductDetails>}
                            <ShoppingCartFooter products={this.state.products}></ShoppingCartFooter>
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
