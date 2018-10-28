import React from 'react';

export const Button = (props) => {
    return <button className="button botton-default">{props.text}</button>
}

export const PrimaryButton = (props) => {
    return <button className="button botton-primary">{props.text}</button>
}
