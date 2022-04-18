import React from 'react';
import img from '../../image/404.jpg';

const Notfound = () => {
    return (
        // Error page
        <div>
            <img className="img-fluid" src={img} alt="" />
        </div>
    );
};

export default Notfound;