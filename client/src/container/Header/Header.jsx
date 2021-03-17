import React, { useState } from "react";
import TopHeader from "../../components/TopHeader/TopHeader";
import BottonHeader from "../../components/BottonHeader/BottonHeader";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Backdrop from "../../components/Backdrop/Backdrop";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchGetProductListSearch } from "../../store/actions/actionSearchList";
import { logout } from "../../store/actions/actionsUser";
const Header = () => {
    const history = useHistory();
    const auth = useSelector((state) => state.user.user.auth);
    const [header, setHeader] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logout());
    };

    const searchSubmit = () => {
        console.log(searchValue);
        dispatch(fetchGetProductListSearch(searchValue));

        history.push(`/search/${searchValue === "" ? "всі товари" : searchValue}`);
    };

    return (
        <div>
            <TopHeader auth={auth} setHeader={() => setHeader(!header)} logOut={logOut} />
            <BottonHeader searchValue={searchValue} setSearchValue={setSearchValue} searchSubmit={searchSubmit} />
            <SideDrawer
                show={header}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                searchSubmit={searchSubmit}
                auth={auth}
                logOut={logOut}
            />
            {header ? (
                <>
                    <Backdrop click={() => setHeader(!header)}></Backdrop>
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

Header.whyDidYouRender = true;
export default React.memo(Header);
