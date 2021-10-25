import React from 'react';
import { Link } from 'react-router-dom';
import css from './Singleservice.css'

const Singleservice = (props) => {
    const {id,serviceName,shortdescription,icon} = props.service;
    return (
        <div className="col-lg-4">
            <div className="single-service-area">
                <div className="icon-area">
                    <i className={icon}></i>
                </div>
                <h2>{serviceName}</h2>
                <p>{shortdescription}</p>
            <Link to={`/details/${id}`}><button><i class="fas fa-angle-right"></i> View Details</button></Link>
            </div>
        </div>
    );
};

export default Singleservice;