import React from "react";
import "./BillingForm.scss";

const BillingForm = ({
    name,
    surname,
    email,
    city,
    novaPosta,
    phone,
    note,
    error,
    setName,
    setSurname,
    setCity,
    setNovaPosta,
    setPhone,
    setNote,
    onFinish,
}) => {
    return (
        <div className="billing__form">
            <div className="billing-user-name">
                <label>Ваше Імя</label>
                <input className="input input--billing-name" onChange={setName} value={name} />
            </div>
            <div className="billing-user-surname">
                <label>Ваше Прізвище</label>
                <input className="input input--billing-surname" onChange={setSurname} value={surname} />
            </div>
            <div className="billing-user-email">
                <label>Ваша електронна пошта</label>
                <input className="input input--billing-email" disabled value={email} />
            </div>
            <div className="billing-user-city">
                <label>Ваше місто</label>
                <input className="input input--billing-city" onChange={setCity} value={city} />
            </div>
            <div className="billing-user-novaPosta">
                <label>Відділення нової пошти</label>
                <input className="input input--billing-poshta" onChange={setNovaPosta} value={novaPosta} />
            </div>
            <div className="billing-user-phone">
                <label>Ваш телефон</label>
                <input className="input input--billing-phone" onChange={setPhone} value={phone} />
            </div>
            <div className="billing-user-note">
                <label>Ваші побажання</label>
                <textarea className="input input--billing-note" onChange={setNote} value={note} />
            </div>
            {error !== "" ? <p className="billing-error">{error}</p> : <></>}
            <p className="billing-submit" onClick={onFinish}>
                Здійснити покупку
            </p>
        </div>
    );
};

BillingForm.whyDidYouRender = true;
export default React.memo(BillingForm);
