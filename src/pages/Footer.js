import React from 'react'
import fb from './../../public/static/fb.png'
import google from './../../public/static/google.png'
import twiter from './../../public/static/twiter.png'
import './Footer.css'
import FootNav from './FootNav'
export default function Footer() {
    return (
        <>
        <FootNav />
            <div className='container1'>
                <div className='footimg'>
                    <img src={fb} alt='fb' />
                    <img src={google} alt='google' />
                    <img src={twiter} alt='twiter' />
                </div>
                <p>
                    ©2020 PodPayment - 2020
                </p>
            </div>
        </>
    )
}
