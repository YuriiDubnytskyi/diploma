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
        API.get("/user/getProduct/:" + id).then((data) => {
            setData(data.data.data[0]);
            setLoading(false);
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
        if (data.count[0].count === "0") {
            alert("Нажаль товару в наявності немає");
        } else if (user.auth !== true) {
            alert("Ви не Авторизовані");
        } else if (!user.emailVerify) {
            alert("Підтвердіть пошту для здійснення покупок");
        } else {
            const newId = oldId;
            newId.push(id);
            dispatch(addBuyProduct(newId));
        }
    };

    return (
        <>
            <TitlePager title={`${name}--${productName}`} />
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
