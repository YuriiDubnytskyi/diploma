import React, { useEffect } from "react";
import "./AccountSettings.scss";

const AccountSettings = ({
    email,
    emailVerify,
    goVerify,
    sendEmail,
    setNewName,
    setNewSurname,
    setNewGender,
    setNewAge,
    setNewPhone,
    saveChange,
    newPhone,
    newName,
    newSurname,
    newGender,
    newAge,
    deleteAccount,
    resetChange,
}) => {
    return (
        <div className="settings account__settings">
            <div className="settings-box">
                <h3 className="settings-title">Загальна інформація</h3>
                <div className="settings-user-name">
                    <label>Імя</label>
                    <input className="input input--settings-name" value={newName} onChange={setNewName} />
                </div>
                <div className="settings-user-surename">
                    <label>Прізвище</label>
                    <input className="input input--settings-surename" value={newSurname} onChange={setNewSurname} />
                </div>

                <div className="settings-user-email">
                    <label>Пошта</label>
                    <input className="input input--settings-email" defaultValue={email} disabled />
                </div>
                <div className="settings-user-age">
                    <label>Вік</label>
                    <input className="input input--settings-age" value={newAge} onChange={setNewAge} />
                </div>
                <div className="settings-user-phone">
                    <label>Телефон</label>
                    <input className="input input--settings-phone" value={newPhone} onChange={setNewPhone} />
                </div>
                <div className="settings-user-gender">
                    <label>Стать</label>
                    <input className="input input--settings-gender" value={newGender} onChange={setNewGender} />
                </div>
                <div className="settings-btn__container">
                    <p className="settings-submit" onClick={saveChange}>
                        Зберегти зміни
                    </p>
                    <p className="settings-reset" onClick={resetChange}>
                        Скасувати
                    </p>
                </div>
            </div>
            <div className="setting-box-options">
                <div className="settings-box-email">
                    <h3 className="email-support-title">Електронна пошта</h3>
                    {emailVerify ? (
                        <p className="email-support-text">Ви підтвердили електронну пошту</p>
                    ) : (
                        <>
                            <p className="email-support-text">Підтвердіть пошту для можливості здійснення покупок</p>
                            <p className="email-support-btn" onClick={goVerify}>
                                Підтвердити
                            </p>
                            {sendEmail ? <p className="email-support-send">Лист надіслано</p> : <></>}
                        </>
                    )}
                </div>
                <div className="settings-box-danger">
                    <h3 className="danger-zone">Небузпечна зона</h3>
                    <p className="delete-account-btn" onClick={deleteAccount}>
                        Видалити акаунт
                    </p>
                </div>
            </div>
        </div>
    );
};

AccountSettings.whyDidYouRender = true;
export default React.memo(AccountSettings);
