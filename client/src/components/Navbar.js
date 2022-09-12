import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, singOut } from '../utils/Auth';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" href="#">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/consumerRequest" className="nav-link" href="#">Dashboard</Link>
              </li>
              {
                isAuthenticated() ?
                <li className="nav-link" style={{cursor: 'pointer'}} onClick={() => singOut(() => {
                  navigate('/login');
                })} >
                  Logout
                </li>:
                <li className="nav-item">
                <Link to="/login" className="nav-link" href="#">Login</Link>
              </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;