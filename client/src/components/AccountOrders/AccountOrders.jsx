import React from "react";
import "./AccountOrders.scss";

import { Link } from "react-router-dom";

const AccountOrders = ({ data, cancelBuy, returnBuy }) => {
    return (
        <div className="order account__order">
            <div className="order-box">
                <h3 className="order-title">Список покупок</h3>
            </div>
            <div className="order__list order-list">
                {data === false ? (
                    <div className="order__empty">
                        <p className="order-empty">Ви нічого ще не купили</p>
                    </div>
                ) : (
                    data.map((el) => (
                        <div className="order-item" key={el._id}>
                            <p className="order-time">
                                Час покупки{" "}
                                {`${new Date(el.time).getHours()}:
                                ${new Date(el.time).getMinutes()} -   
                                ${new Date(el.time).getDate()}:
                                ${new Date(el.time).getMonth() + 1}: 
                                ${new Date(el.time).getFullYear()}`}
                            </p>
                            <p className="order-status">Статус покупки {el.status}</p>
                            {el.product.map((pr) => (
                                <div className="order-product" key={pr.idProduct}>
                                    <p className="order-name">Ви купили {pr.name}</p>
                                    <p className="order-count">Кількість {pr.count}</p>
                                    <p className="order-price">Ціна {pr.price * pr.count}</p>
                                    <p className="order-link">
                                        <Link to={`/product/${pr._id}/Здійснена покупка/${pr.name}`}>
                                            Дутальніше про продукт
                                        </Link>
                                    </p>
                                </div>
                            ))}
                            {el.status === "Success" ? (
                                <p className="order-btn" onClick={() => returnBuy(el.product, el._id)}>
                                    Повернути повар
                                </p>
                            ) : el.status === "Pending" ? (
                                <p className="order-btn" onClick={() => cancelBuy(el.product, el._id)}>
                                    Скасувати покупку
                                </p>
                            ) : (
                                <></>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

AccountOrders.whyDidYouRender = true;
export default React.memo(AccountOrders);
