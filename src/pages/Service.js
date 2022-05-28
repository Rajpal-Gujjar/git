import React from 'react'
import './Service.css'
import teeth from './../../public/static/teeth.svg'
import lungs from './../../public/static/lungs.svg'
import brain from './../../public/static/brain.svg'
import report from './../../public/static/report.svg'
export default function Service() {
    return (
        <>
            <div className='servicehead'>
                <h2>Our Services</h2>
                <p>
                    We provide the most full medical services, so every person could heave the oppurtunity to receive
                    qualitative medical help.
                </p>
            </div>
            <div className='container'>
                <div className='servicebox1'>
                    <img src={teeth} alt='teeth' />
                    <h4>Dental Care</h4>
                </div>
                <div className='servicebox2'>
                    <img src={lungs} alt='teeth' />
                    <h4 style={{ color: 'white' }}>Pulmonary</h4>
                    <p style={{ color: 'white' }}>LEARN MORE</p>
                </div>
                <div className='servicebox1'>
                    <img src={brain} alt='teeth' />
                    <h4>Neurological</h4>
                </div>
                <div className='servicebox1'>
                    <img src={report} alt='teeth' />
                    <h4>Prediatrics</h4>
                </div>
            </div>            
        </>
    )
}
