import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import TitlePager from "../../components/TitlePager/TitlePager";
import { useSelector, useDispatch } from "react-redux";
import { fetchAddLikeProduct } from "../../store/actions/actionsUser";
import ProductItem from "../../components/ProductItem/ProductItem";

const SearchList = () => {
    const { text } = useParams();
    const history = useHistory();
    const data = useSelector((state) => state.productList);
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

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
        history.push("/product/" + one + "/Search/" + two);
    };

    return (
        <>
            <TitlePager title={`Search -- ${text}`} />
            <div className="productslist__wrapper productslist-wrapper">
                <div className="productslist__list productslist-list">
                    {data.loadingList ? (
                        <Slider />
                    ) : data.productsSearch.length == 0 ? (
                        <></>
                    ) : (
                        data.productsSearch.map((el) => (
                            <ProductItem
                                key={el._id}
                                isLike={false}
                                likeProduct={() => likeProduct(el._id)}
                                buyProduct={() => buyProduct(el._id, el.name)}
                                image={el.imageMain}
                                more={() => history.push("/product/" + el._id + "/" + text + "/" + el.name)}
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

SearchList.whyDidYouRender = true;
export default React.memo(SearchList);
