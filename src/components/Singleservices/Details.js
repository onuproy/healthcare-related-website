import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import image from './../../service-wrap.png';
import Alldetails from './Alldetails';
import css from './Singleservice.css'

const Details = () => {
    const {id} = useParams();
    const [details, setDetails] = useState([]);
    const [singledetails,setSingleDetails] = useState({});
    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    },[])
    useEffect(()=>{
        const detailsid = details.find(details => details.id === id)
        setSingleDetails(detailsid)
    },[details])
    return (
        <div className="container" style={{padding:"60px 0"}}>
            <div className="row">
                <div className="offset-lg-2 col-lg-8">
                    <div className="single-service-area">
                        <img src={image} alt="" style={{width:"100%"}} />
                        <h2>{singledetails?.serviceName}</h2>
                        <p>{singledetails?.fulldescriptions}</p>
                    </div>
                </div>
                {/* <div className="col-lg-4">
                    <div className="other-service">
                        {
                            details.map(singledetails => <Alldetails key={singledetails.id}singledetails={singledetails}></Alldetails>)
                        }
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Details;