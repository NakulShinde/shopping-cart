import React, {Component} from 'react';

import styles from './ShoppingCartSteps.module.css'

const ShoppingCartSteps = () => {

    return <div className={styles.cartHeader}>
        <div className={styles.cartHeaderStepsWrapper}>
            <div className={styles.cartStep}>1</div>
            <div className={styles.cartStep}>2</div>
            <div className={styles.cartStep}>3</div>
            <div className={styles.cartStep}>4</div>
        </div>
    </div>
}
export default ShoppingCartSteps;


