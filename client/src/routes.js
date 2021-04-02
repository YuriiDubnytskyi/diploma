import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const Routes = () => {
    return (
        <Switch>
            <Route path="/" />
            <Route path="/categorie" />
            <Route path="/productList/:id/:name" />
            <Route path="/product/:id/:name/:productName" />
            <Route path="/categorie" />
            <Route path="/categorie/subtitle:id" />
            <Route path="/contact" />
            <Route path="/login" />
            <Route path="/blog" />
            <Route path="/account" />
            <Route path="/like" />
            <Route path="/bucket" />
            <Route path="/newsID/:id" />
            <Route path="/search/:text" />
            <Route path="/buyProduct" />
            <Route path="/callback/:id" />
        </Switch>
    );
};
export default Routes;
