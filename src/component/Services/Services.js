import React from 'react';
import './Services.css';



const Services = () => {
    return (
        // Showing answers
            <div className='row row-cols-1 row-cols-md-3 g-4' >
            <div className='container my-5'>
            <div>
                <h1 className="text-primary">My Answers</h1>
            </div>
            <div className='text-center'>
            <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title text-danger">Q1.what is the difference between authentication and authorization? </h3>
                                <h5 class="card-text">
                                Authentication is the act of confirming a person's identity, at the same time as authentication is the process of confirming a user's get proper of access to to precise apps, files, and data. The scenario is similar to that of an airline figuring out which passengers can board.</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h2 class="card-title text-danger">Q2.Why are you using firebase?</h2>
                                <h5 class="card-text">
                                For energetic apps, Firebase manages a much less specialized and time-saving choice to developing full-fledged backend code. You'll be able too ought to apply this device in case you proposed to have and regulate your app withinside the cloud withinside the long run. Because Firebase is serverless, it expels the need to inconvenience roughly cloud server configuration points of interest. It moreover licenses you get confirmation to to distinctive Google things and capabilities, beside Google Drive and Sheets quickly.
                                   </h5>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col p-5">
                        <div class="card">
                            <div class="card-body">
                                <h2 class="card-title text-danger">Q3.What other services does firebase provide other than authentication?</h2>
                                <h5 class="card-text">
                                There are numerous administrations which Firebase gives, like Cloud Firestor,Cloud Functions,Hosting,Cloud Storage,Google Analytics,Predictions,Cloud Informing.
                                   </h5>
                            </div>
                            
                        </div>
                    </div>
                
            </div>
            
        </div>
        </div>
    );
};

export default Services;