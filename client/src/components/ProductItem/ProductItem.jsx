import React from "react";
import "./ProductItem.scss";
import LazyLoad from "react-lazyload";

const ProductItem = ({ isLike, likeProduct, buyProduct, image, more, name, price }) => {
    return (
        <div className="productslist__item productslist-item">
            <div className="productslist-item__img">
                <div className="productslist-item__img-container">
                    {isLike ? (
                        <i className="fa fa-trash productslist-item-delete" onClick={likeProduct}></i>
                    ) : (
                        <i className="fa fa-heart productslist-item-like" onClick={likeProduct}></i>
                    )}
                    <LazyLoad height={200}>
                        <img className="productslist-item-img" src={image} />
                    </LazyLoad>
                    <i className="fa fa-shopping-basket productslist-item-buy" onClick={buyProduct}></i>
                </div>
            </div>
            <div onClick={more}>
                <p className="productslist-item-name">{name}</p>
                <p className="productslist-item-price">Price -- {price}</p>
            </div>
        </div>
    );
};

ProductItem.whyDidYouRender = true;
export default React.memo(ProductItem);
