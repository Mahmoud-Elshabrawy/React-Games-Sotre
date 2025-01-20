import React, { useState } from 'react';
import '../Components/Styles/Contact.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({setLogIn}) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const savedUsers = JSON.parse(localStorage.getItem('user')) || [];
        const userIsExists = savedUsers.some(user => user.name === name && user.password === password);

        if (userIsExists) {
            alert('Login Successful');
            setLogIn(true);
            navigate('/');
        } else {
            alert('Invalid username or password. Please try again.');
            setName('');
            setPassword('');
            setLogIn(false);
        }
    };

    return (
        <div className='row '>
            <div className="col-lg-6 container">
                <form onSubmit={handleSubmit} className='rounded-3 p-5 margin' style={{ backgroundColor: 'blueviolet' }}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">User Name</label>
                        <input
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="form-control"
                            id="exampleInputName"
                            aria-describedby="nameHelp"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-3">
                        <button type="submit" className="btn btn-light rounded-1">Login</button>
                    </div>
                    <div className='d-flex justify-content-center gap-2 '>
                        <p>New Here?</p>
                        <Link style={{ color: 'white' }} to={'/register'}>Create an Account</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
