import React from 'react'
import './AccountSwitchBox.css'

const AccountSwitchBox = ({showInfo,showSettings,showOrder,showInfoBox,showSettingsBox,showOrderBox}) => {
    return (
        <div className='account-switch account__switch'>
            <div className='account-switch__content content'>
                    <h3 className='content-title'>Setting account</h3>
                    <p  className='content-subtitle'>You can change information</p>
                    <hr/>
                    <p  className={`content-btn ${showInfo?'active-content-btn':''}`} onClick={showInfoBox}>User Profile</p>
                    <p  className={`content-btn ${showSettings?'active-content-btn':''}`} onClick={showSettingsBox}>User Setting</p>
                    <p  className={`content-btn ${showOrder?'active-content-btn':''}`} onClick={showOrderBox}>User Orders</p>
            </div>
        </div>
    )
}

AccountSwitchBox.whyDidYouRender = true
export default React.memo(AccountSwitchBox)