import React, {Component} from 'react';

import styles from './ShoppingCartProductDetails.module.css'

import ProductUnits from './shared/ProductUnits'
import {LabelPriceTag} from './shared/CommonTags'

const ProductNameDetails = (props) => (
    <div className={styles.cartProductName}>
        <div>
            <h4>Product Name:</h4>
            <span>
                {props.product.name}</span>
        </div>
        <div>Items id: {props.product.id}</div>
    </div>
);

const ProductInfo = (props) => (
    <div className={styles.cartProductDetails}>
        <div className={styles.cartProductDetailsImage}>
            <a href="#">
                <img src={props.product.icon}></img>
            </a>
        </div>
        <ProductNameDetails product={props.product}></ProductNameDetails>
    </div>
);

const ProductPricingDetails = (props) => (
    <div className={styles.cartProductPricingDetails}>
        <ProductUnits
            numberOfUnits={props.product.numberOfUnits}
            unitsInputChange={props.unitsInputChange}
            labelText="Unit"></ProductUnits>
        <LabelPriceTag label="Unit Price" value={props.product.pricePerUnit}></LabelPriceTag>
        <LabelPriceTag
            label="Total Price"
            value={props.product.pricePerUnit * props.product.numberOfUnits}></LabelPriceTag>
    </div>
);

class ShoppingCartProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        console.log("ShoppingCartProductDetails componentDidMount", this.props.product);
        this.setState({product: this.props.product});
    }
    componentWillReceiveProps(newProps) {

        console.log("componentWillReceiveProps componentDidMount", newProps);
        this.setState({product: newProps.product});
    }

    unitsInputChange(newUnits) {

        this.setState((prev, newState) => {
            let product = Object.assign(prev.product, {numberOfUnits: newUnits});
            this.props.numberOfUnitsUpdate(product);
            return {product: product};
        });
    }

    removeProduct() {
        this.props.removeProduct(this.state.product.id);
    }
    render() {
        if(!this.state.product){
            return <div className="cart-internal-content">
                No Product data. Please add product in cart.
            </div>
        }
        const product = this.state.product;
        return (
            <div className="cart-internal-content">
                <ProductInfo product={product}></ProductInfo>
                <ProductPricingDetails
                    product={product}
                    unitsInputChange={this
                    .unitsInputChange
                    .bind(this)}></ProductPricingDetails>
                <div>
                    <span
                        className={styles.removeProduct}
                        onClick={this
                        .removeProduct
                        .bind(this)}>x</span>
                </div>
            </div>
        )
    };
};

export default ShoppingCartProductDetails;