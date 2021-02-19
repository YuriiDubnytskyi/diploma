import React, { useEffect } from "react";
import "./ProductsList.scss";
import { useParams, useHistory } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import TitlePager from "../../components/TitlePager/TitlePager";
import { useSelector, useDispatch } from "react-redux";
import { fetchGetProductList } from "../../store/actions/actionList";
import { fetchAddLikeProduct } from "../../store/actions/actionsUser";
import ProductItem from "../../components/ProductItem/ProductItem";

const ProductsList = () => {
    const { id, name } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.productList);
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        if (data.products.length === 0) dispatch(fetchGetProductList(id));
    }, []);

    const likeProduct = (id) => {
        if (user.auth) {
            const newId = user.likeProducts;
            newId.push(id);
            dispatch(fetchAddLikeProduct(user.id, newId));
        } else {
            alert("You do not autorizate");
        }
    };
    const buyProduct = (one, two) => {
        history.push("/product/" + one + "/" + name + "/" + two);
    };

    return (
        <>
            <TitlePager title={name} />
            <div className="productslist__wrapper productslist-wrapper">
                <div className="productslist__list productslist-list">
                    {data.loading ? (
                        <Slider />
                    ) : data.products.length == 0 ? (
                        <></>
                    ) : (
                        data.products.map((el) => (
                            <ProductItem
                                key={el._id}
                                isLike={false}
                                likeProduct={() => likeProduct(el._id)}
                                buyProduct={() => buyProduct(el._id, el.name)}
                                image={el.imageMain}
                                more={() => history.push("/product/" + el._id + "/" + name + "/" + el.name)}
                                name={el.name}
                                price={el.price}
                            />
                        ))
                    )}
                </div>
            </div>
        </>
    );
};

ProductsList.whyDidYouRender = true;
export default React.memo(ProductsList);
