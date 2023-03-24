import React from 'react';
import { brandArea } from './data/sitehome';
import { Uppernav, Sitehero, StaticNavMsg, BrandArea, FeaturedSpecs, ProductCarousel, ServiceOfferings } from '.';
import './main.scss';


export function Main() {
    return (
        <React.Fragment>
        <StaticNavMsg/>
        <Uppernav/>
        <Sitehero/>
        <BrandArea brands={brandArea}/>
        <FeaturedSpecs/>
        <ProductCarousel/>
        <ServiceOfferings/>
        </React.Fragment>
    );
}


export default Main;