import React from 'react';
import './Services.css';
import surgery from '../../image/services/room.jfif';
import diabetics from '../../image/services/nurse.jpg';
import nephrology from '../../image/services/chk.jpg';
import pharmacy from '../../image/services/download.jfif';



const Services = () => {
    return (
        // Showing Doctors
        <div>
            <div>
                <h1 className="text-center text-primary my-3">My Services</h1>
            </div>
            <div className="container my-5 ">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card">
                            <img src={surgery} class="doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Room Facilities</h5>
                                <p class="card-text">Get your best environment to recover</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={diabetics} class="doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Nurse Facility</h5>
                                <p class="card-text">24/7 Nursing Facility Is one of my major service
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={nephrology} class="doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Checking Your Body</h5>
                                <p class="card-text">Testing Your Body's Apart could be an option</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={pharmacy} class="doctor-image" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Litsen To You</h5>
                                <p class="card-text">
                                    Treat You As My Friend</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;