import React, {Component} from 'react';

import styles from './ShoppingCartProductDetails.module.css'

const ShoppingCartProductDetails = () => {
    return <div className={styles.cartProductContainer}>
        <div className={styles.cartProduct}>
            <div className={styles.cartProductDetails}>
                <div className={styles.cartProductDetailsImage}>
                    <a href="#">
                        <img src="/images/Golden Elegance Tree 4 - DSC8750 TN.jpg"></img>
                    </a>
                </div>
                <div className={styles.cartProductName}>
                    <div>Product Name</div>
                    <div>Product sub details</div>
                </div>
            </div>
            <div className={styles.cartProductPricingDetails}>
                <div>
                    Units:
                    <br></br>
                    <input value="1"></input>
                </div>
                <div>
                    Per Unit Price:
                    <br></br>
                    10
                </div>
                <div>
                    Total Price:
                    <br></br>
                    20
                </div>
            </div>
        </div>
    </div>
};

export default ShoppingCartProductDetails;