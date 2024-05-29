

import React from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';

const CompanyInfo = () => {

    const storedUser = JSON.parse(localStorage.getItem('user'));

    
    const companyInfo = {
        name: 'Geeksynergy Technologies Pvt Ltd',
        address: 'Sanjayanagar, Bengaluru-56',
        phone: storedUser ? storedUser.phone : 'XXXXXXXXX09',
        email: storedUser ? storedUser.email : 'XXXXXX@gmail.co'
    };

    return (
        <>
        <Navbar/>
        <div className="container mt-5">
            <h1>Company Info</h1>
            <div>
                <strong>Company:</strong> {companyInfo.name}
            </div>
            <div>
                <strong>Address:</strong> {companyInfo.address}
            </div>
            <div>
                <strong>Phone:</strong> {companyInfo.phone}
            </div>
            <div>
                <strong>Email:</strong> {companyInfo.email}
            </div>
        </div>
        <br/>
       <Link to="/"> <button className='btn btn-danger' >Logout</button></Link>
        </>
    );
};

export default CompanyInfo;
