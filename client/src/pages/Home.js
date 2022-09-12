
import AddBus from '../components/AddBus/AddBus';
import AddRoute from '../components/AddRoute/AddRoute';
import AdminView from '../components/AdminView/AdminView';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard/ProductCard';
import UpdateBus from '../components/UpdateBus/UpdateBus';
import UpdateRoute from '../components/UpdateRoute/UpdateRoute';
import ViewInfoTransport from '../components/ViewInfoTransport/ViewInfoTransport';
import { userInfo } from '../utils/Auth';


const Home = () => {

    const {role} = userInfo();

    return (
        <div >
            <Navbar />
           {
            role==='admin'?  <AdminView/> :   <ViewInfoTransport />
           }

          
          


            <Footer />
        </div>
    );
};

export default Home;