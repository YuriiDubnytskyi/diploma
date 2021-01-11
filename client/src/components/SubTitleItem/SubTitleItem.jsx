import React from "react";
import { Link } from "react-router-dom";
import "./SubTitleItem.scss";

const SubTitleItem = ({ idProductSubTitle, productSubTitle }) => {
    return (
        <div className="sub__item sub-item">
            <p className="sub-item-text">
                <Link className="sub-item-link" to={`/productList/${idProductSubTitle}/${productSubTitle}`}>
                    {productSubTitle}
                </Link>
            </p>
        </div>
    );
};

SubTitleItem.whyDidYouRender = true;
export default React.memo(SubTitleItem);
