    import React, { useState, useEffect } from 'react';
    import '../Components/Styles/Contact.css'; // Adjust your CSS file for new styles
    import { Link, useNavigate } from 'react-router-dom';
    import Aos from 'aos';
    import 'aos/dist/aos.css';
    const Login = ({ setLogIn }) => {
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
    useEffect(() => {
            Aos.init({duration: 1500})
        })

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100" style={{  }}>
        <div className="card p-4 rounded-4 shadow-lg" style={{ width: '100%', maxWidth: '400px', backgroundColor: 'white' }}>
            <h3 className="text-center mb-4 text-primary">Welcome Back!</h3>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label fw-bold">User Name</label>
                <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control rounded-3"
                id="exampleInputName"
                placeholder="Enter your username"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control rounded-3"
                id="exampleInputPassword1"
                placeholder="Enter your password"
                />
            </div>
            <div className="d-grid mb-3">
                <button type="submit" className="btn btn-primary rounded-3">Login</button>
            </div>
            <div className="text-center">
                <p className="mb-0">New Here? <Link to="/register" className="text-primary fw-bold">Create an Account</Link></p>
            </div>
            </form>
        </div>
        </div>
    );
    };

    export default Login;
