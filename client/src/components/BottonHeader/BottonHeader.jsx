import React from "react";
import "./BottonHeader.scss";
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
                            Головна
                        </Link>
                        <Link className="navigation-link" to="/categorie">
                            Категорії
                        </Link>
                        <Link className="navigation-link" to="/contact">
                            Звяжіться з нами
                        </Link>
                        <Link className="navigation-link" to="/blog">
                            Новини & Блог
                        </Link>
                    </nav>
                </div>
                <div className="content-botton__btns btns-container">
                    <input
                        className="btns-container__input"
                        placeholder="Пошук..."
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
