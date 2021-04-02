import React from 'react';
import './Product.css';

const Products = ({ event }) => {

const handleAddOder = () => {
   console.log('PAICI VAI')
}


    return (
        <div className='col-md-3'>
            <div className='card-div '>
                <img className='product-img' src={event.imageURL} alt="" />
                <h5>{event.name}</h5>

                <div className='btn-div'>
                    <h3>${event.price}</h3>
                    <button onClick={handleAddOder} id="buy-btn">buy now</button>
                </div>

            </div>



        </div>
    );
};

export default Products;