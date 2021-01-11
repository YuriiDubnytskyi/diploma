import React from "react";
import "./TitlePager.scss";

const TitlePager = ({ title }) => {
    return (
        <div className="title__wrapper title-wrapper">
            <p className="title-text">{title}</p>
        </div>
    );
};

TitlePager.whyDidYouRender = true;
export default React.memo(TitlePager);
