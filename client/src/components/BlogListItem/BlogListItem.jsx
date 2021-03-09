import React from "react";
import "./BlogListIte.scss";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const BlogListItem = ({ title, description, id, time, imgSrc }) => {
    const history = useHistory();
    return (
        <div className="blog__item blog-item">
            <figure class="snip1527">
                <div class="image">
                    <img src={imgSrc} alt={title} />
                </div>
                <figcaption>
                    <div class="date">
                        <span class="day">{new Date(time).getDate()}</span>
                        <span class="month">{new Date(time).getMonth() + 1}</span>
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </figcaption>
                <Link to={`/newsID/${id}`}></Link>
            </figure>
            {/* <div className="blog-item-image"></div>
            <div className="blog-item-info item-info" onClick={() => history.push("/newsID/" + id)}>
                <h3 className="item-info-title">{title}</h3>
                <p className="item-info-description">
                    {description}
                    Description Description Description Description Description Description Description Description
                    Description Description Description Description Description Description Description Description
                    Description Description Description Description
                </p>
            </div> */}
        </div>
    );
};

BlogListItem.whyDidYouRender = true;
export default React.memo(BlogListItem);
