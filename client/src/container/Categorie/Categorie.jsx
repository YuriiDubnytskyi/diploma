import React from "react";
import TitlePager from "../../components/TitlePager/TitlePager";
import { Switch, Route } from "react-router-dom";
import CategorieTitle from "../CategorieTitle/CategorieTitle";
import CategorieSubTitle from "../CategorieSubTitle/CategorieSubTitle";
import { Helmet } from "react-helmet";

const Categorie = () => {
    return (
        <div className="categorie__container categorie-container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Categorie</title>
                <meta name="description" content="Каталог товарів у нашому магазині." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Helmet>
            <TitlePager title="Каталог Товарів" />
            <Switch>
                <Route exact path="/categorie">
                    <CategorieTitle />
                </Route>
                <Route exact path="/categorie/subtitle:id">
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Sub Categorie</title>
                        <meta name="description" content="Під категорії товарів у нашому магазині." />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    </Helmet>
                    <CategorieSubTitle />
                </Route>
            </Switch>
        </div>
    );
};

Categorie.whyDidYouRender = true;
export default React.memo(Categorie);
