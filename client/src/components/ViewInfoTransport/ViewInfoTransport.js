import { useEffect, useState } from "react";
import { getAllBus } from "../../api/busAPI";
import ViewAllTransportInfo from "../ViewAllTransportInfo/ViewAllTransportInfo";


const ViewInfoTransport = () => {

    const [busData, setBusData] = useState([]);

    const routeInfo = [
        {
            "routeNumber": 1,
            "locationName": 'Airport',
            "latitude": 'N',
            "longitude": 'E',
            "startTime": '8am'
        },
        {
            routeNumber: 2,
            locationName: 'Airport',
            latitude: 'N',
            longitude: 'E',
            startTime: '8am'
        },
        {
            routeNumber: 2,
            locationName: 'Airport',
            latitude: 'N',
            longitude: 'E',
            startTime: '8am'
        },
        {
            routeNumber: 3,
            locationName: 'Airport',
            latitude: 'N',
            longitude: 'E',
            startTime: '8am'
        },
        {
            routeNumber: 4,
            locationName: 'Airport',
            latitude: 'N',
            longitude: 'E',
            startTime: '8am'
        },
        {
            routeNumber: 4,
            locationName: 'Airport',
            latitude: 'N',
            longitude: 'E',
            startTime: '8am'
        },
        {
            routeNumber: 4,
            locationName: 'Airport',
            latitude: 'N',
            longitude: 'E',
            startTime: '9am'
        },
        {
            routeNumber: 4,
            locationName: 'Airport',
            latitude: 'N',
            longitude: 'E',
            startTime: '9am'
        }
    ]

    let r81 = 0, r82 = 0, r83 = 0, r84 = 0, r91 = 0, r92 = 0, r93 = 0, r94 = 0;
    let r101 = 0, r102 = 0, r103 = 0, r104 = 0, r111 = 0, r112 = 0, r113 = 0, r114 = 0, r11 = 0, r12 = 0, r13 = 0, r14 = 0;

    for (let i = 0; i < routeInfo.length; i++) {
        const route = routeInfo[i];
        if (route.startTime === '8am') {
            if (route.routeNumber === 1) {
                r81++;
            } else if (route.routeNumber === 2) {
                r82++;
            }
            else if (route.routeNumber === 3) {
                r83++;
            }
            else if (route.routeNumber === 4) {
                r84++;
            }
        }
        else if (route.startTime === '9am') {
            if (route.routeNumber === 1) {
                r91++;
            } else if (route.routeNumber === 2) {
                r92++;
            }
            else if (route.routeNumber === 3) {
                r93++;
            }
            else if (route.routeNumber === 4) {
                r94++;
            }

        }
        else if (route.startTime === '10am') {
            if (route.routeNumber === 1) {
                r101++;
            } else if (route.routeNumber === 2) {
                r102++;
            }
            else if (route.routeNumber === 3) {
                r103++;
            }
            else if (route.routeNumber === 4) {
                r104++;
            }

        }
        else if (route.startTime === '11am') {
            if (route.routeNumber === 1) {
                r111++;
            } else if (route.routeNumber === 2) {
                r112++;
            }
            else if (route.routeNumber === 3) {
                r113++;
            }
            else if (route.routeNumber === 4) {
                r114++;
            }

        }
        else if (route.startTime === '1pm') {
            if (route.routeNumber === 1) {
                r11++;
            } else if (route.routeNumber === 2) {
                r12++;
            }
            else if (route.routeNumber === 3) {
                r13++;
            }
            else if (route.routeNumber === 4) {
                r14++;
            }

        }
    }

    const total8 = (r81 + r82 + r83 + r84);

    useEffect(() => {

        getAllBus()
            .then(res => {
                setBusData(res.data)
            })
            .catch(err => console.log(err.response))
    }, [])

    console.log(busData);

    return (
        <div className="p-3">
            <h3 className="text-center text-info my-3">Route Bus Shift 8am </h3>
            <div class="container px-4">
                <div class="row gx-5 mb-2">
                    <div class="col">
                        <div class="p-3 border bg-light fs-6 text-form">Route one have total bus : {r81}</div>
                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light fs-6 text-form">Route two have total bus : {r82}</div>
                    </div>
                </div>
            </div>
            <div class="container px-4">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3 border bg-light fs-6 text-form">Route three have total bus : {r83}</div>
                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light fs-6 text-form">Route four have total bus : {r84}</div>
                    </div>
                </div>
            </div>

            <h3 className="text-center text-info my-4">Route Bus Shift 9am </h3>
            <div class="container px-4">
                <div class="row gx-5 mb-2">
                    <div class="col">
                        <div class="p-3 border bg-light fs-6 text-form">Route one have total bus : {r91}</div>
                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light fs-6 text-form">Route two have total bus : {r92}</div>
                    </div>
                </div>
            </div>
            <div class="container px-4">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3 border bg-light fs-6 text-form">Route three have total bus : {r93}</div>
                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light fs-6 text-form">Route four have total bus : {r94}</div>
                    </div>
                </div>
            </div>

            <h3 className="text-center text-info my-4">Route Bus Shift 10am </h3>
            <div class="container px-4">
                <div class="row gx-5 mb-2">
                    <div class="col">
                        <div class="p-3 border bg-light fs-6 text-form">Route one have total bus : {r101}</div>
                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light fs-6 text-form">Route two have total bus : {r102}</div>
                    </div>
                </div>
            </div>
            <div class="container px-4">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3 border bg-light fs-6 text-form">Route three have total bus : {r103}</div>
                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light fs-6 text-form">Route four have total bus : {r104}</div>
                    </div>
                </div>
            </div>

            <h3 className="text-center text-info my-4">Route Bus Shift 11am </h3>
            <div class="container px-4">
                <div class="row gx-5 mb-2">
                    <div class="col">
                        <div class="p-3 border bg-light fs-6 text-form">Route one have total bus : {r111}</div>
                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light fs-6 text-form">Route two have total bus : {r112}</div>
                    </div>
                </div>
            </div>
            <div class="container px-4">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3 border bg-light fs-6 text-form">Route three have total bus : {r113}</div>
                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light fs-6 text-form">Route four have total bus : {r114}</div>
                    </div>
                </div>
            </div>

            <h3 className="text-center text-info my-4">Route Bus Shift 1pm </h3>
            <div class="container px-4">
                <div class="row gx-5 mb-2">
                    <div class="col">
                        <div class="p-3 border bg-light fs-6 text-form">Route one have total bus : {r11}</div>
                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light fs-6 text-form">Route two have total bus : {r12}</div>
                    </div>
                </div>
            </div>
            <div class="container px-4">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3 border bg-light fs-6 text-form">Route three have total bus : {r13}</div>
                    </div>
                    <div class="col">
                        <div class="p-3 border bg-light fs-6 text-form">Route four have total bus : {r14}</div>
                    </div>
                </div>
            </div>


            <h2 className="text-center my-4">Total Free buses list :</h2>
            {
                busData.map(item => <ViewAllTransportInfo key={item._id} item={item} />)
            }
        </div >


    )
};
export default ViewInfoTransport;