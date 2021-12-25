import "./Home.css";
import React from 'react';
import section1Data,{section2aData, section2Data, section3Data, section4Data, section6Data} from './data';
import { Link } from "react-router-dom";
import SvgComponent from './SvgComponent.jsx';

const Section1=(props)=>{
    return(
        <>
            <div className="section-1">
                <div className='container'>
                    <div className='text-showcase'>
                        <h1>{props.title}</h1>
                        <Link className='contact-btn' type='button' to='/contact'>Contact Us</Link>
                    </div>
                    <div className='img-showcase'>
                        <img className='img' src={props.img} alt="hero-img"/>
                    </div>
                </div>
            </div>
        </>
    );
}


const Section2a=(props)=>{
    return( 
        <div className='section-2a'> 
            <div className='container'>

            <div className='text-box'>
                    <h1>{props.title1}</h1>
                    <p>{props.desc}</p>
                </div>
                <div className='svg-box'>
                    <SvgComponent />
                </div>

            </div>
        </div>
    );
}

const Section2=(props)=>{
    return( 
        <div className='section-2'> 
            <div className='container'>
                <div className='section-2-card-showcase'>
                    {props.cards.map((element, index)=>{
                        return (
                        <div className='section-2-card' index={index} >
                            <img className='icon' src={element.img} alt='img'/>
                            <h3>{element.title}</h3>
                            <p>{element.desc}</p>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

const Section3=(props)=>{
    return(
        <>
            <div className='section-3'>
                <div className='container'>
                    <div className='img-div'>
                        <img className='section-3-image' src={props.img} alt="feature Img"/>
                    </div>
                    <div className='text-div'>
                        <h2>{props.desc}</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

const Section4=(props)=>{
    return(
        <div className='section-4'>
            <div className='container'>
                    {props.cards.map((element, index)=>{
                        return (
                        <div className='section-4-card' index={index} >
                            <img className='section-4-img' src={element.img} alt='img'/>
                            <h2>{element.title}</h2>
                            <p>{element.desc}</p>
                        </div>
                        )
                    })}
            </div>
        </div>
    );
}


const Section5=(props)=>{
    return(
        <>
            <div className='section-5'>
                <div className='container'>
                    <h2>A technology-first approach to transform business solutions</h2>
                    <Link className='contact-btn' type='button' to='/contact'>Get in touch</Link>
                </div>
            </div>
        </>
    );
}


const Section6=(props)=>{
    return(
        <div className='section-6'>
            <div className='container'>
                <div className="box">
                    {props.cards.map((element, index)=>{
                        return (
                            <div className='section-6-card' index={index} >
                                <img className='section-6-img' src={element.img} alt='img'/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

const Home = () => {
    return(
        <>
            <Section1 {...section1Data} />
            <Section2 {...section2Data} />
            <Section2a {...section2aData} />
            <Section3 {...section3Data} />
            <Section4 {...section4Data} />
            <Section5 />
            <Section6 {...section6Data} />
        </>
    );
}

export default Home;