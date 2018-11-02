import React, {Component} from 'react';

import styles from './ShoppingCartFooter.module.css'
import {Button, PrimaryButton} from './shared/Buttons'

import {LabelPriceTag} from './shared/CommonTags'

class ShoppingCartFooter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cartTotal: 0,
            cartTaxPercentage: 10
        };
    }

    componentDidMount() {
        this.setState({products: this.props.products});
    }
    componentWillReceiveProps(newProps) {
        this.setState({products: newProps.products});
    }

    render() {

        const cartTotal = this
            .state
            .products
            .reduce((sum, product) => {
                return sum + (product.numberOfUnits * product.pricePerUnit);
            }, 0);

        const cartPercentage = cartTotal * (this.state.cartTaxPercentage / 100);
        const finalCartTotal = cartTotal + cartPercentage;
        return (
            <React.Fragment>
                <div className={styles.cardTotalSection}>
                    <div className={styles.cardTotalSectionLeft}>
                        <div>
                            <Button text="Empty Cart"></Button>
                            <Button text="Save Cart"></Button>
                        </div>
                    </div>
                    <div className={styles.cardTotalSectionRight}>
                        <LabelPriceTag label="Total" value={cartTotal}></LabelPriceTag>
                        <LabelPriceTag
                            label={["Tax (", this.state.cartTaxPercentage, "%)"].join('')}
                            value={cartPercentage}></LabelPriceTag>
                        <LabelPriceTag
                            label="Final Cart Total"
                            value={finalCartTotal}
                            customClass={styles.cartFooterFinalTotal}></LabelPriceTag>

                        <div className={styles.cartFooterCheckout}>
                            <PrimaryButton text="Checkout"></PrimaryButton>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};

export default ShoppingCartFooter;