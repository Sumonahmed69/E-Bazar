import React from 'react';
import './Checkout.css';
import { Button } from 'react-bootstrap';

const Checkout = () => {
    return (
        <div id='checkout-form'>
            <h1>Checkout</h1>
            <div id='oder-frm'>

                <p>ok</p>
            </div>
            <Button id='checkout-btn' variant="success">Login</Button>{' '}
        </div>
    );
};

export default Checkout;