import { Link } from 'react-router-dom';
import { userInfo } from '../../utils/Auth';
import './Sidebar.css'


const Sidebar = () => {
  const info = userInfo()
  console.log(info.role)
  return (
    <>
      <div id="viewport">
        <div id="sidebar">
          <header>
            <Link to="/">My App</Link>
          </header>
          <ul className="nav">

            {
              info.role === 'admin' ? <div>
                <li>
                  <Link to="/add-bus">
                    Add Bus
                  </Link>
                </li>
                <li>
                  <Link to="/update-bus">
                    Update Bus
                  </Link>
                </li>
                <li>
                  <Link to="/add-route">
                    Add Route
                  </Link>
                </li>
                <li>
                  <Link to="/update-route">
                    Update Route
                  </Link>
                </li>
                <li>
                  <Link to="/transport-demand">
                    Transport Demand
                  </Link>
                </li>
              </div>
                :
                <div>
                  <li>
                    <Link to="/consumer-request">
                      Consumer's Request
                    </Link>
                  </li>
                </div>
            }
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;