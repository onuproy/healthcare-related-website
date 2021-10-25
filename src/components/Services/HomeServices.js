import React, { useEffect, useState } from 'react';
import Singleservice from '../Singleservices/Singleservice';
import css from './Services.css'

const HomeService = () => {
    const [services, setService] = useState([]);
    const singleServices = services.slice(0,6)
    useEffect(() => {
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div class="Service-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title">
                            <p>Our Services</p>
                            <h1>What We’re offering</h1>
                        </div>
                    </div>
                    {
                        singleServices.map(service => <Singleservice key={service.id} service={service}></Singleservice>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeService;