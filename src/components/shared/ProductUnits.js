import React, {Component} from 'react'

class ProductUnits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOfUnits: 0
        };
        
    }
    
    componentDidMount(){
        console.log("componentDidMount", this.props.numberOfUnits);

        this.setState({
            numberOfUnits : this.props.numberOfUnits
        })
    }

    handleChange(event) {
        let value = (event.target.value !== "")? event.target.value : 0;
        this.setState({numberOfUnits: value});
        this.props.unitsInputChange(value);
    }

    render() {
        return (
            <div className="label-price-container">
                <span>{this.props.labelText}:</span>
                <span>
                    <input value={this.state.numberOfUnits} onChange={this.handleChange.bind(this)} />
                </span>
            </div>
        )
    }
}

export default ProductUnits;