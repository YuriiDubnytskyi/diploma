import React, { useState, useEffect, useCallback } from "react";
import AccountInfo from "../../components/AccountInfo/AccountInfo";
import AccountOrders from "../../components/AccountOrders/AccountOrders";
import AccountSettings from "../../components/AccountSettings/AccountSettings";
import AccountSwitchBox from "../../components/AccountSwitchBox/AccountSwitchBox";
import TitlePager from "../../components/TitlePager/TitlePager";
import "./Account.scss";
import { useSelector, useDispatch } from "react-redux";
import API from "../../API/API";
import { addUserSuccess, removeUser } from "../../store/actions/actionsUser";
import { useHistory } from "react-router-dom";

const Account = () => {
    const dispatch = useDispatch();
    const { email, name, surname, gender, age, phone, id, emailVerify, auth } = useSelector((state) => state.user.user);

    const history = useHistory();
    const [data, setData] = useState(false);
    useEffect(() => {
        if (!auth) {
            history.push("/");
        } else {
            API.get("/user/getCountSellProducts/" + id).then((res) => {
                setData(res.data.data);
            });
        }
    }, [auth]);

    const [showInfo, setShowInfo] = useState(true);
    const [showSettings, setShowSetings] = useState(false);
    const [showOrder, setShowOrder] = useState(false);

    const showInfoBox = useCallback(() => {
        setShowInfo(true);
        setShowOrder(false);
        setShowSetings(false);
    }, []);
    const showSettingsBox = useCallback(() => {
        setShowInfo(false);
        setShowOrder(false);
        setShowSetings(true);
    }, []);
    const showOrderBox = useCallback(() => {
        setShowInfo(false);
        setShowOrder(true);
        setShowSetings(false);
    }, []);

    const [newName, setNewName] = useState(name);
    const [newSurname, setNewSurname] = useState(surname);
    const [newGender, setNewGender] = useState(gender);
    const [newAge, setNewAge] = useState(age);
    const [newPhone, setNewPhone] = useState(phone);

    const saveChange = useCallback(() => {
        const user = {
            name: newName || name,
            surname: newSurname || surname,
            gender: newGender || gender,
            age: newAge || age,
            phone: newPhone || phone,
            id: id,
        };

        API.put("/user/changeInfo", user).then((res) => {
            dispatch(addUserSuccess(res.data.data));
        });
    }, []);

    const resetChange = useCallback(() => {
        setNewName(name);
        setNewSurname(surname);
        setNewGender(gender);
        setNewAge(age);
        setNewPhone(phone);
    }, []);

    const [sendEmail, setSetEmail] = useState(false);

    const goVerify = useCallback(() => {
        setSetEmail(true);
        API.post("/user/emailVerify", { email, id });
    }, []);

    const deleteAccount = useCallback(() => {
        API.delete("/user/deleteAccount/" + id);
        dispatch(removeUser());
    }, []);

    const setNewNameChange = useCallback((e) => setNewName(e.target.value), []);
    const setNewSurnameChange = useCallback((e) => setNewSurname(e.target.value), []);
    const setNewGenderChange = useCallback((e) => setNewGender(e.target.value), []);
    const setNewAgeChange = useCallback((e) => setNewAge(Number(e.target.value)), []);
    const setNewPhoneChange = useCallback((e) => setNewPhone(e.target.value), []);

    return (
        <div className="account-wrapper">
            <TitlePager title="Account" />
            <div className="account__container account">
                <AccountSwitchBox
                    showInfo={showInfo}
                    showSettings={showSettings}
                    showOrder={showOrder}
                    showInfoBox={showInfoBox}
                    showSettingsBox={showSettingsBox}
                    showOrderBox={showOrderBox}
                />

                {showInfo ? (
                    <AccountInfo email={email} name={name} surname={surname} gender={gender} age={age} phone={phone} />
                ) : (
                    <></>
                )}
                {showSettings ? (
                    <AccountSettings
                        email={email}
                        emailVerify={emailVerify}
                        sendEmail={sendEmail}
                        newPhone={newPhone}
                        newName={newName}
                        newSurname={newSurname}
                        newGender={newGender}
                        newAge={newAge}
                        setNewName={setNewNameChange}
                        setNewSurname={setNewSurnameChange}
                        setNewGender={setNewGenderChange}
                        setNewAge={setNewAgeChange}
                        setNewPhone={setNewPhoneChange}
                        saveChange={saveChange}
                        goVerify={goVerify}
                        deleteAccount={deleteAccount}
                        resetChange={resetChange}
                    />
                ) : (
                    <></>
                )}
                {showOrder ? <AccountOrders data={data} /> : <></>}
            </div>
        </div>
    );
};

Account.whyDidYouRender = true;
export default React.memo(Account);
