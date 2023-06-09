import React from 'react';
import { 
    brandArea, 
    productSpecificationTitle, 
    productSpecificationList, 
    websitePortfolioList ,
    callToActionTitle,
    footerList,
} from '../../data/sitehome';
import { footerBg } from '@/data';
import { 
    Uppernav, 
    Sitehero, 
    StaticNavMsg, 
    BrandArea, 
    FeaturedSpecs, 
    ProductCarousel, 
    ServiceOfferings, 
    ProductSpecs,
    WebsitePortfolio,
    CallToAction,
} from '.';
import ParticleBg from '../ui/particlebg';
import FooterV1 from '../footer/footerv1';
import './main.scss';


export function Main() {
    return (
        <React.Fragment>
            <summary className='main-site-home--page-wrap'>
                <StaticNavMsg/>
                <Uppernav/>
                <Sitehero/>
                {/* <> */}
                    <ParticleBg/>
                    <BrandArea brands={brandArea}/>
                    <FeaturedSpecs/>
                    <ProductCarousel/>
                    <ServiceOfferings/>
                    <ProductSpecs productsTitle={productSpecificationTitle} productsList={productSpecificationList}/>
                    <WebsitePortfolio portfolios={websitePortfolioList}/>
                {/* </> */}
                <CallToAction data={callToActionTitle}/>
                <FooterV1 footerList={footerList} footerBg={footerBg}/>
            </summary>
        </React.Fragment>
    );
}


export default Main;