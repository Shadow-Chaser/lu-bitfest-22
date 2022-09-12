import ConsumerRequest from '../../pages/ConsumerRequest';
import Sidebar from '../Sidebar/Sidebar';
import Table from '../Table/Table';

const Dashboard = () => {
    return (
        <div className="row">
            <div className="col-md-2" >
                <Sidebar />
            </div>
            <div className="col-md-10" >
                <ConsumerRequest />
            </div>
        </div>
    );
};

export default Dashboard;