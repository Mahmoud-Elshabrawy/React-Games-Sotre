import React, { useEffect } from 'react'
import Swal from 'sweetalert2';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../Components/Styles/Contact.css'

const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "025ab163-1e57-4a0a-9930-9e103361dec7");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
    };
    
    useEffect(() => {
        Aos.init({duration: 1500})
    })
  return (
    <div className='mt-5 '> 
    <div className="container mt-5 ">
        <form className=' rounded-3 p-5 margin' data-aos = 'zoom-in'  style={{backgroundColor: 'blueviolet'}}
            onSubmit={onSubmit}
        >
            <h2 className='d-flex justify-content-center'>Contact Us</h2>
            <div className="mb-3">
                <label for="exampleInputName" className="form-label">Full Name</label>
                <input type="text" name='name' className="form-control" id="exampleInputName" placeholder='Enter Your Name' aria-describedby="NameHelp" required/>
            </div>
            <div className="mb-3">
                <label for="exampleInputEmail" className="form-label">Email Address</label>
                <input type="Email" name='email' className="form-control" id="exampleInputEmail1" placeholder='Enter Your Email' aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Your Message</label>
                <textarea type="text" name='message' className="form-control" placeholder='Write Your Message' id="exampleInputPassword1" required/>
            </div>
            <div className="mb-3 d-flex justify-content-center align-items-center">
                <button className='btn btn-light'  type="submit" >Submit</button>
            </div>
            
        </form>
    </div>
    </div>
  )
}

export default Contact