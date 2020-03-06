import React, { Component } from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from  '../../assets/shopping-bg.svg';

class CartIcon extends Component{
    constructor(){
        super();
    }

    render() {
        return (
            <div className='cart-icon'>
                <ShoppingIcon className='shopping-icon' />    
                <span className='item-count'>0</span>
            </div>
        );

    };

};

export default CartIcon;