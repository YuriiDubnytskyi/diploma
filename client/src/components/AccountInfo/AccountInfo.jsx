import React from "react";
import "./AccountInfo.scss";

const AccountInfo = ({ email, name, surname, gender, age, phone }) => {
    return (
        <div className="info account__info">
            <div className="info-box">
                <h3 className="info-title">Info</h3>
                <p className="info-item">Name : {name}</p>
                <p className="info-item">Surname : {surname}</p>
                <p className="info-item">Email : {email}</p>
                <p className="info-item">Age : {age}</p>
                <p className="info-item">Phone : {phone}</p>
                <p className="info-item">Gender : {gender}</p>
            </div>
        </div>
    );
};

AccountInfo.whyDidYouRender = true;
export default React.memo(AccountInfo);
