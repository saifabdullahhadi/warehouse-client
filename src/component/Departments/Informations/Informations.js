import React, { useEffect, useState } from 'react';
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
        // Departments Section
        <div>
            
            <div>
                <h1 className="text-center  m-4">My Information</h1>
            </div>
            <div id="departments" className="container departments-container mt-5 mb-5">
                {
                    departments.map(department => <Department
                        key={department.id}
                        department={department}
                    ></Department>)

                }
            </div>
        </div>
    );
};

export default Informations;