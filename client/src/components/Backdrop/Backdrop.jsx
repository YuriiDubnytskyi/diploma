import React from "react";
import "./Backdrop.css";

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.click} />;
};

Backdrop.whyDidYouRender = true;
export default React.memo(Backdrop);
