import { useState } from 'react'
import React from 'react'
import './main.css'
import MasterLogo from '../images/logo-mastercraft.svg'
import BookMark from '../images/icon-bookmark.svg'

function Main({ modalToggle }) {
    let [set, setState] = useState('BookMark')
    const setBook = () => {
        set == 'BookMark' ? setState('BookMarked') : setState('BookMark');
    }

    return (
        <div className="main-section">
            <div className="hero-intro">
                <img className="master-logo" src={MasterLogo} alt="master-craft icon" />
                <h1>Mastercraft Bamboo Monitor Riser</h1>
                <h2>  A beautiful and handcrafted monitor stand to reduce neck and eye strain.</h2>
                <div className='purchase-btn'>
                    <button onClick={modalToggle}>Back this project</button>
                    <span onClick={setBook}>
                        <img id='book-mark' src={BookMark} alt="Bookmark icon" />
                        <h4>{set}</h4>
                    </span>
                </div>
            </div>
            <div className="crwod-fund">
                <div className="funding">
                    <div> <strong>$89,914</strong> <small> of $100,000 backed</small></div>
                    <div> <strong>5,007</strong> <small> total backers</small></div>
                    <div> <strong>56</strong> <small> days left</small></div>
                </div>
                <div className="progress-bar"></div>
            </div>
        </div>
    )
}

export default Main;