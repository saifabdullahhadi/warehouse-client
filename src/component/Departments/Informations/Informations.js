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
                <h1 className="text-center  m-4">My Services</h1>
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
                            <img src="https://media-cdn.tripadvisor.com/media/photo-s/12/4e/56/57/standard-hotel-room-layout.jpg" class="doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Room Facilities</h5>
                                <p class="card-text">Get your best environment to recover</p>
                            </div>
                            <Link to={`/checkout/`}>
                        <button type="button" class="btn btn-outline-danger m-2">Get It Now
                                </button>
                        </Link>
                        </div>
                    </div>
                    
                    <div class="col">
                        <div class="card">
                            <img src="https://thumbs.dreamstime.com/z/male-medicine-doctor-hold-pad-give-arm-to-shake-office-closeup-friend-welcome-introduction-thanks-gesture-work-examine-156321185.jpg" class="doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Litsen To You</h5>
                                <p class="card-text">
                                    Treat You As My Friend</p>
                            </div>
                            <Link to={`/checkout/`}>
                        <button type="button" class="btn btn-outline-danger m-2">Get It Now
                                </button>
                        </Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://www.mukathospital.com/wp-content/uploads/2021/04/cardiology.jpg" class="doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Priority</h5>
                                <p class="card-text">
                                   Your Healthy Life Is My Main Peiority</p>
                            </div>
                            <Link to={`/checkout/`}>
                        <button type="button" class="btn btn-outline-danger m-2">Get It Now
                                </button>
                        </Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://media.istockphoto.com/photos/portrait-of-multicultural-medical-team-standing-in-hospital-corridor-picture-id1204177269?k=20&m=1204177269&s=612x612&w=0&h=gBL8z_6qD6MuEeVZjgrkXUMepp8zwpIEj21LqSbnpZ8=" class="doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">24/7 Nursing Facility </h5>
                                <p class="card-text">
                                   No Comporomise With Nurses</p>
                            </div>
                            <Link to={`/checkout/`}>
                        <button type="button" class="btn btn-outline-danger m-2">Get It Now
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