import React from "react";
import "./AccountSettings.css";

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
}) => {
    return (
        <div className="settings account__settings">
            <div className="settings-box">
                <h3 className="settings-title">Setting</h3>
                <div className="settings-user-name">
                    <label>Your Name</label>
                    <input className="input input--settings-name" value={newName} onChange={setNewName} />
                </div>
                <div className="settings-user-surename">
                    <label>Your Surname</label>
                    <input className="input input--settings-surename" value={newSurname} onChange={setNewSurname} />
                </div>

                <div className="settings-user-email">
                    <label>Your Email</label>
                    <input className="input input--settings-email" defaultValue={email} disabled />
                </div>
                <div className="settings-user-age">
                    <label>Your Age</label>
                    <input className="input input--settings-age" value={newAge} onChange={setNewAge} />
                </div>
                <div className="settings-user-phone">
                    <label>Your Phone</label>
                    <input className="input input--settings-phone" value={newPhone} onChange={setNewPhone} />
                </div>
                <div className="settings-user-gender">
                    <label>Your Gender</label>
                    <input className="input input--settings-gender" value={newGender} onChange={setNewGender} />
                </div>
                <p className="settings-submit" onClick={saveChange}>
                    Save Changes
                </p>
            </div>
            <div className="setting-box-options">
                <div className="settings-box-email">
                    <h3 className="email-support-title">Email support</h3>
                    {emailVerify ? (
                        <p className="email-support-text">Your email is verify</p>
                    ) : (
                        <>
                            <p className="email-support-text">Plese verify email</p>
                            <p className="email-support-btn" onClick={goVerify}>
                                Verify
                            </p>
                            {sendEmail ? <p className="email-support-send">Please go to your email box</p> : <></>}
                        </>
                    )}
                </div>
                <div className="settings-box-danger">
                    <h3 className="danger-zone">Danger Zone</h3>
                    <p className="delete-account-btn">Delete Account</p>
                </div>
            </div>
        </div>
    );
};

AccountSettings.whyDidYouRender = true;
export default React.memo(AccountSettings);
