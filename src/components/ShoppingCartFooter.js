import React from 'react';

import styles from './ShoppingCartFooter.module.css'
import {Button, PrimaryButton} from './shared/Buttons'

import {LabelPriceTag} from './shared/CommonTags'

const ShoppingCartFooter = () => {
    return <div className={styles.cartfooter}>
        <div className={styles.cardTotalSection}>
            <div className={styles.cardTotalSectionLeft}>
                <div>
                    <Button text="Empty Cart"></Button>
                    <Button text="Save Cart"></Button>
                </div>
            </div>
            <div className={styles.cardTotalSectionRight}>
                <LabelPriceTag label="Total" value="123"></LabelPriceTag>
                <LabelPriceTag label="Tax (10%)" value="123"></LabelPriceTag>
                <LabelPriceTag
                    label="Final Cart Total"
                    value="123"
                    customClass={styles.cartFooterFinalTotal}></LabelPriceTag>

                <div className={styles.cartFooterCheckout}>
                    <PrimaryButton text="Checkout"></PrimaryButton>
                </div>
            </div>
        </div>
    </div>
};

export default ShoppingCartFooter;