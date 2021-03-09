import React from "react";
import "./Welcome.scss";
import WelcomeAbout from "../../components/WelcomeAbout/WelcomeAbout";
import WelcomeOptions from "../../components/WelcomeOptions/WelcomeOptions";
import { Link } from "react-router-dom";
import logo1 from "./../../image/126px-Huawei_Standard_logo.svg.png";
import logo2 from "./../../image/200px-Xiaomi_logo.svg.webp";
import logo3 from "./../../image/505px-Apple_logo_black.svg.png";
import logo4 from "./../../image/Nokia_wordmark.svg.png";

const Welcome = () => {
    return (
        <div className="welcome__container welcome">
            <div className="welcome__about shop-about">
                <WelcomeAbout />
            </div>
            <div className="welcome__shop shop-categorie">
                <div className="welcome__shop__content">
                    <div className="welcome__text">
                        <h2 className="welcome-title">Вітаємо у нашому магазині</h2>
                    </div>
                    <div className="welcome__shop__box">
                        <p className="welcome-box-text">
                            <Link to="/categorie">Каталог товарів</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="welcome__options welcome-options">
                <WelcomeOptions />
            </div>
            <div className="welcome__partners">
                <div className="welcome__partners__text">
                    <h2 className="welcome-title">Наші партнери</h2>
                </div>
                <div className="welcome__partners__container">
                    <img alt="logo1" className="welcome__partners-img" src={logo1}></img>
                    <img alt="logo2" className="welcome__partners-img" src={logo2}></img>
                    <img alt="logo3" className="welcome__partners-img" src={logo3}></img>
                    <img alt="logo4" className="welcome__partners-img" src={logo4}></img>
                </div>
            </div>
        </div>
    );
};

Welcome.whyDidYouRender = true;
export default React.memo(Welcome);
