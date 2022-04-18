import React from 'react';
import { Link } from 'react-router-dom';
import './Information.css';

const Information = ({ department }) => {
    // Department Section
    const { name, description, img, id } = department;
    return (
        <div>
            <div class="col mb-5">
                <div class="card">
                    <img src={img} class="card-image" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <p class="card-text">{description}</p>
                        <Link to={`/checkout/${id}`}>
                        <button type="button" class="btn btn-outline-danger m-2">Get It Now
                                </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;