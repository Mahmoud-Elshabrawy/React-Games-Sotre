import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../Components/Styles/Contact.css';

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
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 mt-5">
            <div className="card p-4 rounded-4 shadow-lg" style={{ width: '100%', maxWidth: '400px', backgroundColor: 'white' }}>
                <h3 className="text-center mb-4 text-primary">Contact Us</h3>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label fw-bold">Full Name</label>
                        <input
                            type="text"
                            name='name'
                            className="form-control rounded-3"
                            id="exampleInputName"
                            placeholder="Enter Your Name"
                            aria-describedby="NameHelp"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail" className="form-label fw-bold">Email Address</label>
                        <input
                            type="email"
                            name='email'
                            className="form-control rounded-3"
                            id="exampleInputEmail"
                            placeholder="Enter Your Email"
                            aria-describedby="emailHelp"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputMessage" className="form-label fw-bold">Your Message</label>
                        <textarea
                            name='message'
                            className="form-control rounded-3"
                            placeholder="Write Your Message"
                            id="exampleInputMessage"
                            rows="5"
                            required
                        />
                    </div>
                    <div className="d-grid mb-3">
                        <button type="submit" className="btn btn-primary rounded-3">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;