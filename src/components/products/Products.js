import React from 'react';
import './Product.css';

const Products = ({event}) => {
    return (
        <div className='col-md-3'>
            <img className='product-img' src={event.imageURL} alt=""/>
            <p>{event.name}</p>
            <p>{event.price}</p>
            

            
        </div>
    );
};

export default Products;