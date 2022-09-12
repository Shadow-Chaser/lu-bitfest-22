import { useRef, useState } from 'react';
import './AddBus.css';
import { addBus } from '../../api/busAPI'
import { userInfo } from '../../utils/Auth';
import Sidebar from '../Sidebar/Sidebar';

const AddBus = () => {

    // const [busInfo, setBusInfo] = useState({});

    const licenseRef = useRef();
    const codenameRef = useRef();
    const capacityRef = useRef();
    const driverNameRef = useRef();
    const driverPhoneRef = useRef();
    const isActiveRef = useRef();

    // console.log("bus Info")

    const handleAddBus = (e) => {
        const license = licenseRef.current.value;
        const codename = codenameRef.current.value;
        const capacity = capacityRef.current.value;
        const driverName = driverNameRef.current.value;
        const driverPhone = driverPhoneRef.current.value;
        const isActive = isActiveRef.current.value;

        const bus = { license, codename, capacity, driverName, driverPhone, isActive };
        // setBusInfo(bus);

        console.log("token", "Bearer " + userInfo().token);


        console.log(bus);
        e.preventDefault();
        addBus(bus)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err.response);
            })

    }

    const handleSubmit = (e) => {

    }



    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>

            <div className="col-md-10">
                <div className=' d-flex justify-content-center' style={{minWidth: '80vw'}}>
                    <div className='form-design p-5'>
                        <h2 className='text-center text-info my-2'>Bus Inventory</h2>
                        <div>
                            <div className="row mb-3">

                                <div className="col-sm-12 my-2">
                                    <label className="form-label fs-6 text-form">License </label>
                                    <input type="text" className="form-control p-3" ref={licenseRef} placeholder='Type a license number' id="inputEmail3" />
                                </div>
                            </div>
                            <div className="row mb-3">

                                <div className="col-sm-12 my-2">
                                    <label className="form-label fs-6 text-form">Code Name</label>
                                    <input type="text" className="form-control p-3" ref={codenameRef} placeholder='Code ..' id="inputEmail3" />
                                </div>
                            </div>
                            <div className="row mb-3">

                                <div className="col-sm-12 my-2">
                                    <label className="form-label fs-6 text-form">Capacity</label>
                                    <input type="number" className="form-control p-3" ref={capacityRef} placeholder='Type a number' id="inputEmail3" />
                                </div>
                            </div>
                            <div className="row">

                                <label className="form-label fs-6 text-form">Driver Info</label>
                            </div>

                            <div className="row mb-3">

                                <div className="col-sm-6 my-2">
                                    <input type="text" className="form-control p-3" ref={driverNameRef} placeholder='Full Name' id="" />
                                </div>
                                <div className="col-sm-6 my-2">
                                    <input type="text" className="form-control p-3" ref={driverPhoneRef} placeholder='Contact Number' id="" />
                                </div>
                            </div>
                            <div className="row mb-3 my-2">
                                {/* <input className="form-check-input" ref={isActiveRef} type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label fs-6 text-form " for="defaultCheck1">
                            Is Active
                        </label> */}
                                <div className="col-sm-12 my-2">
                                    <label className=" mb-2 fs-6 text-form " >Is Active</label>
                                    <select className="form-control " ref={isActiveRef} id="">

                                        <option value={true}>Yes</option>
                                        <option value={false}>No</option>

                                    </select>
                                </div>
                            </div>

                            <button onClick={handleAddBus} type="submit" className="btn btn-primary px-5 py-2">Submit</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};
export default AddBus;