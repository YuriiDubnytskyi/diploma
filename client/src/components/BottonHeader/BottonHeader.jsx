import React from "react";
import "./BottonHeader.css";
import { Link } from "react-router-dom";

const BottonHeader = (props) => {
    return (
        <div className="botton-header__container botton-header">
            <div className="botton-header__content content-botton">
                <div className="content-botton__logo header-logo">
                    <p className="header-logo__text">Vulka Electronic</p>
                </div>
                <div className="content-botton__nav header-nav">
                    <nav className="header-nav__navigation navigation">
                        <Link className="navigation-link" to="/">
                            Home
                        </Link>
                        <Link className="navigation-link" to="/categorie">
                            Categories
                        </Link>
                        <Link className="navigation-link" to="/contact">
                            Contact Us
                        </Link>
                        <Link className="navigation-link" to="/blog">
                            Blog
                        </Link>
                    </nav>
                </div>
                <div className="content-botton__btns btns-container">
                    <input
                        className="btns-container__input"
                        placeholder="Search"
                        value={props.searchValue}
                        onChange={(e) => props.setSearchValue(e.target.value)}
                    />
                    <i className="fa fa-search" onClick={props.searchSubmit}></i>
                    <Link className="btns-container-link" to="/like">
                        <i className="fa fa-heart"></i>
                    </Link>
                    <Link className="btns-container-link" to="/bucket">
                        <i className="fa fa-shopping-bag"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

BottonHeader.whyDidYouRender = true;
export default React.memo(BottonHeader);
