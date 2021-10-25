import React from 'react';
import Banner from '../Banner/Banner';
import HomeService from '../Services/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeService></HomeService>
        </div>
    );
};

export default Home;