import Login from './pages/Login';
import Register from './pages/Register';
import { Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './pages/Home';
import PrivateRoute from './utils/PrivateRoute';
import Table from './components/Table/Table';
import RegisterAsConsumer from './pages/RegisterAsConsumer';
import ConsumerRequest from './pages/ConsumerRequest';
import AddBus from './components/AddBus/AddBus';
import UpdateBus from './components/UpdateBus/UpdateBus';
import AddRoute from './components/AddRoute/AddRoute';
import UpdateRoute from './components/UpdateRoute/UpdateRoute';
import TransportDemand from './pages/TransportDemand';

function App() {
  return (
    <>
      <Routes>

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/consumer-request" element={<ConsumerRequest />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/add-bus" element={<AddBus />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/add-route" element={<AddRoute />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/update-route" element={<UpdateRoute />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/update-bus" element={<UpdateBus />} />
        </Route>

        <Route element={<PrivateRoute />}>
        <Route path="/transport-demand" element={<TransportDemand />} />
        </Route>

        <Route path="/table" element={<Table />} />

        <Route path="/login" element={<Login />} />

        <Route path="/registerAsDept" element={<Register />} />

        <Route path="/registerAsConsumer" element={<RegisterAsConsumer />} />

        <Route path="/consumerRequest" element={<ConsumerRequest />} />

        <Route path="/side" element={<Sidebar />} />

        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </>
  );
}

export default App;