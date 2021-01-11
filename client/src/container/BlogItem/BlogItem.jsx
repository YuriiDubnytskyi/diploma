import React, { useEffect, useState } from "react";
import "./BlogItem.scss";
import TitlePager from "../../components/TitlePager/TitlePager";
import API from "../../API/API";
import { useParams } from "react-router-dom";

const BlogItem = () => {
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        API.get("/user/getNewsID/" + id).then((res) => {
            setTitle(res.data.data.title);
            setDescription(res.data.data.description);
        });
    }, []);

    return (
        <>
            <TitlePager title={title} />
            {description}
        </>
    );
};

BlogItem.whyDidYouRender = true;
export default React.memo(BlogItem);
