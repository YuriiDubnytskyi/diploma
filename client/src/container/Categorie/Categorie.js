import React from 'react'
import TitlePager from '../../components/TitlePager/TitlePager'
import {Switch,Route,} from 'react-router-dom'
import CategorieTitle from './../CategorieTitle/CategorieTitle'
import CategorieSubTitle from './../CategorieSubTitle/CategorieSubTitle'

const Categorie = () => {
    return (
        <div className='categorie__container categorie-container'>
            <TitlePager title='Welcome to our Catalog'/>
            <Switch>
                <Route exact path="/categorie">
                    <CategorieTitle />   
                </Route>
                <Route exact path="/categorie/subtitle:id">
                    <CategorieSubTitle />   
                </Route>
            </Switch>
        </div>
    )
}

Categorie.whyDidYouRender = true
export default React.memo(Categorie)