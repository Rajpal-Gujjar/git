import React from 'react'
import './News.css'
import News2 from './News2'
import patient1 from './../../public/static/patient1.png'
import patient2 from './../../public/static/patient2.png'
export default function News() {
    return (
        <>
            <div>
                <div className='servicehead'>
                    <h2>
                        What Our Customers Say
                    </h2>
                </div>
                <div className='newsmain'>
                    <div className='newsdiv'>
                        <p>
                            I wanted to thanks everyone at this facility for the quality of care and compassion they showed
                            during my stay.
                        </p>
                        <div className='newsp'>
                            <img src={patient1} alt='patient1' />
                            <div>
                                <h4>Jacqueline Asong</h4>
                                <p>Patient</p>
                            </div>
                        </div>
                    </div>
                    <div className='newsdiv'>
                        <p>
                            I wanted to thanks everyone at this facility for the quality of care and compassion they
                            showed during my stay.
                        </p>
                        <div className='newsp'>
                            <img src={patient2} alt='patient2' />
                            <div>
                                <h4>Patrícia Ribeiro</h4>
                                <p>Patient</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <News2 />
        </>
    )
}
