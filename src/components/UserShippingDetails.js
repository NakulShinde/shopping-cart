
import React from "react"
import styles from './UserShippingDetails.module.css'

const UserShippingDetails = (props) => {
    return (
        <div className={styles.userDetails}>
            <div className={styles.userDetailsLeft}>
                <h3>Shipping to:</h3>
                <span>Nakul Shinde</span>
                <h4>Address:</h4>
                <span>New sangavi, Pune</span>
            </div>
            <div className={styles.userDetailsRight}>
            </div>
        </div>
    )
}

export default UserShippingDetails;