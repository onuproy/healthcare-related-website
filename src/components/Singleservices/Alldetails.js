import React from 'react';
import { Link } from 'react-router-dom';

const Alldetails = (props) => {
    const {id,serviceName} = props.singledetails;
    return (
        <div>
            <Link to={`/details/${id}`}><i class="fas fa-angle-right"></i> {serviceName}</Link>
        </div>
    );
};

export default Alldetails;