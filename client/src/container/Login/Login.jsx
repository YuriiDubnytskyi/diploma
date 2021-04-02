import React, { useState } from "react";
import "./Login.scss";
import TitlePager from "./../../components/TitlePager/TitlePager";
import LoginForm from "./../../components/LoginForm/LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserSign, fetchUserLogin } from "./../../store/actions/actionsUser";
import { emailTest } from "./../../helpers/helpers";
import { Helmet } from "react-helmet";

const Login = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    //--------login state
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [loginPassAgain, setLoginPassAgain] = useState("");
    //-------sign state
    const [signName, setSignName] = useState("");
    const [signEmail, setSignEmail] = useState("");
    const [signPass, setSignPass] = useState("");
    const [signPassAgain, setSignPassAgain] = useState("");

    //-------local error l-login s- sign
    const [localErrL, setLocalErrL] = useState(false);
    const [localErrTextL, setLocalErrTextL] = useState("");
    const [localErrS, setLocalErrS] = useState(false);
    const [localErrTextS, setLocalErrTextS] = useState("");
    //------login submit
    const loginSubmit = () => {
        if (!emailTest.test(String(loginEmail).toLowerCase())) {
            setLocalErrL(true);
            setLocalErrTextL("У вас неправильна пошта");
        } else if (loginPass != loginPassAgain) {
            setLocalErrL(true);
            setLocalErrTextL("Ваші паролі мають бути однакові");
        } else if (loginEmail == "" || loginPass == "" || loginPassAgain == "") {
            setLocalErrL(true);
            setLocalErrTextL("Усі поля повинні бути заповненні");
        } else {
            setLocalErrL(false);
            setLocalErrTextL("");
            dispatch(fetchUserLogin(loginEmail, loginPass));
        }
    };
    const signSubmit = () => {
        if (!emailTest.test(String(signEmail).toLowerCase())) {
            setLocalErrS(true);
            setLocalErrTextS("У вас неправильна пошта");
        } else if (signName == "" || signPass == "" || signPassAgain == "" || signEmail == "") {
            setLocalErrS(true);
            setLocalErrTextS("Усі поля повинні бути заповненні");
        } else if (signPass != signPassAgain) {
            setLocalErrS(true);
            setLocalErrTextS("Ваші паролі мають бути однакові");
        } else {
            setLocalErrL(false);
            setLocalErrTextL("");
            dispatch(fetchUserSign(signEmail, signPass, signName));
        }
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>LogIN</title>
                <meta name="description" content="Увійдіть в особистий кабінет або зареєструйтесь у нашому магазині." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <TitlePager title="Авторизація & Реєстрація" />
            <LoginForm
                user={user}
                loginEmail={loginEmail}
                setLoginEmail={(e) => setLoginEmail(e.target.value)}
                loginPass={loginPass}
                setLoginPass={(e) => setLoginPass(e.target.value)}
                loginPassAgain={loginPassAgain}
                setLoginPassAgain={(e) => setLoginPassAgain(e.target.value)}
                signName={signName}
                setSignName={(e) => setSignName(e.target.value)}
                signEmail={signEmail}
                setSignEmail={(e) => setSignEmail(e.target.value)}
                signPass={signPass}
                setSignPass={(e) => setSignPass(e.target.value)}
                signPassAgain={signPassAgain}
                setSignPassAgain={(e) => setSignPassAgain(e.target.value)}
                localErrL={localErrL}
                localErrTextL={localErrTextL}
                localErrS={localErrS}
                localErrTextS={localErrTextS}
                loginSubmit={loginSubmit}
                signSubmit={signSubmit}
            />
        </>
    );
};

Login.whyDidYouRender = true;
export default React.memo(Login);
