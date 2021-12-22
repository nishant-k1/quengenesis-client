import './Footer.css';
import React from 'react';
import { Link } from "react-router-dom";
import ReactGA from 'react-ga';

var date=new Date();
var year=date.getFullYear();

const FooterSecondary = () => {
    return(
        <footer className="footer-secondary">
            <div className='container'>
                <div className='logo-box'> 
                    <Link to='/'><img className='logo' src="logoWhite.svg" alt='logo'/></Link>
                </div>
                <div className='social-box'>
                    <h2>Social Links</h2>
                    <ul>
                        <li><a href='https://www.linkedin.com/company/quengenesis'>-LinkedIn</a></li>
                        <li><a href='https://www.facebook.com/quengenesis'>-Facebook</a></li>
                        <li><a href='https://www.instagram.com/quengenesis.io/'>-Instagram</a></li>
                    </ul>
                </div>
                <div className='text-box-1'>
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to='/'>-Home</Link></li>
                        <li><Link to='/about'>-About</Link></li>
                        <li><Link to='/sales-and-marketing-consulting'>-Consulting</Link></li>
                        <li><Link to='/technology-and-it-services'>-Web & Software Services</Link></li>
                        <li><Link to='/contact'>-Contact</Link></li>
                    </ul>
                </div>

                <div className='text-box-2'>
                    <h2>Contact Us</h2>
                    <address>
                        8 The Green STE R<br/>
                        Dover, DE 19901<br/>
                        USA<br/><br/>
                    </address>
                    <div className="phone-box">
                    USA <a 
                    onClick={
                        () => {
                            ReactGA.event({
                                category: 'Call',
                                action: 'US Phone Call',
                                label: 'UPC'
                            })
                        }
                    } 
                    href='tel: +1855-780-3061'
                    >
                    +1 (855)-780-3061</a>

                    India <a 
                    onClick={
                        () => {
                            ReactGA.event({
                                category: 'Call',
                                action: 'India Phone Call',
                                label: 'IPC'
                            })
                        }
                    } 
                    href='tel: 870-951-6148'>+91 8709516148</a>
                </div>
                </div>
                
            </div>
        </footer>
    );
}

const FooterPrimary = () => {
    return(    
        <footer className="footer-primary">
            <div className="container">
                <p>Copyright © {year} Quengenesis, LLC. All rights reserved.</p>
            </div>
        </footer>
    );
}

const Footer=()=>{
    return(
        <>
            <FooterSecondary />
            <FooterPrimary />
        </>
    );
}
export default Footer;