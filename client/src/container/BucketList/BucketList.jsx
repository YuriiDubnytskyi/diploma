import React, { useEffect } from "react";
import "./BucketList.scss";
import TitlePager from "../../components/TitlePager/TitlePager";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    fetchGetProductsBucket,
    addPlusProductBucket,
    addMinusProductBucket,
    deleteProductBucket,
} from "../../store/actions/actionBucket";
import { deleteProductUser } from "../../store/actions/actionsUser";
import BucketItem from "../../components/BucketItem/BucketItem";

const BucketList = () => {
    const productsBucket = useSelector((state) => state.productBucket);
    const userBucket = useSelector((state) => state.user.user.bucketProducts);
    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        if (userBucket.length !== 0) {
            dispatch(fetchGetProductsBucket(userBucket));
        }
    }, []);

    const deleteItem = (id) => {
        dispatch(deleteProductUser(id));
        dispatch(deleteProductBucket(id));
    };

    return (
        <>
            <TitlePager title="Кошик" />
            {userBucket.length === 0 ? (
                <div className="bucket__container bucket">
                    <div className="bucket__empty bucket-empty">
                        <h3 className="bucket-empty-title">Ваш кошик пустий але це не біда.</h3>
                        <p className="bucket-empty-btn">
                            <Link to="/categorie">Купити Зараз</Link>
                        </p>
                    </div>
                </div>
            ) : productsBucket.productsBucket.length === 0 ? (
                <></>
            ) : (
                <div className="bucket__list bucket-list">
                    <div className="bucet-list__container">
                        {productsBucket.productsBucket.map((el) => (
                            <BucketItem
                                key={el._id}
                                img={el.imageMain}
                                name={el.name}
                                price={el.price}
                                plus={() => dispatch(addPlusProductBucket(el._id))}
                                minus={() => dispatch(addMinusProductBucket(el._id))}
                                count={el.count}
                                deleteItem={() => deleteItem(el._id)}
                            />
                        ))}
                    </div>
                    <div className="total__container">
                        <div className="bucket-list__total">Загальна ціна становить -- {productsBucket.totalPrice}</div>
                        <div className="bucket-list__delivery">Ціна доставки за цінами перевізника</div>
                        <button className="bucket-list__buy-btn" onClick={() => history.push("/buyProduct")}>
                            Купити
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

BucketList.whyDidYouRender = true;
export default React.memo(BucketList);
