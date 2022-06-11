import React from 'react'
import './body.css'
import '../Body/Bodysection/bodysection.css'


const Body = ({ sendOpen }) => {

    return (
        <div className='project'>
            <h1>About this project</h1>
            <section>
                <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                    to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
                    your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>

                <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                    to allow notepads, pens, and USB sticks to be stored under the stand.</p>
            </section>

            <div className='project-section'>
                <div className='section-head'>
                    <h3>Bamboo Stand</h3>
                    <h4>Pledge $25 or more</h4>
                </div>
                <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                    you’ll be added to a special Backer member list.</p>
                <div className='patreon-left'>
                    <div>
                        <span>101</span><span>left</span>
                    </div>
                    <button className='section-btn' onClick={sendOpen}>Select Reward</button>
                </div>
            </div>
            <div className='project-section'>
                <div className='section-head'>
                    <h3>Black Edition Stand</h3>
                    <h4>Pledge $75 or more</h4>
                </div>
                <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                    member list. Shipping is included.</p>
                <div className='patreon-left'>
                    <div>
                        <span>64</span><span>left</span>
                    </div>
                    <button className='section-btn' onClick={sendOpen}>Select Reward</button>
                </div></div>
            <div className='project-section'>
                <div className='section-head last-section'>
                    <h3>Mahogany Special Edition</h3>
                    <h4>Pledge $200 or more</h4>
                </div>
                <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                    to our Backer member list. Shipping is included.</p>
                <div className='patreon-left'>
                    <div>
                        <span>0</span><span>left</span>
                    </div>
                    <button className='section-btn' disabled>Select Reward</button>
                </div>
            </div>
        </div>

    )
}

export default Body