import React, { useEffect } from "react";
import "./AccountSwitchBox.scss";

const AccountSwitchBox = ({ showInfo, showSettings, showOrder, showInfoBox, showSettingsBox, showOrderBox }) => {
    return (
        <div className="account-switch account__switch">
            <div className="account-switch__content content">
                <h3 className="content-title">Налаштування акаунту</h3>
                <p className="content-subtitle">Ви можете переглядати і змінювати інформацію</p>
                <hr />
                <p className={`content-btn ${showInfo ? "active-content-btn" : ""}`} onClick={showInfoBox}>
                    Інформація
                </p>
                <p className={`content-btn ${showSettings ? "active-content-btn" : ""}`} onClick={showSettingsBox}>
                    Зміна інформації
                </p>

                <p className={`content-btn ${showOrder ? "active-content-btn" : ""}`} onClick={showOrderBox}>
                    Покупки
                </p>
            </div>
        </div>
    );
};

AccountSwitchBox.whyDidYouRender = true;
export default React.memo(AccountSwitchBox);
