import React from 'react'
import './Slider.css'

const Slider = () => {
    return (
        <div class='wrapper-loading'>
            <div class="fancy-spinner">
                <div class="ring"></div>
                <div class="ring"></div>
                <div class="dot"></div>
            </div>
        </div>
    )
}

Slider.whyDidYouRender = true
export default React.memo(Slider)