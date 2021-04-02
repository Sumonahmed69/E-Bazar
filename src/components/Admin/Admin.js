import React, { useState } from 'react';
import './Admin.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faPlus, faUserShield } from '@fortawesome/free-solid-svg-icons';


const Admin = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState();



    const onSubmit = data => {

        const eventData = {

            name: data.name,
            price: data.price,
            imageURL: imageURL
        };

        const url = `https://cherry-surprise-37687.herokuapp.com/admin`;
        console.log(eventData)

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server res', res))

    };

    const handleImageUpload = event => {

        console.log(event.target.files[0]);

        const imageData = new FormData()
        imageData.set('key', '471840fd174fc211b3ff89d114bc3f99');
        imageData.append('image', event.target.files[0])


        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div className='admin-page'>


            <div className='manageproduct-div'>
                <h4>Manage Proudcts</h4><br/>
                <h6 > <FontAwesomeIcon icon={faPlus} /> Add Products</h6><br/>
                <h6> <FontAwesomeIcon icon={faPencilAlt} /> Edit Products</h6>
            </div>


            <div >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='input-from input' name="example"  placeholder='Adder product' ref={register} /> 
                    <input className='input-from input'  name="example"  placeholder='Adder price' ref={register} /> <br/> 
                    <input className='input-from' id='imgUpLoad' name="exampleRequired" type="file" onChange={handleImageUpload} /> <br />
                    <input className='input-from' id='submit-btn' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Admin;