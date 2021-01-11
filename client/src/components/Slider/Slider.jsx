import React from "react";
import "./Slider.scss";

const Slider = () => {
    return (
        <div className="wrapper-loading">
            <div className="fancy-spinner">
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
};

Slider.whyDidYouRender = true;
export default React.memo(Slider);
