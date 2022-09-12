import { useRef } from 'react';
import './UpdateBus.css';
import Sidebar from '../Sidebar/Sidebar'
const UpdateBus = () => {

    const licenseRef = useRef();
    const codenameRef = useRef();
    const capacityRef = useRef();
    const driverNameRef = useRef();
    const driverContactRef = useRef();
    const isActiveRef = useRef();

    const handleUpdateBus = () => {
        const license = licenseRef.current.value;
        const codename = codenameRef.current.value;
        const capacity = capacityRef.current.value;
        const driverName = driverNameRef.current.value;
        const driverContact = driverContactRef.current.value;
        const isActive = isActiveRef.current.value;

        const busInfo = { license, codename, capacity, driverName, driverContact, isActive };
        console.log(busInfo);

    }
    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar/>
            </div>
            <div className="col-md-10">
            <div className=' d-flex justify-content-center align-items-center'>
            <div className='form-design shadow-sm p-3 mb-5 bg-body rounded p-5 my-4'>
                <h2 className='text-center text-info my-2'>Update Bus Inventory Info</h2>
                <div className="">
                    <div className="row mb-3">

                        <div className="col-sm-12 my-2">
                            <label className="form-label fs-6 text-form">License Number</label>
                            <input type="number" className="form-control p-3" ref={licenseRef} placeholder='Type a license number' id="inputEmail3" />
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
                            <input type="text" className="form-control p-3" ref={capacityRef} placeholder='Type a number' id="inputEmail3" />
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
                            <input type="text" className="form-control p-3" ref={driverContactRef} placeholder='Contact Number' id="" />
                        </div>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label fs-6 text-form " ref={isActiveRef} for="defaultCheck1">
                            Is Active
                        </label>
                    </div>



                    <button onClick={handleUpdateBus} type="submit" className="btn btn-primary px-5 py-2">Submit</button>
                </div>
            </div>

        </div>
            </div>
        </div>
    )
};
export default UpdateBus;