import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../api/authAPI';
import registerImg from '../assets/img.svg';
import { emailRegex, passRegex, nameRegex, contactNumberRegex } from '../utils/RegExp'

const Register = () => {
  const [inputError, setInputError] = useState({});
  const [regInfo, setRegInfo] = useState({"role": "admin"});

  const navigate = useNavigate();

  const handleChange = (e) => {

    const inputName = e.target.name;
    const inputValue = e.target.value;

    if (inputName === "email") {
      if (!emailRegex.test(inputValue)) {
        setInputError({
          name: inputName,
          errorMessage: "Please enter a Valid e-mail !",
        });
      } else {
        regInfo[inputName] = inputValue;
        setInputError(null);
      }
    }

    if (inputName === "fullName") {
      if (!nameRegex.test(inputValue)) {
        setInputError({
          name: inputName,
          errorMessage: "Please enter your valid full name !",
        });
      } else {
        regInfo[inputName] = inputValue;
        setInputError(null);
      }
    }

    if (inputName === "username") {
      if (!nameRegex.test(inputValue)) {
        setInputError({
          name: inputName,
          errorMessage: "Please enter your valid user name !",
        });
      } else {
        regInfo[inputName] = inputValue;
        setInputError(null);
      }
    }

    if (inputName === "phone") {
      if (!contactNumberRegex.test(inputValue)) {
        setInputError({
          name: inputName,
          errorMessage: "Please enter your valid contact number !",
        });
      } else {
        regInfo[inputName] = inputValue;
        setInputError(null);
      }
    }

    if (inputName === "password") {
      if (!passRegex.test(inputValue)) {
        setInputError({
          name: inputName,
          errorMessage: "Please enter a Valid password with min 8 characters having at least a symbol, upper and lower case letter and a number !",
        });
      } else {
        regInfo[inputName] = inputValue;
        setInputError(null);
      }
    }

    if (inputName === "name") {
      regInfo[inputName] = inputValue;
      setInputError(null);

    }

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('🔥 file: Register.js -> line #46 -> regInfo', typeof regInfo);
    signUp(regInfo)
      .then(res => {
        
          console.log(res.data)
          alert("User registered successfully!");
          navigate('/login')
        
      })
      .catch(err => { console.log(err.response); });

  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        className="container py-5 d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="row">
          <div className="col-md-7 shadow-sm rounded-3 border p-2 d-flex flex-column justify-center align-items-center">
            <h3 className='text-brand pt-4' style={{ color: "#8B2363" }}>Create Your Account</h3>
            <div className="p-2 w-75">
              <label htmlFor="fullName">Full Name</label>
              <input
                name='fullName'
                type="text"
                className="custom-input d-block w-100 px-3 py-2 rounded"
                id="fullName"
                placeholder="John Doe"
                style={{ border: "2px solid #8B2363" }}
                onChange={handleChange} required
              />
              {inputError?.name === "fullName" && (
                <p className="text-danger text-center mb-0 mt-3 fs-5">
                  {inputError?.errorMessage}
                </p>
              )}
            </div>

            <div className="p-2 w-75">
              <label htmlFor="username">User Name</label>
              <input
                name='username'
                type="text"
                className="custom-input d-block w-100 px-3 py-2 rounded"
                id="username"
                placeholder="John Don"
                style={{ border: "2px solid #8B2363" }}
                onChange={handleChange} required
              />
              {inputError?.name === "username" && (
                <p className="text-danger text-center mb-0 mt-3 fs-5">
                  {inputError?.errorMessage}
                </p>
              )}
            </div>

            <div className="p-2 w-75">
              <label htmlFor="phone">Contact</label>
              <input
                name='phone'
                type="text"
                className="custom-input d-block w-100 px-3 py-2 rounded"
                id="phone"
                placeholder="01886754307"
                style={{ border: "2px solid #8B2363" }}
                onChange={handleChange} required
              />
              {inputError?.name === "phone" && (
                <p className="text-danger text-center mb-0 mt-3 fs-5">
                  {inputError?.errorMessage}
                </p>
              )}
            </div>

            <div className="p-2 w-75">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="custom-input d-block w-100 px-3 py-2 rounded"
                id="email"
                placeholder="Name@example.com"
                style={{ border: "2px solid #8B2363" }}
                name="email"
                onChange={handleChange} required
              />
              {inputError?.name === "email" && (
                <p className="text-danger text-center mb-0 mt-3 fs-5">
                  {inputError?.errorMessage}
                </p>
              )}
            </div>

            <div className="p-2 w-75">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="custom-input d-block w-100 px-3 py-2 rounded"
                id="password"
                placeholder="Enter Your Secret Code"
                style={{ border: "2px solid #8B2363" }}
                name="password"
                onChange={handleChange} required
              />
              {inputError?.name === "password" && (
                <p className="text-danger text-center fs-5 mb-0 mt-3">
                  {inputError?.errorMessage}
                </p>
              )}
            </div>
            
            <p className="p-2">
              By registering, you agree to our{" "}
              <span>
                <Link to="/" className='text-decoration-none'>Terms & Conditions.</Link>
              </span>
            </p>
            <button
              // onClick={handleSubmit}
              className="btn-brand-outline w-50 py-3"
              style={{ border: "2px solid #8B2363" }}
            >
              Register Now
            </button>
            <div className="w-75 text-center py-3">
              <p>
                Have an Account ? Please{" "}
                <Link to="/login">
                  <button className="btn border p-2">Login</button>
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-5 d-flex justify-content-center align-items-center py-5">
            <img className="img-fluid" src={registerImg} alt="" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;