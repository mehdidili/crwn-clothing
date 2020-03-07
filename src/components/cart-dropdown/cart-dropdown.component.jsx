import React, { Component } from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
const CartDropdown = () => {
        return (
            <div className='cart-dropdown' >
                <div className='cart-items'>

                </div>
                <CustomButton inverted >GO TO CHECK OUT</CustomButton>
            </div>
        );

};

export default CartDropdown;