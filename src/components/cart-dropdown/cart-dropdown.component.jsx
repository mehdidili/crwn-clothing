import React, { Component } from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';

const CartDropdown = ({cartItems}) => {
        return (
            <div className='cart-dropdown' >
                <div className='cart-items'>
                    {
                        cartItems.map(item => <CartItem key={item.id} item={item}/>)
                    }
                    
                </div>
                <CustomButton inverted >GO TO CHECK OUT</CustomButton>
            </div>
        );

};

const mapStateToProp = state => ({
    cartItems: state.cart.cartItems
});

export default connect(mapStateToProp)(CartDropdown);