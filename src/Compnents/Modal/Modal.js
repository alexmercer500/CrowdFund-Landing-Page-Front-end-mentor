
import './modal.css'
import Button from '../Buttons/Button'

function Modal({modalToggle, sendOpen}) {


    return (
        <div className='modal-container'>
            <div className='modal-box'>
                <div className='modal-head'><h1>Back this project</h1><span onClick={modalToggle}>X</span></div>
                <section>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</section>
                <div className='modal-section'>
                    <div className='section-content'>
                        <input className='radio-box' type='radio' id='pledge-btn' name='pledge'/>
                            <label htmlFor='pledge-btn'></label>
                        <div className='section-heading'>

                            <h1>Pledge with no reward</h1>
                        </div>
                        <section>Choose to support us without a reward if you simply believe in our project. As a backer,
                            you will be signed up to receive product updates via email.
                        </section>

                        <div className='section-bottom' >
                            <h4>Enter your Pledge</h4>
                            <span>
                                <input type='number' placeholder='$' />
                                <button onClick={sendOpen}>Continue</button>
                            </span>
                        </div>
                    </div>


                    <div className='section-content' >
                        <input className='radio-box' type='radio' id='pledge-btn1' name='pledge' />
                        <label htmlFor='pledge-btn1'></label>
                        <div className='section-heading'>
                            <h1> Bamboo Stand</h1>
                            <h2>Pledge $25 or More</h2>
                        </div>
                        <section>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                            you’ll be added to a special Backer member list.</section>
                        <div className='section-bottom'>
                            <h4>Enter your Pledge</h4>
                            <span>
                                <input type='number' placeholder='$' />
                                <button onClick={sendOpen}>Continue</button>
                            </span>
                        </div>
                    </div>


                    <div className='section-content'>
                        <input className='radio-box' type='radio' id='pledge-btn2' name='pledge' />
                        <label htmlFor='pledge-btn2'></label>
                        <div className='section-heading'>
                            <h1>Black Edition Stand</h1>
                            <h2>Pledge $75 or more</h2>
                        </div>
                        <section>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                            member list. Shipping is included.</section>
                        <div className='section-bottom'>
                            <h4>Enter your Pledge</h4>
                            <span>
                                <input type='number' placeholder='$' />
                                <button onClick={sendOpen}>Continue</button>
                            </span>
                        </div>
                    </div>


                    <div className='section-content'>
                        <input className='radio-box' type='radio' id='pledge-btn3' name='pledge' />
                        <label htmlFor='pledge-btn3'></label>
                        <div className='section-heading'>
                            <h1>Mahogany Special Edition</h1>
                            <h2>Pledge $200 or more</h2>
                        </div>
                        <section>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                            to our Backer member list. Shipping is included.</section>
                        <div className='section-bottom'>
                            <h4>Enter your Pledge</h4>
                            <span>
                                <input type='number' placeholder='$' />
                                <button onClick={sendOpen}>Continue</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal