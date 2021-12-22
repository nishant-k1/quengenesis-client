import React from 'react';
import section1Data, {section2Data, section3Data} from './data';
import './About.css';

const Section1=(props)=>{
    return(
        <div className='section1'>
            <div className="container">
                <h1>About Us</h1>
            </div>
        </div>
    );
}

const Section2=(props)=>{
    return(
        <div className="section2" >
            <div className="container" >
                    <div className="text-box">
                        <h1>{props.h1}</h1>
                        <p>{props.p1}</p>
                    </div>
                <div className="img-box" >
                    <img className='sec-2-img' src={props.img1} alt="img" />
                </div>
            </div>
        </div>
    )
}

const Section3=(props)=>{
    return(
        <div className="section3" >
            <div className="container" >
            <div className="img-box" >
                    <img className='sec-3-img' src={props.img1} alt="img" />
                </div>
                <div className="text-box">
                    <h1>{props.h1}</h1>
                    <p>{props.p1}</p>
                </div>

            </div>
        </div>
    )
}

const About = () => {

    return(
        <>
            <Section1 {...section1Data} />
            <Section2 {...section2Data} />
            <Section3 {...section3Data} />
        </>
    );
}

export default About;