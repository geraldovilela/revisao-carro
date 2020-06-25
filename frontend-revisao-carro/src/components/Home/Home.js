import React from 'react';

import Header from '../Header/Header';
import ClientForm from '../ClientForm/ClientForm';
import CarsForm from '../CarsForm/CarsForm';
import ReviewForm from '../ReviewForm/ReviewForm';


function Home() {
    return (
        <div className="d-flex">
            <div className="align-content-center">
                <Header></Header>
            </div>
        </div>
    )
}

export default Home;