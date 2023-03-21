import React from "react";
import SectionTitle from "./components/sectionTitle/sectionTitle";
import { responsiveBrands, sectionTitles } from "./data/siteHome";
import "./featuredSpecs.scss";



export function FeaturedSpecs(props) {
    const { featMsg, title, desc } = sectionTitles[1];
    return (
        <React.Fragment>
            <div className="featured-specs-wrap">
                <SectionTitle featMsg={featMsg} title={title} desc={desc} marginBottom={'75'}/>
                <img src='/website/assets/bv-asset/xchart-03.png'></img>
            </div>
        </React.Fragment>
    );
}

export default FeaturedSpecs;