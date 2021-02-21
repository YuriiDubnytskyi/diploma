import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
// import Welcome from "../Welcome/Welcome";
// import Categorie from "../Categorie/Categorie";
// import ProductsList from "../ProductsList/ProductsList";
// import ProductInfo from "../ProductInfo/ProductInfo";
// import ContactUs from "../ContactUs/ContactUs";
// import Login from "../Login/Login";
// import Blog from "../Blog/Blog";
// import Account from "../Account/Account";
// import LikeList from "../LikeList/LikeList";
// import BucketList from "../BucketList/BucketList";
// import BlogItem from "../BlogItem/BlogItem";
// import SearchList from "../SearchList/SearchList";
// import BuyProduct from "../BuyProduct/BuyProduct";
// import CallbackPage from "../CallbackPage/CallbackPage";
const Welcome = React.lazy(() => import("../Welcome/Welcome"));
const Categorie = React.lazy(() => import("../Categorie/Categorie"));
const ProductsList = React.lazy(() => import("../ProductsList/ProductsList"));
const ProductInfo = React.lazy(() => import("../ProductInfo/ProductInfo"));
const ContactUs = React.lazy(() => import("../ContactUs/ContactUs"));
const Login = React.lazy(() => import("../Login/Login"));
const Blog = React.lazy(() => import("../Blog/Blog"));
const Account = React.lazy(() => import("../Account/Account"));
const LikeList = React.lazy(() => import("../LikeList/LikeList"));
const BucketList = React.lazy(() => import("../BucketList/BucketList"));
const BlogItem = React.lazy(() => import("../BlogItem/BlogItem"));
const SearchList = React.lazy(() => import("../SearchList/SearchList"));
const BuyProduct = React.lazy(() => import("../BuyProduct/BuyProduct"));
const CallbackPage = React.lazy(() => import("../CallbackPage/CallbackPage"));
import Slider from "./../../components/Slider/Slider";

const Main = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Suspense fallback={Slider}>
                    <Welcome />
                </Suspense>
            </Route>
            <Route path="/categorie">
                <Suspense fallback={Slider}>
                    <Categorie />
                </Suspense>
            </Route>
            <Route path="/productList/:id/:name">
                <Suspense fallback={Slider}>
                    <ProductsList />
                </Suspense>
            </Route>
            <Route path="/product/:id/:name/:productName">
                <Suspense fallback={Slider}>
                    <ProductInfo />
                </Suspense>
            </Route>
            <Route path="/contact">
                <Suspense fallback={Slider}>
                    <ContactUs />
                </Suspense>
            </Route>
            <Route path="/login">
                <Suspense fallback={Slider}>
                    <Login />
                </Suspense>
            </Route>
            <Route path="/blog">
                <Suspense fallback={Slider}>
                    <Blog />
                </Suspense>
            </Route>
            <Route path="/account">
                <Suspense fallback={Slider}>
                    <Account />
                </Suspense>
            </Route>
            <Route path="/like">
                <Suspense fallback={Slider}>
                    <LikeList />
                </Suspense>
            </Route>
            <Route path="/bucket">
                <Suspense fallback={Slider}>
                    <BucketList />
                </Suspense>
            </Route>
            <Route path="/newsID/:id">
                <Suspense fallback={Slider}>
                    <BlogItem />
                </Suspense>
            </Route>
            <Route path="/search/:text">
                <Suspense fallback={Slider}>
                    <SearchList />
                </Suspense>
            </Route>
            <Route path="/buyProduct">
                <Suspense fallback={Slider}>
                    <BuyProduct />
                </Suspense>
            </Route>
            <Route path="/callback/:id">
                <Suspense fallback={Slider}>
                    <CallbackPage />
                </Suspense>
            </Route>
        </Switch>
    );
};

Main.whyDidYouRender = true;
export default React.memo(Main);
