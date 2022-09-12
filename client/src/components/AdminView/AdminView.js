import React, { useEffect, useState } from 'react';
import { getTransportDemands } from '../../api/consumerRequestAPI';
import './AdminView.css'

const AdminView = () => {
    const [demand, setDemand] = useState([])

    useEffect(() => {
        getTransportDemands()
            .then(res => {
                console.log(res.data);
                const arr = Object.entries(res.data);

                setDemand(arr);
            })
            .catch(err => console.error(err));
    }, [])
    console.log(demand);


    return (
        <div>
            <h4 className="text-center fw-bold my-3">Demand from student's end:</h4>
            <div className="mb-5">
                <p className="container fw-bolder fs-5">At 8am total requests from students route wise:</p>
                <div className="container d-flex flex-wrap align-items-center justify-content-around">
                    <div className="routeContainer">
                        <p className="text-center pt-3 fs-4">From route 1: 5 student</p>
                    </div>

                    <div className="routeContainer">
                        <p className="text-center pt-3 fs-4">From route 2: 4 students</p>
                    </div>

                    <div className="routeContainer">
                        <p className="text-center pt-3 fs-4">From route 3: 2 students</p>
                    </div>

                    <div className="routeContainer">
                        <p className="text-center pt-3 fs-4">From route 4: 3 students</p>
                    </div>
                </div>
            </div>

            <div className="mb-5">
                <p className="container fw-bolder fs-5">At 9am total requests from students route wise:</p>
                <div className="container d-flex flex-wrap align-items-center justify-content-around">
                    <div className="routeContainer">
                        <p className="text-center pt-3 fs-4">From route 1: 1 student</p>
                    </div>

                    <div className="routeContainer">
                        <p className="text-center pt-3 fs-4">From route 2: 4 students</p>
                    </div>

                    <div className="routeContainer">
                        <p className="text-center pt-3 fs-4">From route 3: 2 students</p>
                    </div>

                    <div className="routeContainer">
                        <p className="text-center pt-3 fs-4">From route 4: 3 students</p>
                    </div>
                </div>
            </div>

            <div className="mb-5">
                <p className="container fw-bolder fs-5">At 10am total requests from students route wise:</p>
                <div className="container d-flex flex-wrap align-items-center justify-content-around">
                    <div className="routeContainer">
                        <p className="text-center pt-3 fs-4">From route 1: 1 student</p>
                    </div>

                    <div className="routeContainer">
                        <p className="text-center pt-3 fs-4">From route 2: 4 students</p>
                    </div>

                    <div className="routeContainer">
                        <p className="text-center pt-3 fs-4">From route 3: 2 students</p>
                    </div>

                    <div className="routeContainer">
                        <p className="text-center pt-3 fs-4">From route 4: 3 students</p>
                    </div>
                </div>
            </div>

            <div className="mb-5">
                <p className="container fw-bolder fs-5">At 11am total requests from students route wise:</p>
                <div className="container d-flex flex-wrap align-items-center justify-content-around">
                    <div className="routeContainer">
                        <p className="text-center pt-3 fs-4">From route 1: 1 student</p>
                    </div>

                    <div className="routeContainer">
                        <p className="text-center pt-3 fs-4">From route 2: 4 students</p>
                    </div>

                    <div className="routeContainer">
                        <p className="text-center pt-3 fs-4">From route 3: 2 students</p>
                    </div>

                    <div className="routeContainer">
                        <p className="text-center pt-3 fs-4">From route 4: 3 students</p>
                    </div>
                </div>
            </div>

            <div className="mb-5">
                <p className="container fw-bolder fs-5">At 1pm total requests from students route wise:</p>
                <div className="container d-flex flex-wrap align-items-center justify-content-around">
                    <div className="routeContainer">
                        <p className="text-center pt-3 fs-4">From route 1: 1 student</p>
                    </div>

                    <div className="routeContainer">
                        <p className="text-center pt-3 fs-4">From route 2: 4 students</p>
                    </div>

                    <div className="routeContainer">
                        <p className="text-center pt-3 fs-4">From route 3: 2 students</p>
                    </div>

                    <div className="routeContainer">
                        <p className="text-center pt-3 fs-4">From route 4: 3 students</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminView;