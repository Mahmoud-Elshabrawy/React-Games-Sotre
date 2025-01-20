import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {

const [name, setName] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()
const handleSubmit = (e) => {
    e.preventDefault()
    const savedUsers = JSON.parse(localStorage.getItem('user')) || []
    const userIsExists = savedUsers.some(user => user.name === name && user.password === password)
    if(userIsExists) {
        alert('User already exists with this name and password!');
    }
    else {
        const newUser = {name, password}
        savedUsers.push(newUser)
        localStorage.setItem('user',JSON.stringify(savedUsers))
        alert('Registration successful!');
        navigate('/login');
    }
}
return (
    <div className="d-flex justify-content-center align-items-center min-vh-100" style={{  }}>
        <div className="card p-4 rounded-4 shadow-lg" style={{ width: '100%', maxWidth: '400px', backgroundColor: 'white' }}>
            <h3 className="text-center mb-4 text-primary">Welcome</h3>
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
                <button type="submit" className="btn btn-primary rounded-3">Sign Up</button>
            </div>
            <div className="text-center">
                <p className="mb-0">Already have One? <Link to="/login" className="text-primary fw-bold">Login</Link></p>
            </div>
            </form>
        </div>
        </div>
)
}

export default Register