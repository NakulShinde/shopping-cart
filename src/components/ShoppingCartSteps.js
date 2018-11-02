import React, {Component} from 'react';

import styles from './ShoppingCartSteps.module.css'

const Step = (props) => (
    <div className={styles.cartStepWrapper} onClick={ ()=> {props.onStepClick(props.stepNumber)}}>
        <div
            className={[
            styles.cartStep,
            (props.isActive)
                ? styles.cartStepActive
                : ''
        ].join(' ')}>{props.stepNumber}</div>
        {props.name}
    </div>
);

class ShoppingCartSteps extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cartSteps: [
                {
                    name: 'My Cart',
                    id: 'cart-step-my-cart'
                }, {
                    name: 'Payment',
                    id: 'cart-step-payment'
                }
            ],
            activeStep: 1
        }
    }

    onStepClick(newActiveStep) {
        this.setState({activeStep: newActiveStep});
        this.props.setActiveStep(newActiveStep);
    }

    render() {

        return (
            <div className={styles.cartHeader}>
                <div className={styles.cartHeaderStepsWrapper}>
                    {this
                        .state
                        .cartSteps
                        .map((step, index) => (
                            <Step
                                key={index}
                                stepNumber={index + 1}
                                isActive={(this.state.activeStep === (index + 1))
                                ? true
                                : false}
                                onStepClick={this.onStepClick.bind(this)}
                                name={step.name}></Step>
                        ))}
                </div>
            </div>
        )
    }
}
export default ShoppingCartSteps;
