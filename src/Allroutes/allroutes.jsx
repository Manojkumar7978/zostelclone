import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home';
import Destination from '../pages/destination';
import Destinationdetails from '../pages/destinationdetails';
import Hotelrooms from '../pages/hotelrooms';
import Checkout from '../pages/checkout';

const Allroutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/destination' element={<Destination />} />
                <Route path='/destination/:id' element={<Destinationdetails />} />
                <Route path='/zostelhomes/:id' element={<Hotelrooms />} />
                <Route path='/zostelbooking' element={<Checkout />} />
            </Routes>

        </div>
    );
}

export default Allroutes;
