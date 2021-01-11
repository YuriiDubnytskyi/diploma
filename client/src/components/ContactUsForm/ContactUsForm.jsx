import React from "react";
import "./ContactUsForm.css";

const ContactUsForm = ({ name, email, title, text, success, err, sendEmail, setName, setEmail, setTitle, setText }) => {
    return (
        <div className="contact__conatiner contact">
            <div className="contact__user contact-user">
                <div className="contact-user-name">
                    <label>Your Name</label>
                    <input className="input input--contact-name" value={name} onChange={setName} />
                </div>
                <div className="contact-user-email">
                    <label>Your Email</label>
                    <input className="input input--contact-email" value={email} onChange={setEmail} />
                </div>
            </div>
            <div className="contact-subject">
                <label>Subject</label>
                <input className="input input--contact-subject" value={title} onChange={setTitle} />
            </div>
            <div className="contact-text">
                <label>Text</label>
                <textarea className="input input--contact-text" value={text} onChange={setText} />
            </div>
            <div className="contact-info">
                <p className="contact-btn" onClick={sendEmail}>
                    Send
                </p>
                {success === "" ? <></> : <p className="contact-info-success">{success}</p>}
                {err === "" ? <></> : <p className="contact-info-error">{err}</p>}
            </div>
        </div>
    );
};

ContactUsForm.whyDidYouRender = true;
export default React.memo(ContactUsForm);
