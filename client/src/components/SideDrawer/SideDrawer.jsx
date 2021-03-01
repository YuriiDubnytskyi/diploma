import React from "react";
import "./SideDrawer.scss";
import { Link } from "react-router-dom";

const SideDrawer = (props) => {
    return (
        <div className={props.show ? "side-drawer open" : "side-drawer"}>
            <div className="side-drawer__content content-sider">
                <div className="side-drawer__logo side-drawer-logo">
                    <p className="side-drawer__text">Vulka Electronic</p>
                </div>
                <div className="side-drawer__search">
                    <div>
                        <input
                            className="side-drawer__input"
                            placeholder="Search"
                            value={props.searchValue}
                            onChange={(e) => props.setSearchValue(e.target.value)}
                        />
                        <i className="fa fa-search side-drawer-btns-search" onClick={props.searchSubmit}></i>
                    </div>
                </div>
                <div className="side-drawer__nav side-drawer-nav">
                    <nav className="side-drawer__navigation side-drawer-navigation">
                        <Link className="side-drawer-navigation__link" to="/">
                            Home
                        </Link>
                        <Link className="side-drawer-navigation__link" to="/categorie">
                            Categories
                        </Link>
                        <Link className="side-drawer-navigation__link" to="/contact">
                            Contact Us
                        </Link>
                        <Link className="side-drawer-navigation__link " to="/blog">
                            Blog
                        </Link>
                        {props.auth ? (
                            <>
                                <Link className="side-auth-account side-drawer-navigation__link" to="/account">
                                    <i className="fa fa-user-circle"></i>Account
                                </Link>
                                <Link className="side-auth-logout side-drawer-navigation__link" onClick={props.logOut}>
                                    <i class="fa fa-sign-out"></i>LogOut
                                </Link>
                            </>
                        ) : (
                            <div className="auth__links">
                                <Link className="side-auth-login side-drawer-navigation__link" to="/login">
                                    Login
                                </Link>
                                <Link className="side-auth-sign side-drawer-navigation__link" to="/login">
                                    Sign up
                                </Link>
                            </div>
                        )}
                    </nav>
                </div>
                <div className="side-drawer__btns side-drawer-btns">
                    <Link className="side-drawer-btns-container-link" to="/like">
                        <i className="fa fa-heart"></i>
                    </Link>
                    <Link className="side-drawer-btns-container-link" to="/bucket">
                        <i className="fa fa-shopping-bag"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

SideDrawer.whyDidYouRender = true;
export default React.memo(SideDrawer);
