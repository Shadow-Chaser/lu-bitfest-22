import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Sidebar from '../components/Sidebar/Sidebar';

const TransportDemand = () => {
    const [transportDemand, setTransportDemand] = useState({})

    const handleChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        if (inputName === 'routeOneForS') {
            transportDemand[inputName] = inputValue
        }

        if (inputName === 'routeTwoForS') {
            transportDemand[inputName] = inputValue
        }

        if (inputName === 'routeThreeForS') {
            transportDemand[inputName] = inputValue
        }

        if (inputName === 'routeFourForS') {
            transportDemand[inputName] = inputValue
        }

        if (inputName === 'routeOneForT') {
            transportDemand[inputName] = inputValue
        }

        if (inputName === 'routeTwoForT') {
            transportDemand[inputName] = inputValue
        }

        if (inputName === 'routeThreeForT') {
            transportDemand[inputName] = inputValue
        }

        if (inputName === 'routeFourForT') {
            transportDemand[inputName] = inputValue
        }

        if (inputName === 'routeOneForSF') {
            transportDemand[inputName] = inputValue
        }

        if (inputName === 'routeTwoForSF') {
            transportDemand[inputName] = inputValue
        }

        if (inputName === 'routeThreeForSF') {
            transportDemand[inputName] = inputValue
        }

        if (inputName === 'routeFourForSF') {
            transportDemand[inputName] = inputValue
        }
    }

    const handleDropDown = ( value) => {
        transportDemand["timeslot"] = value;
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <div className="container mt-5">
                    <div className="mb-5 mt-2">
                        <h4 className="text-center text-dark fw-bold mb-3 ">Demanded transports for students:</h4>
                        <form>
                            <div className="d-flex align-items-center justify-content-center">
                                <div class="form-group w-25 mx-2">
                                    <label>Route 1</label>
                                    <input type="text" name="routeOneForS" onChange={handleChange} class="form-control" />
                                </div>
                                <div class="form-group w-25 mx-2">
                                    <label>Route 2</label>
                                    <input type="text" name="routeTwoForS" onChange={handleChange} class="form-control" />
                                </div>
                                <div class="form-group w-25 mx-2">
                                    <label>Route 3</label>
                                    <input type="text" name="routeThreeForS" onChange={handleChange} class="form-control" />
                                </div>
                                <div class="form-group w-25 mx-2">
                                    <label>Route 4</label>
                                    <input type="text" name="routeFourForS" onChange={handleChange} class="form-control" />
                                </div>
                                <Dropdown className="mx-2 mt-4">
                                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                                        Timeslot
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleDropDown("8am")}>8am</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleDropDown("9am")}>9am</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleDropDown("10am")}>10am</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <br />
                            <h4 className="text-center text-dark fw-bold mb-3 mt-4">Demanded transports for teachers:</h4>
                            <div className="d-flex align-items-center justify-content-center">
                                <div class="form-group w-25 mx-2">
                                    <label>Route 1</label>
                                    <input type="text" name="routeOneForT" onChange={handleChange} class="form-control" />
                                </div>
                                <div class="form-group w-25 mx-2">
                                    <label>Route 2</label>
                                    <input type="text" name="routeTwoForT" onChange={handleChange} class="form-control" />
                                </div>
                                <div class="form-group w-25 mx-2">
                                    <label>Route 3</label>
                                    <input type="text" name="routeThreeForT" onChange={handleChange} class="form-control" />
                                </div>
                                <div class="form-group w-25 mx-2">
                                    <label>Route 4</label>
                                    <input type="text" name="routeFourForT" onChange={handleChange} class="form-control" />
                                </div>
                                <Dropdown className="mx-2 mt-4">
                                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                                        Timeslot
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleDropDown("8am")}>8am</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleDropDown("9am")}>9am</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleDropDown("10am")}>10am</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <br />
                            <h4 className="text-center text-dark fw-bold mb-3 mt-4">Demanded transports for stuffs:</h4>
                            <div className="d-flex align-items-center justify-content-center">
                                <div class="form-group w-25 mx-2">
                                    <label>Route 1</label>
                                    <input type="text" name="routeOneForSF" onChange={handleChange} class="form-control" />
                                </div>
                                <div class="form-group w-25 mx-2">
                                    <label>Route 2</label>
                                    <input type="text" name="routeTwoForSF" onChange={handleChange} class="form-control" />
                                </div>
                                <div class="form-group w-25 mx-2">
                                    <label>Route 3</label>
                                    <input type="text" name="routeThreeForSF" onChange={handleChange} class="form-control" />
                                </div>
                                <div class="form-group w-25 mx-2">
                                    <label>Route 4</label>
                                    <input type="text" name="routeFourForSF" onChange={handleChange} class="form-control" />
                                </div>
                                <Dropdown className="mx-2 mt-4">
                                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                                        Timeslot
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleDropDown("8am")}>8am</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleDropDown("9am")}>9am</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handleDropDown("10am")}>10am</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <br />
                            <div className="text-center">
                                <button type="submit" class="btn btn-success w-25">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransportDemand;