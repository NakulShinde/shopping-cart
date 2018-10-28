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
        this.state = {
            product: {
                name: "Golden Elegance Tree 1",
                icon: '/images/Golden Elegance Tree 4 - DSC8750 TN.jpg',
                id: 123457656876,
                pricePerUnit: 12345,
                numberOfUnits: 2
            }
        }
    }
    unitsInputChange(newUnits) {

        this.setState((prev, newState)=> {
            let product = Object.assign(prev.product, {numberOfUnits: newUnits});
            return {
                product: product
            };
        });
    }
    render() {
        return (
            <div className={styles.cartProductContainer}>
                <div className={styles.cartProduct}>
                    <ProductInfo product={this.state.product}></ProductInfo>
                    <ProductPricingDetails
                        product={this.state.product}
                        unitsInputChange={this.unitsInputChange.bind(this)}></ProductPricingDetails>
                </div>
            </div>
        )
    };
};

export default ShoppingCartProductDetails;