import React, { useState } from "react";
import TitlePager from "../../components/TitlePager/TitlePager";
import "./ContactUs.scss";
import API from "./../../API/API";
import ContactUsForm from "./../../components/ContactUsForm/ContactUsForm";
import { Helmet } from "react-helmet";

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [err, setErr] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const sendEmail = () => {
        if (name === "" || title === "" || email === "" || text === "") {
            setErr("Заповніть усю інформацію");
            return;
        }
        setLoading(true);
        setErr("");
        setSuccess("");
        API.post("/user/sendText", {
            options: {
                name,
                title,
                email,
                text,
            },
        }).then((data) => {
            if (data.data.success) {
                setLoading(false);
                setSuccess("Success");
            } else {
                setLoading(false);
                setErr(data.data.comment);
            }
        });
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact US</title>
                <meta
                    name="description"
                    content="Зворотній зв'язок. Зв'яжіться з нами якщо маєте якісь помилки повідомте нас."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <TitlePager title="Звяжіться з нами" />
            <ContactUsForm
                name={name}
                email={email}
                title={title}
                text={text}
                success={success}
                err={err}
                sendEmail={sendEmail}
                setName={(e) => setName(e.target.value)}
                setEmail={(e) => setEmail(e.target.value)}
                setTitle={(e) => setTitle(e.target.value)}
                setText={(e) => setText(e.target.value)}
            />
        </>
    );
};

ContactUs.whyDidYouRender = true;
export default React.memo(ContactUs);
