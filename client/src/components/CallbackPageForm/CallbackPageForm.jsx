import React from "react";
import "./CallbackPageForm.scss";

const CallbackPageForm = ({
    loginSubmit,
    errMess,
    localErrTextL,
    localErrL,
    err,
    setLoginPassAgain,
    loginPassAgain,
    loginPass,
    setLoginPass,
    setLoginEmail,
    loginEmail,
}) => {
    return (
        <div className="verify-email__container">
            <div className="login__form">
                <div className="login-user-email">
                    <label>Ваша пошта</label>
                    <input className="input input--login-email" onChange={setLoginEmail} value={loginEmail} />
                </div>
                <div className="login-user-password">
                    <label>Пароль</label>
                    <input
                        type="password"
                        className="input input--login-password"
                        onChange={setLoginPass}
                        value={loginPass}
                    />
                </div>
                <div className="login-user-password">
                    <label>Повторіть пароль</label>
                    <input
                        type="password"
                        className="input input--login-password"
                        onChange={setLoginPassAgain}
                        value={loginPassAgain}
                    />
                </div>
                {err || localErrL ? (
                    <p className="login-error">
                        {errMess}
                        {localErrTextL}
                    </p>
                ) : (
                    <></>
                )}
                <p className="login-submit" onClick={loginSubmit}>
                    Підтвердити
                </p>
            </div>
        </div>
    );
};

CallbackPageForm.whyDidYouRender = true;
export default React.memo(CallbackPageForm);
