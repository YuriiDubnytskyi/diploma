import React, { useEffect, Suspense } from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import ChatWidget from "@papercups-io/chat-widget";
import Header from "./container/Header/Header";
import Footer from "./components/Footer/Footer";
import API from "./API/API";
import { addUserSuccess } from "./store/actions/actionsUser";
import { useDispatch } from "react-redux";
const Main = React.lazy(() => import("./container/Main/Main"));

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        API.get("/user/isAuth").then((res) => {
            if (res.data.status == 200) {
                dispatch(
                    addUserSuccess({
                        email: res.data.user.email,
                        likeProducts: res.data.user.likeProducts,
                        id: res.data.user._id,
                        gender: res.data.user.gender,
                        name: res.data.user.name,
                        surname: res.data.user.surname,
                        phone: res.data.user.phone,
                        age: res.data.user.age,
                        emailVerify: res.data.user.emailVerify,
                    })
                );
            }
        });
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <Suspense fallback={<div>Loading ...</div>}>
                <Main />
            </Suspense>
            <Footer />
            <ChatWidget
                title="Welcome to Dubnytskyi Corporation"
                subtitle="Ask us anything in the chat window below 😊"
                primaryColor="#abb8c3"
                greeting="Hello! Any questions ?"
                newMessagePlaceholder="Start typing..."
                accountId="f02d10e2-ff5b-4a0b-be71-f2bffc5d7e9f"
                baseUrl="https://app.papercups.io"
            />
        </BrowserRouter>
    );
};

export default App;
