import React from "react";
import "./WelcomeOptions.scss";

const WelcomeOptions = () => {
    return (
        <>
            <div className="welcome-options__text options-text">
                <h3 className="options-text__title">Ми турбуємося про Вас...</h3>
            </div>
            <div className="welcome-options__container">
                <div className="option__item__container option-item">
                    <i className="fa fa-shield-alt"></i>
                    <h4 className="option-item__title">Безпека</h4>
                    <p className="option-item__description">
                        Ви оплачуєте товар тільки після того як ви побачили що він в порядку.
                    </p>
                </div>
                <div className="option__item__container option-item">
                    <i className="fa fa-shield-alt"></i>
                    <h4 className="option-item__title">Підтримка</h4>
                    <p className="option-item__description">Ми завжди є на звязку і готові вам допомогти.</p>
                </div>
                <div className="option__item__container option-item">
                    <i className="fa fa-shield-alt"></i>
                    <h4 className="option-item__title">Надійність</h4>
                    <p className="option-item__description">Усі наші товари мають офіційну гарантію виробника.</p>
                </div>
                <div className="option__item__container option-item">
                    <i className="fa fa-shield-alt"></i>
                    <h4 className="option-item__title">Доставка & повернення</h4>
                    <p className="option-item__description">
                        Ми безпечно доставимо вам ваші товари. Ви також маєте можливість повернути товар.
                    </p>
                </div>
            </div>
        </>
    );
};

WelcomeOptions.whyDidYouRender = true;
export default React.memo(WelcomeOptions);
