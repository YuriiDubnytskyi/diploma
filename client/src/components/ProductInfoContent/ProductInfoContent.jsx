import React from "react";
import "./ProductInfoContent.scss";
// import Imagg from "../../container/ProductGallery/ProductGallery";
const Imagg = React.lazy(() => import("../../container/ProductGallery/ProductGallery"));

const ProductInfoContent = ({ data, addBuy, likeProduct, user }) => {
    return (
        <div className="product__container product-container ">
            <div className="product-img">
                <Imagg images={data.images} />
            </div>
            <div className="product-short-info">
                <h2 className="product-short-info-title">{data.name}</h2>
                <p className="product-short-info-description">{data.shortInfo}</p>
                <hr className="product-short-info-line" />
                <p className="product-short-info-price">Ціна - {data.price}</p>
                <hr className="product-short-info-line" />
                <div className="product-short-info-btn">
                    <p className="product-short-info-buy" onClick={() => addBuy(data.idProduct, user.bucketProducts)}>
                        <i className="fa fa-shopping-bag"></i>додати до кошика
                    </p>
                    <p
                        className="product-short-info-like"
                        onClick={() => likeProduct(data.idProduct, user.likeProducts)}>
                        <i className="fa fa-heart"></i>
                    </p>
                </div>
                <hr className="product-short-info-line" />
                <p className="product-short-info-producer">Країна виробник -- {data.producer}</p>
            </div>
            <div className="product__info">
                <div className="product-info">
                    <h3 className="product-info-title">Опис Товару</h3>
                    <p className="product-info-description">{data.info}</p>
                </div>
                <div className="product-properties">
                    <h3 className="product-info-properties">Характеристики</h3>
                    <div className="product-properties__container">
                        {data.properties.map((el, i) => {
                            return (
                                <div className="product-properties-item" key={i}>
                                    <p className="item-property">{el.property}</p>
                                    <p className="item-value">{el.value}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductInfoContent.whyDidYouRender = true;
export default React.memo(ProductInfoContent);
