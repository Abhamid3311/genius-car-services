import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';


const Service = (props) => {
    const { name, price, description, img, id } = props.service;
    const navigate = useNavigate();
    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)}>Book now: {name}</button>
        </div>
    );
};

export default Service;