import React, { useEffect } from "react";
import "./LoginForm.css";
import { useHistory } from "react-router-dom";

const LoginForm = (props) => {
    const history = useHistory();
    useEffect(() => {
        if (props.user.success) {
            history.push("/");
        }
    }, [props.user.success]);
    return (
        <div className="login__container">
            <div className="login__form">
                <div className="login-user-email">
                    <label>Your Email</label>
                    <input
                        className="input input--login-email"
                        onChange={props.setLoginEmail}
                        value={props.loginEmail}
                    />
                </div>
                <div className="login-user-password">
                    <label>Your Password</label>
                    <input
                        type="password"
                        className="input input--login-password"
                        onChange={props.setLoginPass}
                        value={props.loginPass}
                    />
                </div>
                <div className="login-user-password">
                    <label>Your Password Again</label>
                    <input
                        type="password"
                        className="input input--login-password"
                        onChange={props.setLoginPassAgain}
                        value={props.loginPassAgain}
                    />
                </div>
                {props.user.err || props.localErrL ? (
                    <p className="login-error">
                        {props.user.errMess}
                        {props.localErrTextL}
                    </p>
                ) : (
                    <></>
                )}
                <p className="login-submit" onClick={props.loginSubmit}>
                    Login
                </p>
            </div>
            <div>
                <hr className="line-login" />
            </div>
            <div className="sign__form">
                <div className="sign-user-email">
                    <label>Your Email</label>
                    <input className="input input--sign-email" onChange={props.setSignEmail} value={props.signEmail} />
                </div>
                <div className="sign-user-name">
                    <label>Your Name</label>
                    <input className="input input--sign-name" onChange={props.setSignName} value={props.signName} />
                </div>
                <div className="sign-user-password">
                    <label>Your Password</label>
                    <input
                        type="password"
                        className="input input--sign-password"
                        onChange={props.setSignPass}
                        value={props.signPass}
                    />
                </div>
                <div className="sign-user-password">
                    <label>Your Password Again</label>
                    <input
                        type="password"
                        className="input input--sign-password"
                        onChange={props.setSignPassAgain}
                        value={props.signPassAgain}
                    />
                </div>
                {props.user.err || props.localErrS ? (
                    <p className="login-error">
                        {props.user.errMess}
                        {props.localErrTextS}
                    </p>
                ) : (
                    <></>
                )}
                <p className="sign-submit" onClick={props.signSubmit}>
                    Sign UP
                </p>
            </div>
        </div>
    );
};

LoginForm.whyDidYouRender = true;
export default React.memo(LoginForm);
