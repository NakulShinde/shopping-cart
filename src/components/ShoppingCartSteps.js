import React, {Component} from 'react';

import styles from './ShoppingCartSteps.module.css'

const Step = (props) => (
    <div className={styles.cartStepWrapper}>
        <div className={styles.cartStep}>{props.text}</div>
        {props.name}
    </div>
   );
   
const ShoppingCartSteps = () => {

    return <div className={styles.cartHeader}>
        <div className={styles.cartHeaderStepsWrapper}>
            <Step text="1" name="My Cart"></Step>
            <Step text="2" name="Payment"></Step>
        </div>
    </div>
}
export default ShoppingCartSteps;
