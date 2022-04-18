import React from 'react';
import './Checkout.css';

const Checkout = () => {
    return (
        <div>
            <div>
                <h1 className="text-center m-4">Checkout Page</h1>
            </div>
            <div className="checkout-section container">
                <div class="blog-card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbQamoT0YvjYfu8Jxd7Ui6pV9LHyAWcVJMQiPAU1bulminmx9VUUU_0ux3YRuKMTx_8CU&usqp=CAU" class="blog-image" alt="" />
                    <h1 className="blog-title">Avoid Hospital Waiting Lists - Book Me Now</h1>
                    <p class="blog-overview">Get Ultimate Services & Walk with freedom</p>
                </div>
                <div class="blog-card">
                    <img src="https://i2.wp.com/financebuddha.com/blog/wp-content/uploads/2018/07/20182624/Health-Insurance1.jpg" class="blog-image" alt="" />
                    <h1 className="blog-title">Health Insurance - One Less Thing to Worry About - Peoplecare
                        .</h1>
                    <p class="blog-overview">Find Out Why 96% of my Members Love Being Part Of my Family - Join today! The Other 4% Just Need a Hug.</p>
                </div>
                
            </div>
        </div>
    );
};

export default Checkout;