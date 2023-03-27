import React from 'react';
import { 
    brandArea, 
    productSpecificationTitle, 
    productSpecificationList, 
    websitePortfolioList 
} from './data/sitehome';
import { 
    Uppernav, 
    Sitehero, 
    StaticNavMsg, 
    BrandArea, 
    FeaturedSpecs, 
    ProductCarousel, 
    ServiceOfferings, 
    ProductSpecs,
    WebsitePortfolio 
} from '.';
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
        <ProductSpecs productsTitle={productSpecificationTitle} productsList={productSpecificationList}/>
        <WebsitePortfolio portfolios={websitePortfolioList}/>
        </React.Fragment>
    );
}


export default Main;