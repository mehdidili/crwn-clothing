import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publisableKey = 'pk_test_eVrwunCRFbyOWs4RfBXdVq8l00mA4JPEuN';

    const onToken = token => {
        console.log(token);
        alert('Payment Success');

    };

    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`our total is $${price}`}
            panelLable='Pay Now'
            token={onToken}
            stripeKey={publisableKey}
            price={priceForStripe}
        />
    );

}

export default StripeCheckoutButton;