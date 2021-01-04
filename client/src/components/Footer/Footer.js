import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer__container footer'>
            <div className='footer__content'>
                <div className='footer__content-info '>
                    <div className='footer__text'>
                        <h2 className='title-footer'>Vulka Electrical</h2>
                    </div>
                    <div className='footer__social'>
                        <i className="fa fa-facebook fa-footer"></i>
                        <i className="fa fa-instagram fa-footer"></i>
                        <i className="fa fa-twitter fa-footer"></i>
                        <i className="fa fa-youtube fa-footer"></i>
                    </div>
                </div>
                <hr className='footer-line'/>
                <div className='footer__content-dev'>
                    <p className='footer__content-dev__text'>
                        Develop by Yurii Dubnytskyi © 2021. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

Footer.whyDidYouRender = true
export default React.memo(Footer)