import React, { useEffect } from "react";
import BlogListItem from "../../components/BlogListItem/BlogListItem";
import TitlePager from "../../components/TitlePager/TitlePager";
import "./Blog.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetNews, getNewsMore } from "../../store/actions/actionNews";
import Slider from "../../components/Slider/Slider";

const Blog = () => {
    const dispatch = useDispatch();
    const news = useSelector((state) => state.news);
    useEffect(() => {
        if (news.news.length === 0) dispatch(fetchGetNews(news.newsNumber, 1));
    }, []);

    const getMoreNews = () => {
        dispatch(getNewsMore(news.newsNumber + 2));
    };

    return (
        <>
            <TitlePager title="Our Blog" />
            <div className="blog__list blog-list">
                {news.news.length === 0 ? (
                    <></>
                ) : (
                    news.news.map((el) => (
                        <BlogListItem key={el._id} title={el.title} description={el.description} id={el._id} />
                    ))
                )}
                {news.loading ? <Slider /> : <></>}
                <div className={`blog-list__load blog-list-load ${news.maxNumber ? "load-list-max" : ""}`}>
                    <p className="blog-list-load-text" onClick={getMoreNews}>
                        Load More
                    </p>
                </div>
            </div>
        </>
    );
};

Blog.whyDidYouRender = true;
export default React.memo(Blog);
