import React, { useEffect, useState } from "react";
import Slider from "./../../components/Slider/Slider";
import API from "./../../API/API";
import "./CategorieTitle.scss";
import CategoriTitleItem from "./../../components/CategoriTitleItem/CategoriTitleItem";

const CategorieTitle = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        API.get("/user/getProductTitle").then((data) => {
            setData(data.data.data);
            setLoading(false);
        });
    }, []);

    return (
        <div className="categories__wrapper categories-wrapper">
            <div className="categories__list categories-list">
                {loading ? (
                    <Slider />
                ) : data.length == 0 ? (
                    <></>
                ) : (
                    data.map((el) => (
                        <CategoriTitleItem key={el._id} idProductTitle={el._id} productTitle={el.productTitle} />
                    ))
                )}
            </div>
        </div>
    );
};

CategorieTitle.whyDidYouRender = true;
export default React.memo(CategorieTitle);
