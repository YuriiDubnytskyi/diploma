import React, { useState } from "react";
import TopHeader from "../../components/TopHeader/TopHeader";
import BottonHeader from "../../components/BottonHeader/BottonHeader";
import SideDrawer from "../../components/SideDrawer/SideDrawer";
import Backdrop from "../../components/Backdrop/Backdrop";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchGetProductListSearch } from "../../store/actions/actionSearchList";

const Header = () => {
    const history = useHistory();
    const auth = useSelector((state) => state.user.user.auth);
    const [searchValue, setSearchValue] = useState("");
    const dispatch = useDispatch();

    const searchSubmit = () => {
        console.log(searchValue);
        dispatch(fetchGetProductListSearch(searchValue));

        history.push(`/search/${searchValue === "" ? "all" : searchValue}`);
    };
    const [header, setHeader] = useState(false);

    return (
        <div>
            <TopHeader auth={auth} setHeader={() => setHeader(!header)} />
            <BottonHeader searchValue={searchValue} setSearchValue={setSearchValue} searchSubmit={searchSubmit} />
            <SideDrawer
                show={header}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                searchSubmit={searchSubmit}
                auth={auth}
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
