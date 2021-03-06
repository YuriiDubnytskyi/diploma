import React, { useEffect } from "react";
import "./LikeList.scss";
import "../ProductsList/ProductsList.scss";
import TitlePager from "./../../components/TitlePager/TitlePager";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchGetProductsLike, removeLikeProduct } from "./../../store/actions/actionLike";
import ProductItem from "./../../components/ProductItem/ProductItem";
import { Helmet } from "react-helmet";

const LikeList = () => {
    const productsLike = useSelector((state) => state.productLike);
    const userLikes = useSelector((state) => state.user.user.likeProducts);
    const userId = useSelector((state) => state.user.user.id);

    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        if (userLikes.length !== 0) {
            dispatch(fetchGetProductsLike(userLikes));
        }
    }, []);

    const buyProduct = (one, two) => {
        history.push("/product/" + one + "/FromLike List/" + two);
    };

    const deleteLikeProduct = (id) => {
        const newLike = [...userLikes];
        const arr = newLike.filter((el) => el !== id);
        dispatch(removeLikeProduct(arr, userId));
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Like list</title>
                <meta name="description" content="Список товарів які сподобались вам." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <TitlePager title="Список побажань" />
            {userLikes.length === 0 ? (
                <div className="wish__container wish">
                    <div className="wish__empty wish-empty">
                        <h3 className="wish-empty-title">Ваш список побажань пустий але це можна виправити.</h3>
                        <p className="wish-empty-btn">
                            <Link to="/categorie">Купити Зараз</Link>
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
                                likeProduct={() => deleteLikeProduct(el._id)}
                                buyProduct={() => buyProduct(el._id, el.name)}
                                image={el.imageMain}
                                more={() => history.push("/product/" + el._id + "/FromLike List/" + el.name)}
                                name={el.name}
                                price={el.price}
                                shortInfo={el.shortInfo}
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
