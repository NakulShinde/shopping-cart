import React, {Component} from 'react';

const CartProductDetails = () => {
    return <div className="cart-product-container">
        <div className="cart-product">
            <div className="cart-product-details">
                <div className="image">
                    <a href="#">
                        <img src="/images/Golden Elegance Tree 4 - DSC8750 TN.jpg"></img>
                    </a>
                </div>
                <div className="cart-product-name">
                    <div>Product Name</div>
                    <div>Product sub details</div>
                </div>
            </div>
            <div className="cart-product-pricing-details">
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

export default CartProductDetails;