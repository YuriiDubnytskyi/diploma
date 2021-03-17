import React, { useEffect, useState } from "react";
import "./BlogItem.scss";
import TitlePager from "../../components/TitlePager/TitlePager";
import API from "../../API/API";
import { useParams } from "react-router-dom";

const BlogItem = () => {
    const { id } = useParams();
    const [data, setData] = useState("");

    useEffect(() => {
        API.get("/user/getNewsID/" + id).then((res) => {
            setData(res.data.data);
        });
    }, []);

    return (
        <>
            <TitlePager title={data.title} />
            <div className="blog__container">
                <img className="blog-img" src={data.imageMain} alt={data.title} />
                <p className="blog__info blog-info">{data.fullDescription}</p>
            </div>
        </>
    );
};

BlogItem.whyDidYouRender = true;
export default React.memo(BlogItem);
