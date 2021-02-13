import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "./../../components/Slider/Slider";
import API from "./../../API/API";
import "./CategorieSubTitle.scss";
import { clearProductList } from "./../../store/actions/actionList";
import { useDispatch } from "react-redux";
import SubTitleItem from "./../../components/SubTitleItem/SubTitleItem";

const CategorieSubTitle = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);
        dispatch(clearProductList());
        API.get("/user/getProductsSubtitle/" + id).then((data) => {
            setData(data.data.data);
            setLoading(false);
            console.log(data);
        });
    }, []);

    return (
        <div className="sub__wrapper sub-wrapper">
            <div className="sub__list sub-list">
                {loading ? (
                    <Slider />
                ) : data.length == 0 ? (
                    <></>
                ) : (
                    data.map((el) => (
                        <SubTitleItem key={el._id} idProductSubTitle={el._id} productSubTitle={el.productSubTitle} />
                    ))
                )}
            </div>
        </div>
    );
};

CategorieSubTitle.whyDidYouRender = true;
export default React.memo(CategorieSubTitle);
