
import { useRef } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddRoute.css'
const AddRoute = () => {

    const routeNumberRef = useRef();
    const locationNameRef = useRef();
    const latitudeRef = useRef();
    const longitudeRef = useRef();
    const startTimeRef = useRef();

    const handleAddRoute = () => {
        const routeNumber = routeNumberRef.current.value;
        const locationName = locationNameRef.current.value;
        const latitude = latitudeRef.current.value;
        const longitude = longitudeRef.current.value;
        const startTime = startTimeRef.current.value;
        const routeInfo = { routeNumber, locationName, latitude, longitude, startTime };
        console.log(routeInfo);
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar/>
            </div>
            <div className="col-md-10">
            <div className=' d-flex justify-content-center align-items-center'>
            <div className='form-design shadow-sm p-3 mb-5 bg-body rounded p-5 my-4'>
                <h2 className='text-center text-info my-2'>Add Route</h2>
                <div className="">
                    <div className="row mb-3">

                        <div className="col-sm-12 my-2">
                            <label className="form-label fs-6 text-form">Route Number</label>
                            <input type="number" className="form-control p-3" ref={routeNumberRef} placeholder='Type a route number' id="inputEmail3" />
                        </div>
                    </div>
                    <div className="row">

                        <label className="form-label fs-6 text-form">Start Location</label>
                    </div>
                    <div className="row mb-3">

                        <div className="col-sm-12 ">
                            <input type="text" className="form-control p-3" ref={locationNameRef} placeholder='Location Name' id="" />
                        </div>
                    </div>

                    <div className="row mb-3">

                        <div className="col-sm-6 my-2">
                            <input type="text" className="form-control p-3" ref={latitudeRef} placeholder='Latitude' id="" />
                        </div>
                        <div className="col-sm-6 my-2">
                            <input type="text" className="form-control p-3" ref={longitudeRef} placeholder='Longitude' id="" />
                        </div>
                    </div>
                    <div className="row mb-3">

                        <div className="col-sm-12 my-2">
                            <label className="form-label fs-6 text-form">Start Time</label>
                            <input type="time" className="form-control p-3" ref={startTimeRef} placeholder='Start Time' id="" />
                        </div>
                    </div>

                    <button onClick={handleAddRoute} type="submit" className="btn btn-primary px-5 py-2">Submit</button>
                </div>
            </div>

        </div>
            </div>
        </div>

        // </div>
    )
};
export default AddRoute;