import React,{useEffect} from "react";
import "./AccountOrders.scss";

import { Link } from "react-router-dom";

const AccountOrders = ({ data }) => {
    useEffect(()=>{
        console.log('account orders render')
        return () =>{
            console.log('account orders unmount')
        }
    })
    return (
        <div className="order account__order">
            <div className="order-box">
                <h3 className="order-title">Orders list</h3>
            </div>
            <div className="order__list order-list">
                {data === false ? (
                    <div className="order__empty">
                        <p className="order-empty">You do not buy nothing</p>
                    </div>
                ) : (
                    data.map((el) => (
                        <div className="order-item" key={el._id}>
                            <p className="order-time">You buy it on {el.time}</p>
                            {el.product.map((pr) => (
                                <div className="order-product" key={pr.idProduct}>
                                    <p className="order-name">You buy {pr.name}</p>
                                    <p className="order-count">Count {pr.count}</p>
                                    <p className="order-price">Price {pr.price * pr.count}</p>
                                    <p className="order-link">
                                        <Link to={`/product/:${pr.idProduct}/:FromOrderList/:${pr.name}`}>More</Link>
                                    </p>
                                </div>
                            ))}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

AccountOrders.whyDidYouRender = true;
export default React.memo(AccountOrders);
