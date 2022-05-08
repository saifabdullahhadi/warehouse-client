import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Department from '../Information/Information';
import './Informations.css';

const Informations = () => {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        fetch('departments.json')
            .then(res => res.json())
            .then(data => setDepartments(data))
    }, [])
    return (
        // Service Section
        <div>
            
            <div>
                <h1 className="text-center  m-5">Laptop <span className='text-danger'>Collections</span></h1>
            </div>
            <div id="departments" className="container departments-container mt-5 mb-5">
                {
                    departments.map(department => <Department
                        key={department.id}
                        department={department}
                    ></Department>)
                        
                }
            </div>
            <div className="container my-5 ">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card">
                            <img src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FtaW5nJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Gaming Laptops</h5>
                                <p class="card-text">For Gaming Freake</p>
                            </div>
                            <Link to={`/checkout/`}>
                        <button type="button" class="btn btn-outline-dark m-5">Go To Collection Page
                                </button>
                        </Link>
                        </div>
                    </div>
                    
                    <div class="col">
                        <div class="card">
                            <img src="https://images.unsplash.com/photo-1627560270549-5c77fcde0ed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z2FtaW5nJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Coder Base</h5>
                                <p class="card-text">
                                    make you Jhankar Bhai</p>
                            </div>
                            <Link to={`/checkout/`}>
                        <button type="button" class="btn btn-outline-dark m-5">Go To Collection Page
                                </button>
                        </Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://images.unsplash.com/photo-1609240873846-54f18451f365?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2FtaW5nJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Office Work </h5>
                                <p class="card-text">
                                   Concern Your Portability With Power</p>
                            </div>
                            <Link to={`/checkout/`}>
                        <button type="button" class="btn btn-outline-dark  m-5">Go To Collection Page
                                </button>
                        </Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://images.unsplash.com/photo-1599634815922-783837212337?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWluZyUyMGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" class="doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">order what you want </h5>
                                <p class="card-text">
                                   Any parts Related Laptop</p>
                            </div>
                            <Link to={`/checkout/`}>
                        <button type="button" class="btn btn-outline-dark m-5">Go To Collection Page
                                </button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default Informations;