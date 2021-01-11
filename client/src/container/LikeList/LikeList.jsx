import React, { useEffect } from "react";
import "./LikeList.css";
import TitlePager from "./../../components/TitlePager/TitlePager";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchGetProductsLike } from "./../../store/actions/actionLike";
import ProductItem from "./../../components/ProductItem/ProductItem";

const LikeList = () => {
    const productsLike = useSelector((state) => state.productLike);
    const userLikes = useSelector((state) => state.user.user.likeProducts);

    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        if (userLikes.length !== 0) {
            dispatch(fetchGetProductsLike(userLikes));
        }
    }, []);

    const buyProduct = (one, two) => {
        history.push("/product/:" + one + "/FromLike List/:" + two);
    };

    return (
        <>
            <TitlePager title="WishList" />
            {userLikes.length === 0 ? (
                <div className="wish__container wish">
                    <div className="wish__empty wish-empty">
                        <h3 className="wish-empty-title">Your wish list is currently empty.</h3>
                        <p className="wish-empty-btn">
                            <Link to="/categorie">Shop now</Link>
                        </p>
                    </div>
                </div>
            ) : (
                <div className="productslist__wrapper productslist-wrapper">
                    <div className="productslist__list productslist-list">
                        {productsLike.productsLike.map((el) => (
                            <ProductItem
                                key={el._id}
                                isLike={true}
                                likeProduct={false}
                                buyProduct={() => buyProduct(el.idProduct, el.name)}
                                image={el.image}
                                more={() => history.push("/product/:" + el.idProduct + "/FromLike List/:" + el.name)}
                                name={el.name}
                                price={el.price}
                            />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

LikeList.whyDidYouRender = true;
export default React.memo(LikeList);
