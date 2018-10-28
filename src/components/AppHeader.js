import React, {Component} from 'react';

import styles from './AppHeader.module.css'

class AppHeader extends Component {
    constructor(props) {
        super(props);
    }
    changeTheme(colorCode) {
        let root = document.documentElement;
        root.style.setProperty('--button-primary-background', colorCode);
        root.style.setProperty('--text-color-heading', colorCode);
        root.style.setProperty('--header-background-color', colorCode);
    }

    render() {
        return (
            <header className={styles.appHeader}>
                <span>
                    Shopping Cart
                </span>
                <div className={styles.themeSelection}>
                    <h5>Change Theme</h5>
                    <div className={[styles.theme, styles.themeGreen].join(' ')} onClick={() => this.changeTheme('#4CAF50')}></div>
                    <div className={[styles.theme, styles.themeBlue].join(' ')} onClick={() => this.changeTheme('#2196F3')}></div>
                    <div className={[styles.theme, styles.themeOrange].join(' ')} onClick={() => this.changeTheme('#f44336')}></div>
                </div>
            </header>

        )};
}
export default AppHeader;