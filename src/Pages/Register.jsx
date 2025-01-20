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
     <div className='row '>
            <div className="col-lg-6 container">
                <form className='rounded-3 p-5 margin' style={{backgroundColor: 'blueviolet'}} onSubmit={handleSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputName" class="form-label" >User Name</label>
                        <input onChange={(e) =>setName(e.target.value)} type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp"/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input onChange={(e) =>setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mb-3">
                        <button type="submit" class="btn btn-light rounded-1">Sign Up</button>
                    </div>
                    <div className='d-flex justify-content-center gap-2 '>
                        <p>Already have an Account?</p>
                        <Link style={{color: 'white',}} to={'/login'}>login</Link>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Register