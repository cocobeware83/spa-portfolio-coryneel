import React, {useState} from 'react';
import {validateEmail} from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''});
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Please enter a valid email address.');
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
            }
        };

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    };

    return (
        
        <section>
          <h2>Feel Free To Contact me</h2>
          <span><h4><a href = "mailto:corycneel@gmail.com" target="_blank" rel="noopener noreferrer" className="unlink">Via Email </a>or phone: 512.497.2802</h4></span>
          <span><h4>Or send me a message using the form below:</h4></span>
          <form id="contact-form" className='' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor="name">Name:</label>
                <div className='d-flex justify-content-center'>
                    <input type="text" className='form-control col-md-5' defaultValue={name} onBlur={handleChange} name="name" />
                </div>
            </div>
            <div className='form-group'>
                <label htmlFor="email">Email address:</label>
                <div className='d-flex justify-content-center'>
                    <input type="email" className='form-control col-md-5' defaultValue={email} onBlur={handleChange} name="email" />
                </div>
                
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <div className='form-group'>
                <label htmlFor="message">Message:</label>
                <div className='d-flex justify-content-center'>
                    <textarea name="message" className='form-control col-md-5' defaultValue={message} onBlur={handleChange} rows="5" />
                </div>
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
          </form>
        </section>
    )
}

export default Contact;