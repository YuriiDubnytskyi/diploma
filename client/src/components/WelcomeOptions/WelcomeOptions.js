import React from 'react'
import './WelcomeOptions.css'

const WelcomeOptions = () => {
    return (
            <>
                <div className='welcome-options__text options-text'>
                    <h3 className='options-text__title'>
                        We care About You...
                    </h3>
                </div>
                <div className='welcome-options__container'>
                    <div className='option__item__container option-item'>
                        <i className="fa fa-shield-alt"></i>
                        <h4 className='option-item__title'>Item</h4>
                        <p className='option-item__description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                        </p>
                    </div>
                    <div className='option__item__container option-item'>
                        <i className="fa fa-shield-alt"></i>
                        <h4 className='option-item__title'>Item</h4>
                        <p className='option-item__description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                        </p>
                    </div>
                    <div className='option__item__container option-item'>
                        <i className="fa fa-shield-alt"></i>
                        <h4 className='option-item__title'>Item</h4>
                        <p className='option-item__description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                        </p>
                    </div>
                    <div className='option__item__container option-item'>
                        <i className="fa fa-shield-alt"></i>
                        <h4 className='option-item__title'>Item</h4>
                        <p className='option-item__description'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna
                        </p>
                    </div>
                </div>
        </>
    )
}

WelcomeOptions.whyDidYouRender = true
export default React.memo(WelcomeOptions)