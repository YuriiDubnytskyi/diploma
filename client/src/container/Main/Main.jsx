import React from "react";
import { Switch, Route } from "react-router-dom";
import Welcome from "../Welcome/Welcome";
import Categorie from "../Categorie/Categorie";
import ProductsList from "../ProductsList/ProductsList";
import ProductInfo from "../ProductInfo/ProductInfo";
import ContactUs from "../ContactUs/ContactUs";
import Login from "../Login/Login";
import Blog from "../Blog/Blog";
import Account from "../Account/Account";
import LikeList from "../LikeList/LikeList";
import BucketList from "../BucketList/BucketList";
import BlogItem from "../BlogItem/BlogItem";
import SearchList from "../SearchList/SearchList";
import BuyProduct from "../BuyProduct/BuyProduct";
import CallbackPage from "../CallbackPage/CallbackPage";

const Main = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Welcome />
            </Route>
            <Route path="/categorie">
                <Categorie />
            </Route>
            <Route path="/productList/:id/:name">
                <ProductsList />
            </Route>
            <Route path="/product/:id/:name/:productName">
                <ProductInfo />
            </Route>
            <Route path="/contact">
                <ContactUs />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/blog">
                <Blog />
            </Route>
            <Route path="/account">
                <Account />
            </Route>
            <Route path="/like">
                <LikeList />
            </Route>
            <Route path="/bucket">
                <BucketList />
            </Route>
            <Route path="/newsID/:id">
                <BlogItem />
            </Route>
            <Route path="/search/:text">
                <SearchList />
            </Route>
            <Route path="/buyProduct">
                <BuyProduct />
            </Route>
            <Route path="/callback/:id">
                <CallbackPage />
            </Route>
        </Switch>
    );
};

Main.whyDidYouRender = true;
export default React.memo(Main);
