import React, { useState } from "react";
import "./CallbackPage.scss";
import { useParams } from "react-router-dom";
import TitlePager from "./../../components/TitlePager/TitlePager";
import { useSelector } from "react-redux";
import API from "./../../API/API";
import CallbackPageForm from "./../../components/CallbackPageForm/CallbackPageForm";
import { emailTest } from "./../../helpers/helpers";
import { Helmet } from "react-helmet";

const CallbackPage = () => {
    const { id } = useParams();
    const user = useSelector((state) => state.user);
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [loginPassAgain, setLoginPassAgain] = useState("");
    const [localErrL, setLocalErrL] = useState(false);
    const [localErrTextL, setLocalErrTextL] = useState("");
    const loginSubmit = () => {
        if (!emailTest.test(String(loginEmail).toLowerCase())) {
            setLocalErrL(true);
            setLocalErrTextL("Ваша електронна адреса неправильна");
        } else if (loginPass != loginPassAgain) {
            setLocalErrL(true);
            setLocalErrTextL("Паролі не співпадають");
        } else if (loginEmail == "" || loginPass == "" || loginPassAgain == "") {
            setLocalErrL(true);
            setLocalErrTextL("Заповніть всі поля");
        } else {
            API.post("/auth/login", { email: loginEmail, password: loginPass, username: "q" }).then((user) => {
                if (user.status === 200 && id.slice(1) === user.data._id) {
                    API.put("/user/verify", { id: id.slice(1) });
                    alert("Пошта підтвердженна");
                }
            });
        }
    };
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Callback</title>
                <meta name="description" content="Підтвердження електронної пошти для здійснення покупок." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <TitlePager title="Підтвердження пошти" />
            <CallbackPageForm
                loginSubmit={loginSubmit}
                errMess={user.errMess}
                localErrTextL={localErrTextL}
                localErrL={localErrL}
                err={user.err}
                setLoginPassAgain={(e) => setLoginPassAgain(e.target.value)}
                loginPassAgain={loginPassAgain}
                loginPass={loginPass}
                setLoginPass={(e) => setLoginPass(e.target.value)}
                setLoginEmail={(e) => setLoginEmail(e.target.value)}
                loginEmail={loginEmail}
            />
        </>
    );
};

CallbackPage.whyDidYouRender = true;
export default React.memo(CallbackPage);
