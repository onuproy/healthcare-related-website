import React from 'react';
import { Link } from 'react-router-dom';
import doctor from './../../banner-home.png';
import css from './Banner.css'

const Banner = () => {
    return (
        <div className="banner-area tutor-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="content-area">
                            <h2>Your Healthy Life is Our <br/> First Priority.</h2>
                            <p>As any doctor can tell you, the most crucial step toward healing is having the ridiagnosis. If the disease is precisely identified, a good resolution is far more likely.</p>
                            <div className="button-area">
                                <Link to="." className="btn btn-success" style={{margin:"0 10px 0 0"}}>Get a Doctor</Link>
                                <Link to="/contact" className="btn btn-outline-success">Contact Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="doctor-image">
                            <img src={doctor} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;