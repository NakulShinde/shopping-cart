import React, {Component} from 'react';
import './App.css';

import AppHeader from './components/AppHeader'
import ShoppingCartFooter from './components/ShoppingCartFooter'
import ShoppingCartSteps from './components/ShoppingCartSteps'
import UserShippingDetails from './components/UserShippingDetails'
import MyCartSection from './components/MyCartSection'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCartStep : 1
        }
    }
    setActiveStep(newActiveStep){
        this.setState({activeCartStep: newActiveStep});
    }
    
    render() {
        let stepContent = null;
        if(this.state.activeCartStep === 1){
            stepContent = <MyCartSection></MyCartSection>
        }else {
            stepContent = <div className="cart-internal-content">
            No Payment content.
        </div>
        }
        return (
            <div className="app">
                <AppHeader></AppHeader>
                <main className="app-main">
                    <div className="cart-content">
                        <ShoppingCartSteps setActiveStep={this.setActiveStep.bind(this)}></ShoppingCartSteps>
                        <UserShippingDetails></UserShippingDetails>
                        {stepContent}
                    </div>
                </main>
                <footer className="app-footer">
                    Shopping cart hands on
                </footer>
            </div>
        );
    }
}

export default App;
