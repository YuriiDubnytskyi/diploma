import React from "react";
import { Link } from "react-router-dom";
import "./CategoriTitleItem.css";

const CategoriTitleItem = ({ idProductTitle, productTitle }) => {
    return (
        <div className="categories__item categorie-item">
            <p className="categories-item-text">
                <Link className="categories-item-link" to={`/categorie/subtitle:${idProductTitle}`}>
                    {productTitle}
                </Link>
            </p>
        </div>
    );
};

CategoriTitleItem.whyDidYouRender = true;
export default React.memo(CategoriTitleItem);
