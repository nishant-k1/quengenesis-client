import "./contact.css";
import React, {useState} from 'react';
import ReactPixel from 'react-facebook-pixel';
import ReactGA from 'react-ga';

const Contact = () => {
    const [formState, setFormState]=useState(
        {
            fName:"", 
            lName:"", 
            email:"", 
            phone:"", 
            message:""
        }
    );
    const handleChange=(e)=>{
        setFormState({ ...formState, [e.target.name]:e.target.value });
    }

const [contactStatus, setContactStatus] = useState("")

    const handleSubmit= async (e)=>{
        e.preventDefault();
        setFormState({fName:"", lName:"", email:"", phone:"", message:""});

        const url = 'https://quengenesis.herokuapp.com/contactEmails'
        const options = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(formState),
        }


        try{
            const res = await fetch(url, options)
            if(res.status === 200 ) {
                setContactStatus("Your message has been sent successfully.")
            } else setContactStatus("There was an error, please contact us via phone.")
        }
        catch(err){
            console.log(err)
        }

        ReactPixel.trackSingleCustom('1399959230371123'); // For tracking custom events.
        ReactGA.event({
            category: 'Contact',
            action: 'Contact Form Submitted',
            label: 'CFS'
        })
    }


    return(
        <>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className='contact-container'>
                    <div className='left-section'>
                        <div className="title">
                            <h1>Write Us</h1>
                        </div>
                        <div className="row">
                            <div className="contact-sub-row">
                                <label className='contact-label'>First Name</label>
                                <input className="contact-input" type="text" name="fName" onChange={handleChange} value={formState.fName} required/>
                            </div>

                            <div className="contact-sub-row">
                                <label className='contact-label'>Last Name</label>
                                <input className="contact-input" type="text" name="lName" onChange={handleChange} value={formState.lName} required/>
                            </div>
                        </div>

                        <div className="contact-sub-row">
                            <label className='contact-label'>Email</label>
                            <input className="contact-input is-success" type="email" name="email" onChange={handleChange} value={formState.email} required/>
                        </div>
                    
                        <div className="contact-sub-row">
                            <label className='contact-label'>Phone</label>
                            <input className="contact-input" type="tel" placeholder='1-123-456-7890' maxlength='20' name="phone" onChange={handleChange} value={formState.phone} required/>
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="your-message">
                            <label className='contact-label'>Message</label>
                            <textarea className="contact-textarea" name="message" placeholder='Write text here...' onChange={handleChange} value={formState.message} required></textarea>
                        </div>
                        <div className="contact-btns">
                            <button className="submit-btn">SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
                <div className='contact-container'>
                    <h1 style={{color:'white'}}>{contactStatus}</h1>
                </div>
            </form>
        </>
    );
}

export default Contact;