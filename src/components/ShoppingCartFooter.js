import React, {Component} from 'react';

import styles from './ShoppingCartFooter.module.css'

const ShoppingCartFooter = () => {
    return <div className={styles.cartfooter}>
        <div className={styles.cardTotalSection}>
            <div className={styles.cardTotalSectionLeft}></div>
            <div className={styles.cardTotalSectionRight}>
                <div>Total:
                    <span>123</span>
                </div>
                <div>Tax (10%):
                    <span>123</span>
                </div>
                <div className={styles.cartFooterFinalTotal}>Final Total:
                    <span>123</span>
                </div>
            </div>
        </div>
    </div>
};

export default ShoppingCartFooter;