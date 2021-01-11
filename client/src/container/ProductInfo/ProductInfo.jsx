import React, { useState, useEffect } from "react";
import "./ProductInfo.scss";
import { useParams } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import API from "../../API/API";
import TitlePager from "../../components/TitlePager/TitlePager";
import { fetchAddLikeProduct, addBuyProduct } from "../../store/actions/actionsUser";
import { useDispatch, useSelector } from "react-redux";
import ProductInfoContent from "../../components/ProductInfoContent/ProductInfoContent";

const ProductInfo = () => {
    const { id, name, productName } = useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        setLoading(true);
        API.get("/user/getProduct/" + id).then((data) => {
            setData(data.data.data[0]);
            setLoading(false);
            console.log(data.data.data[0]);
        });
    }, []);

    const likeProduct = (id, oldId) => {
        if (user.auth) {
            const newId = oldId;
            newId.push(id);
            dispatch(fetchAddLikeProduct(user.id, newId));
        } else {
            alert("You do not autorizate");
        }
    };

    const addBuy = (id, oldId) => {
        console.log(123);
        if (data.count[0].count === "0") {
            alert("We dont have this product");
        } else if (user.auth !== true) {
            alert("You do not auth");
        } else {
            const newId = oldId;
            newId.push(id);
            dispatch(addBuyProduct(newId));
        }
    };

    return (
        <>
            <TitlePager title={`${name.slice(1)}--${productName.slice(1)}`} />
            <div className="product__wrapper product-wrapper">
                {loading ? (
                    <Slider />
                ) : data.length === 0 ? (
                    <></>
                ) : (
                    <ProductInfoContent data={data} likeProduct={likeProduct} addBuy={addBuy} user={user} />
                )}
            </div>
        </>
    );
};

ProductInfo.whyDidYouRender = true;
export default React.memo(ProductInfo);
