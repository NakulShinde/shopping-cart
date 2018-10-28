import React from 'react';

export const PriceTag = (props) => {
    return <span>${props.value}</span>
}

export const LabelPriceTag = (props) => {
    return <div className={[props.customClass || '', 'label-price-container'].join(' ')}>
        <span className="label">
            {props.label}:
        </span>
        <PriceTag value={props.value}></PriceTag>
    </div>
}