import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { clearItemFromCart, removeItem, addItemToCart } from '../../redux/cart/cart.actions';

const CheckoutItem = ({item, clearItem, removeItem, addItem}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={item.imageUrl}  alt={item.name} />
        </div>
        <span className='name'>{item.name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(item)} >&#10094;</div>
            <div className='value'>{item.quantity}</div>
            <div className='arrow' onClick={() => addItem(item)}>&#10095;</div>

        </span>
        <span className='price'>{item.price}</span>
        <span className='remove-button' onClick={() => clearItem(item)}>&#10005;</span>
    </div>

);

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItemToCart(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

