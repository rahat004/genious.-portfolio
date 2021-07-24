import React from 'react';
import './Contact.css';
import { useState } from 'react';

const Contact = () => {
    const [massage, setmassage] = useState(false)

    const handleSubmit= (e)=>{
        e.preventDefault()
        setmassage(true)
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Massage"></textarea>
                    <button type="submit">Send</button>
                    {massage && <span>Thanks, I'll reply ASAP:)</span> }
                </form>
            </div>
        </div>
    );
};

export default Contact;