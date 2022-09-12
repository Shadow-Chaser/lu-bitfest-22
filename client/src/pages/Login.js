import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signIn } from '../api/authAPI';
import loginImg from '../assets/img.svg';
import { authenticate } from '../utils/Auth';
import { passRegex, nameRegex } from '../utils/RegExp'

const Login = () => {
    const [inputError, setInputError] = useState({});
    const [loginInfo, setLoginInfo] = useState({});

    const navigate = useNavigate();

    const handleChange = (e) => {

        const inputName = e.target.name;
        const inputValue = e.target.value;

        if (inputName === "username") {
            if (!nameRegex.test(inputValue)) {
                setInputError({
                    name: inputName,
                    errorMessage: "Please enter your Valid user-name !",
                });
            } else {
                loginInfo[inputName] = inputValue;
                setInputError(null);
            }
        }

        if (inputName === "password") {
            if (!passRegex.test(inputValue)) {
                setInputError({
                    name: inputName,
                    errorMessage: "Please enter your Valid password !",
                });
            } else {
                loginInfo[inputName] = inputValue;
                setInputError(null);
            }
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        // console.log('🔥 file: Login.js -> line #43 -> loginInfo', loginInfo);
        signIn(loginInfo)
            .then(res => {
                if (res.data.access_token) {
                    authenticate(res.data.access_token);
                    alert('Login Successful!')
                    navigate('/')
                }

            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <form>
            <div
                className="container d-flex justify-content-center align-items-center"
                style={{ minHeight: "100vh" }}
            >
                <div className="row">
                    <div className="col-md-7 shadow-sm rounded-3 border p-5 d-flex flex-column justify-center align-items-center">
                        <h3 className='text-brand' style={{ color: "#8B2363" }}>Enter Your Credential</h3>
                        <div className="w-75 py-2">
                            <label htmlFor="username" className="px-1">
                                Username
                            </label>
                            <input
                                name="username"
                                type="text"
                                className="custom-input d-block w-100 px-3 py-3 rounded"
                                placeholder="John Doe"
                                style={{ border: "2px solid #8B2363" }}
                                onChange={handleChange}
                            />
                            {inputError?.name === "username" && (
                                <p className="text-danger text-center fs-5 mb-0 mt-3">
                                    {inputError?.errorMessage}
                                </p>
                            )}
                        </div>
                        <div className="w-75 py-2">
                            <label htmlFor="email" className="px-1">
                                Password
                            </label>
                            <input
                                name="password"
                                type="password"
                                className="custom-input d-block w-100 px-3 py-3 rounded"
                                placeholder="Must be at-least 6 Characters"
                                style={{ border: "2px solid #8B2363" }}
                                onChange={handleChange}
                            />
                            {inputError?.name === "password" && (
                                <p className="text-danger text-center fs-5 mb-0 mt-3">
                                    {inputError?.errorMessage}
                                </p>
                            )}
                        </div>
                        <button onClick={handleSubmit} className="btn-brand-outline w-50 mt-2 py-3" style={{ border: "2px solid #8B2363" }}>Login</button>
                        <div className="w-100 text-center py-3">
                            <p>New to the app ?</p>
                            <Link to="/registerAsDept">
                                <button className="btn-brand-outline rounded-pill px-5 py-3 me-2" style={{ border: "2px solid #8B2363" }}>
                                    Register as Transport Dept.
                                </button>
                            </Link>

                            <Link to="/registerAsConsumer">
                                <button className="btn-brand-outline rounded-pill px-5 py-3 ms-2" style={{ border: "2px solid #8B2363" }}>
                                    Register as Consumer
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-5 d-flex justify-content-center align-items-center py-5">
                        <img className="img-fluid" src={loginImg} alt="" />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;