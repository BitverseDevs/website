import React from 'react';
import { brandArea } from "./data/siteHome";
import { Uppernav, Sitehero, StaticNavMsg, BrandArea, FeaturedSpecs } from '.';
import './main.scss';


export function Main() {
    return (
        <React.Fragment>
        <StaticNavMsg/>
        <Uppernav/>
        <Sitehero/>
        <BrandArea brands={brandArea}/>
        <FeaturedSpecs/>
        </React.Fragment>
    );
}


export default Main;