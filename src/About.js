import React from 'react';
import picture from './image/nomi.jpg'

const About = () => {
    return (
        <div className="checkout-section container">
                <div class="blog-card">
                    <img src="https://images.pexels.com/photos/1535907/pexels-photo-1535907.jpeg?cs=srgb&dl=pexels-karyme-fran%C3%A7a-1535907.jpg&fm=jpg" class="blog-image" alt="" />
                    <h1 className="blog-title">What Else?</h1>
                    <p class="blog-overview">Without Being A Web Developer And Sleep In Canada</p>
                </div>
                <div class="blog-card">
                    <img src={picture} class="blog-image" alt="" />
                    <h3 className="blog-title"> Shahnewaj Nomi 
                    <br />
                    Study: B.sc In CSE
                    <br />
                    Daffofil International University 
                        .</h3>
                    <p class="blog-overview">Find Out Why 96% of my Members Love Being Part Of my Family - Join today! The Other 4% Just Need a Hug.</p>
                </div>
                
            </div>
    );
};

export default About;