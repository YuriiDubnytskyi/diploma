import React, { useState } from "react";
import "./CallbackPage.scss";
import { useParams } from "react-router-dom";
import TitlePager from "./../../components/TitlePager/TitlePager";
import { useSelector } from "react-redux";
import API from "./../../API/API";
import CallbackPageForm from "./../../components/CallbackPageForm/CallbackPageForm";
import { emailTest } from "./../../helpers/helpers";

const CallbackPage = () => {
    const { id } = useParams();
    const user = useSelector((state) => state.user);
    //--------login state
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [loginPassAgain, setLoginPassAgain] = useState("");
    const [localErrL, setLocalErrL] = useState(false);
    const [localErrTextL, setLocalErrTextL] = useState("");
    const loginSubmit = () => {
        if (!emailTest.test(String(loginEmail).toLowerCase())) {
            setLocalErrL(true);
            setLocalErrTextL("Your Email Fail");
        } else if (loginPass != loginPassAgain) {
            setLocalErrL(true);
            setLocalErrTextL("Your password do not similar");
        } else if (loginEmail == "" || loginPass == "" || loginPassAgain == "") {
            setLocalErrL(true);
            setLocalErrTextL("enter All fields");
        } else {
            API.post("/auth/login", { email: loginEmail, password: loginPass, username: "q" }).then((user) => {
                if (user.status === 200 && id.slice(1) === user.data._id) {
                    API.put("/user/verify", { id: id.slice(1) });
                }
            });
        }
    };
    return (
        <>
            <TitlePager title="Verify Email" />
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
