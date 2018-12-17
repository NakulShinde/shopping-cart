import React, {Component} from 'react';

import ShoppingCartProductDetails from './product/ShoppingCartProductDetails'
import ShoppingCartFooter from './ShoppingCartFooter'

class MyCartSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    name: "Golden Elegance Tree 1",
                    icon: '/images/Golden Elegance Tree 4 - DSC8750 TN.jpg',
                    id: 123457656876,
                    pricePerUnit: 12345,
                    numberOfUnits: 2
                }, {
                    name: "Golden Elegance Tree21",
                    icon: '/images/Golden Elegance Tree 4 - DSC8750 TN.jpg',
                    id: 123452135652,
                    pricePerUnit: 2345,
                    numberOfUnits: 1
                }
            ]
        }
    }

    removeProduct(productId) {

        let newStateProducts = this.state.products.filter((product) => {
                return product.id !== productId;
            })
        this.setState({products: newStateProducts})
    }

    numberOfUnitsUpdate(productUpdated) {
        let newStateProducts = this.state.products.map((product) => {
                return (product.id !== productUpdated.id)? product : productUpdated;
            });

        this.setState({products: newStateProducts});
    }

    render() {

        let content = null;
        if (this.state.products.length === 0) {
            content = <ShoppingCartProductDetails></ShoppingCartProductDetails>;
        }else {
            content = this.state.products.map((product, index) => (
                <ShoppingCartProductDetails
                    key={index}
                    product={product}
                    removeProduct={this.removeProduct.bind(this)}
                    numberOfUnitsUpdate={this.numberOfUnitsUpdate.bind(this)}>
                </ShoppingCartProductDetails>
            ));
        }
        return (
            <React.Fragment>
                {content}
                
                <ShoppingCartFooter products={this.state.products}></ShoppingCartFooter>
            </React.Fragment>
        );

    };
}
export default MyCartSection;