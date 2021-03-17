import React from "react";
import "./BucketItem.scss";

const BucketItem = ({ img, name, price, count, plus, minus, key, deleteItem }) => {
    return (
        <div className="bucket-list__item item-bucket" key={key}>
            <img src={img} />
            <div className="item-bucket__info">
                <h3 className="item-bucket__title">Назва товару - {name}</h3>
                <p className="item-bucket__price">Ціна - {price}</p>
            </div>
            <div className="item-bucket__btn">
                <button className="btn-bucket" onClick={plus}>
                    +
                </button>
                <button className="btn-bucket">{count}</button>
                <button className="btn-bucket" onClick={minus}>
                    -
                </button>
                <button className="btn-bucket" onClick={deleteItem}>
                    X
                </button>
            </div>
        </div>
    );
};

BucketItem.whyDidYouRender = true;
export default React.memo(BucketItem);
