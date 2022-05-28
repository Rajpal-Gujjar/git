import React from 'react'
import './News2.css'

export default function News2() {
    return (
        <div className='subscribe servicehead'>
            <h2 style={{ color: 'white' }}>Subscribe to Newsletter</h2>
            <p style={{ color: 'white' }}>
                We have a wide experience in experience design and strategy,
            </p>
            <div className='subsinput'>
                <input type='text' placeholder='Enter your email address' />
                <button className="send-button">Send Now</button>
            </div>
        </div>
    )
}
