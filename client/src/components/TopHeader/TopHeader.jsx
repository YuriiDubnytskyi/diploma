import React from "react";
import "./TopHeader.scss";
import { Link } from "react-router-dom";

const TopHeader = (props) => {
    return (
        <div className="top-header__container top-header">
            <div className="top-header__content content-top">
                <div className="content-top__call call-support">
                    <p className="call-support__info">
                        Вітаємо Вас в нашому магазині. Є питання ? Подзвоніть
                        <a className="call-support__phone" href="tel:0687516148">
                            {" "}
                            +38 068 75 16 148{" "}
                        </a>
                    </p>
                    <p className="call-support__info--responce">Vulka Electronic</p>
                </div>
                <div className="content-top__auth auth">
                    {props.auth ? (
                        <>
                            <Link className="auth-account" to="/account">
                                <i className="fa fa-user-circle"></i>Акаунт
                            </Link>
                            <Link className="auth-logout" onClick={props.logOut} to="/login">
                                <i class="fa fa-sign-out"></i>Вийти
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link className="auth-login" to="/login">
                                Увійти в кабінет
                            </Link>
                            <Link className="auth-sign" to="/login">
                                Зареєструватись
                            </Link>
                        </>
                    )}
                </div>
                <div className="content-top__menu" onClick={props.setHeader}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    );
};

TopHeader.whyDidYouRender = true;
export default React.memo(TopHeader);
