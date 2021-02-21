import axios from "axios";

export default axios.create({
    baseURL: `/api/`,
    //baseURL: `${process.env.REACT_APP_SERVER_API}/api/`,
    responseType: "json",
});
