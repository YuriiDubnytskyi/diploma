import React from "react";
import "./WelcomeAbout.scss";
import img from "./../../image/background.jpg";

const WelcomeAbout = () => {
    return (
        <>
            <div className="shop-about__container shop-about__text">
                <div className="shop-about__text-wrapper">
                    <h2 className="shop-about-title">Про Нас</h2>
                    <p className="shop-about-description">
                        Наш магазин спеціалізується на різноманітній електроніці.
                        <br />
                        Тут ви зможете знайти все що вам знадобиться для відпочинку.
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
