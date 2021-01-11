import React from "react";
import "./WelcomeAbout.css";
import img from "./../../image/background.jpg";

const WelcomeAbout = () => {
    return (
        <>
            <div className="shop-about__container shop-about__text">
                <div className="shop-about__text-wrapper">
                    <h2 className="shop-about-title">About Us</h2>
                    <p className="shop-about-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <div className="shop-about__img">
                <div className="img-wrapper">
                    <img alt="backround" className="shop-img" src={img}></img>
                </div>
            </div>
        </>
    );
};

WelcomeAbout.whyDidYouRender = true;
export default React.memo(WelcomeAbout);
