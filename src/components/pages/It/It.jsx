import React from 'react';
import './It.css';
import section1, {section2} from './data';

const Section1=(props)=>{
    return (
        <div className="it-section-1">
            <div className="container">
                <div className="section-1-text-showcase">
                    <h1>{props.h1}</h1>
                    <p>{props.p1}</p>
                </div>
                <div className="section-1-img-showcase">
                    <img style={{maxHeight:'250px', maxWidth:'250px'}} src={props.img1} alt="img"/>
                </div>
            </div>
        </div>
    );
}

const Section2=(props)=>{
    return (
        <div className="it-section-2">
            <div className="container">
                <div className="section-2-img-showcase">
                    <img style={{maxHeight:'250px', maxWidth:'250px'}} src={props.img1} alt="img"/>
                </div>
                <div className="section-2-text-showcase">
                    <h1>{props.h1}</h1>
                    <p>{props.p1}</p>
                </div>
            </div>
        </div>
    );
}

const It=()=>{
    return(
        <>
            <Section1 {...section1}/>
            <Section2 {...section2}/>
        </>
    );
}

export default It;