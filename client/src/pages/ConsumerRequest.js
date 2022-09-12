import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addConsumerRequest } from '../api/consumerRequestAPI';
import { userInfo } from '../utils/Auth';
import Sidebar from '../components/Sidebar/Sidebar'

const ConsumerRequest = () => {
    const [consumerRequest, setConsumerRequest] = useState({ user: userInfo()._id })

    const handleChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        if (inputName === 'incomingRoute') {
            consumerRequest[inputName] = inputValue
        }

        if (inputName === 'incomingSchedule') {
            consumerRequest[inputName] = inputValue
        }

        if (inputName === 'stoppage') {
            consumerRequest[inputName] = inputValue
        }

        if (inputName === 'outgoingRoute') {
            consumerRequest[inputName] = inputValue
        }

        if (inputName === 'outgoingSchedule') {
            consumerRequest[inputName] = inputValue
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        addConsumerRequest(consumerRequest)
            .then(res => {
                console.log(res.data);
                alert('Consumer request sent successfully')
            })
            .catch(err => {
                console.log(err.response);
            })
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <div className="d-flex align-items-center" style={{ height: '100vh' }}>
                    <Form className="w-75 mx-auto" >
                        <h2 className="text-center text-primary fw-bold mb-5">Consumer's request</h2>
                        <div>
                            <h3>Incoming:</h3>
                            <div className="d-flex justify-content-center align-items-center">
                                <input
                                    name='incomingRoute'
                                    type="text"
                                    className="mb-3 me-3 w-100 p-4"
                                    style={{ height: '5vh' }}
                                    id="incomingRoute"
                                    placeholder="Route - 1"
                                    onChange={handleChange} required
                                />

                                <input
                                    name='incomingSchedule'
                                    type="text"
                                    className="mb-3 ms-3 w-100 p-4"
                                    style={{ height: '5vh' }}
                                    id="incomingSchedule"
                                    placeholder="10AM"
                                    onChange={handleChange} required
                                />
                            </div>
                            <br />
                            <input
                                name='stoppage'
                                type="text"
                                className="mb-3 w-100 p-4"
                                style={{ height: '5vh' }}
                                id="stoppage"
                                placeholder="Modina market"
                                onChange={handleChange} required
                            />
                        </div>

                        <br />

                        <div>
                            <h3>Outgoing:</h3>
                            <div className="d-flex">
                                <input
                                    name='outgoingRoute'
                                    type="text"
                                    className="mb-3 me-3 w-100 p-4"
                                    style={{ height: '5vh' }}
                                    id="outgoingRoute"
                                    placeholder="Route - 2"
                                    onChange={handleChange} required
                                />
                                <input
                                    name='outgoingSchedule'
                                    type="text"
                                    className="mb-3 ms-3 w-100 p-4"
                                    style={{ height: '5vh' }}
                                    id="outgoingSchedule"
                                    placeholder="10AM"
                                    onChange={handleChange} required
                                />
                            </div>
                        </div>
                        <br />
                        <Button onClick={handleSubmit} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ConsumerRequest;