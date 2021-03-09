import React, { useEffect } from "react";
import "./AccountInfo.scss";

const AccountInfo = ({ email, name, surname, gender, age, phone }) => {
    return (
        <div className="info account__info">
            <div className="info-box">
                <h3 className="info-title">Інформаційний блок</h3>
                <p className="info-item">Імя : {name}</p>
                <p className="info-item">Прізвище : {surname}</p>
                <p className="info-item">Пошта : {email}</p>
                <p className="info-item">Вік : {age}</p>
                <p className="info-item">Телефон : {phone}</p>
                <p className="info-item">Стать : {gender}</p>
            </div>
        </div>
    );
};

AccountInfo.whyDidYouRender = true;
export default React.memo(AccountInfo);
