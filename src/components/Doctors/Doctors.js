import React from 'react';
import team1 from './../../team1.png';
import team2 from './../../team2.png';
import team3 from './../../team3.png';
import team4 from './../../team4.png';
import css from './Doctors.css'

const Doctors = () => {
    return (
        <div className="doctors-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="doctors-single-item">
                            <img src={team1} alt="" />
                            <h2>Dr. Brain Adam</h2>
                            <p>Restorative Dentist</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="doctors-single-item">
                            <img src={team2} alt="" />
                            <h2>Dr. jessica brown</h2>
                            <p>Restorative Dentist</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="doctors-single-item">
                            <img src={team3} alt="" />
                            <h2>Dr. labrien brown</h2>
                            <p>Restorative Dentist</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="doctors-single-item">
                            <img src={team4} alt="" />
                            <h2>Dr. Noreain waltar</h2>
                            <p>Restorative Dentist</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="doctors-single-item">
                            <img src={team1} alt="" />
                            <h2>Dr. Brain Adam</h2>
                            <p>Restorative Dentist</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="doctors-single-item">
                            <img src={team2} alt="" />
                            <h2>Dr. jessica brown</h2>
                            <p>Restorative Dentist</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="doctors-single-item">
                            <img src={team3} alt="" />
                            <h2>Dr. labrien brown</h2>
                            <p>Restorative Dentist</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="doctors-single-item">
                            <img src={team4} alt="" />
                            <h2>Dr. Noreain waltar</h2>
                            <p>Restorative Dentist</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;