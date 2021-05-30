import React, { useState } from "react";
import TitlePager from "./../../components/TitlePager/TitlePager";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { clearBucket } from "./../../store/actions/actionBucket";
import { clearBucketUser } from "./../../store/actions/actionsUser";
import API from "./../../API/API";
import "./BuyProduct.scss";
import BillingForm from "./../../components/BillingForm/BillingForm";
import { Helmet } from "react-helmet";

const BuyProduct = () => {
    const user = useSelector((state) => state.user.user);
    const productsBucket = useSelector((state) => state.productBucket);

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email] = useState(user.email);
    const [city, setCity] = useState("");
    const [novaPosta, setNovaPosta] = useState("");
    const [phone, setPhone] = useState("");
    const [note, setNote] = useState("");

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();
    const onFinish = () => {
        if (name === "" || surname === "" || city === "" || novaPosta === "" || phone === "") {
            setError("Заповніть інформацію");
            return;
        }
        setError("");
        setLoading(true);
        API.post("/user/buyProducts", {
            options: {
                id: user.id,
                name,
                surname,
                email,
                city,
                novaPosta,
                phone,
                note,
            },
            products: productsBucket,
        }).then((data) => {
            if (data.data.success) {
                dispatch(clearBucket());
                dispatch(clearBucketUser());
                setLoading(false);
                setSuccess(true);
                alert("Покупка успішно пішла в обробку");
            }
        });
        history.push("/");
    };
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>BuyProduct</title>
                <meta name="description" content="Оформлення замовлення у нашому магазині" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <TitlePager title="Деталі покупки" />
            <div className="billing_container">
                <BillingForm
                    surname={surname}
                    email={email}
                    city={city}
                    novaPosta={novaPosta}
                    phone={phone}
                    note={note}
                    error={error}
                    setName={(e) => setName(e.target.value)}
                    setSurname={(e) => setSurname(e.target.value)}
                    setCity={(e) => setCity(e.target.value)}
                    setNovaPosta={(e) => setNovaPosta(e.target.value)}
                    setPhone={(e) => setPhone(e.target.value)}
                    setNote={(e) => setNote(e.target.value)}
                    onFinish={onFinish}
                />
            </div>
        </>
    );
};

BuyProduct.whyDidYouRender = true;
export default React.memo(BuyProduct);
