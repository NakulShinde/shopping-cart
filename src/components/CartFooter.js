import React, {Component} from 'react';

const CartFooter = () => {
    return <div className="cart-footer">
        <div className="card-total-section">
            <div className="card-total-section-left"></div>
            <div className="card-total-section-right">
                <div>Total:
                    <span>123</span>
                </div>
                <div>Tax (10%):
                    <span>123</span>
                </div>
                <div className="cart-footer-final-total">Final Total:
                    <span>123</span>
                </div>
            </div>
        </div>
    </div>
};

export default CartFooter;