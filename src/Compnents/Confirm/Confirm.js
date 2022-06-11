import React from 'react'
import './confirm.css'
import Tick from '../images/icon-check.svg'
// import Button from '../Buttons/Button'

function Confirm({sendOpen}) {
    return (
        <div className='confirm-box'>
            <div className='appreciation-modal'>
                <img src={Tick} alt='check icon' />
                <h1>Thanks for your support!</h1>
                <section>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                    an email once our campaign is completed.</section>

                <button onClick={sendOpen}>Got It!</button>
            </div>
        </div>
    )
}

export default Confirm