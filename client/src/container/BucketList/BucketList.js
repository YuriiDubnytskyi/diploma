import React, { useEffect } from 'react'
import './BucketList.css'
import TitlePager from './../../components/TitlePager/TitlePager'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchGetProductsBucket, addPlusProductBucket, addMinusProductBucket } from './../../store/actions/actionBucket'
import BucketItem from './../../components/BucketItem/BucketItem'

const BucketList = () => {

    const productsBucket = useSelector(state => state.productBucket)
    const userBucket = useSelector(state => state.user.user.bucketProducts)
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        if (userBucket.length !== 0) {
            dispatch(fetchGetProductsBucket(userBucket))
        }
    }, [])

    return (
        <>
            <TitlePager title='BucketList' />
            {userBucket.length === 0 ?
                <div className='bucket__container bucket'>
                    <div className='bucket__empty bucket-empty'>
                        <h3 className='bucket-empty-title'>
                            Your wish list is currently empty.
                    </h3>
                        <p className='bucket-empty-btn'><Link to='/categorie'>Shop now</Link></p>
                    </div>
                </div>
                :
                productsBucket.productsBucket.length === 0 ? <></> :
                    <div className='bucket__list bucket-list'>
                        <div className='bucet-list__container'>
                            {productsBucket.productsBucket.map((el, i) =>
                                <BucketItem key={el._id}
                                    img={el.image}
                                    name={el.name}
                                    price={el.price}
                                    plus={() => dispatch(addPlusProductBucket(el.idProduct))}
                                    minus={() => dispatch(addMinusProductBucket(el.idProduct))}
                                    count={el.count}
                                />
                            )}
                        </div>
                        <div className='total__container'>
                            <div className='bucket-list__total'>Загальна ціна становить -- {productsBucket.totalPrice}</div>
                            <button className='bucket-list__buy-btn' onClick={() => history.push('/buyProduct')}>Купити</button>
                        </div>
                    </div>
            }
        </>
    )
}

BucketList.whyDidYouRender = true
export default React.memo(BucketList)