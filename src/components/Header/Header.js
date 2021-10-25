import logo from './../../logo.png';
import React from 'react';
import css from './Header.css'
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {user,logout} = useAuth();
    return (
        <header className="header-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="logo-area">
                            <Link to="/home">Healthcare</Link>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="menubar-area">
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/service">Services</Link></li>
                                <li><Link to="/doctors">Doctors</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="login-area">
                            {
                            user.email ?
                            <div className="user-information">
                                <h3>{user.displayName}</h3>
                                <button className="btn btn-outline-light" style={{margin: "0 10px 0 0"}} onClick={logout}>logout</button></div>
                            :
                            <div className="login-button">
                                <Link to="/login" className="btn btn-outline-light" style={{margin: "0 10px 0 0"}}>Login</Link>
                                <Link to="/register" className="btn btn-outline-light">Register</Link></div>}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;