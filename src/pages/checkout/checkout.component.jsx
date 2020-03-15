import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selector';

import './checkout.styles.scss';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-buttone/stripe-button.component';

const Checkout = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
        <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>

        </div>
        {
            cartItems.map(item => 
            <CheckoutItem key={item.id} item={item} />
            )
        }
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
        <StripeCheckoutButton price={total} />

    </div>
);

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems,
    total: selectCartItemsTotal
});

export default connect(mapStateToProps)(Checkout);


