import React from 'react'
import './About.css'
import Service3 from './Service3'
import servpic1 from './../../public/static/servpic1.png'
import servpic2 from './../../public/static/servpic2.png'
import servpic3 from './../../public/static/servpic3.png'

export default function About1() {
    return (
        <>
            <div className='container'>
                <div className='divide top'>
                    <h2>
                        Clinic With Innovative
                    </h2>
                    <p>
                        We provide the most full medical services, so every person could heave the oppurtunity to receive
                        qualitative medical help.
                    </p>
                    <button className="click-button">Learn More</button>
                </div>
                <div className='divide'>
                    <img className='img1' src={servpic1} alt="1" />
                    <img className='img2' src={servpic2} alt="2" />
                    <img className='img3' src={servpic3} alt="3" />
                </div>
            </div>
            <Service3 />
        </>
    )
}
