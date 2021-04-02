import React, { useEffect, useState } from 'react';
import Products from '../products/Products';

const Home = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {

        fetch('https://cherry-surprise-37687.herokuapp.com/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    return (


        <div className="row">
            {
                events.map(event => <Products event={event}></Products>)
            }

        </div>
    );
};

export default Home;