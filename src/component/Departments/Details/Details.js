import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css';


const Details = () => {
    //using useEffect & State
    const { departmentId } = useParams();

    // const [departmentDetails, setDepartmentDetails] = useState([]);
    const [singleDepartment, setSingleDepartment] = useState({});

    useEffect(() => {
        fetch('/info.json')
            .then(res => res.json())
            .then(data => {
                const foundDepartment = data.find(department => department._id == departmentId)
                setSingleDepartment(foundDepartment);
                console.log(foundDepartment);
            })
    }, [departmentId]);


    return (
        // Details Section
        <div>
            <div>
                <div class="card mx-auto mb-5 mt-5">
                    <img src={singleDepartment.img} class="details-image" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title text-info">{singleDepartment.name}</h5>
                        <p class="card-text">{singleDepartment.description}</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Details;