import React from "react";
import SectionTitle from "./components/sectionTitle/sectionTitle";
import SectionTitleV2 from "./components/sectiontitleV2/sectiontitlev2";
import BorderLine from "./components/borderline/borderline";
import { featuredSpecAssets, sectionTitles } from "./data/sitehome";
import "./featuredSpecs.scss";



export function FeaturedSpecs(props) {
    const firstAsset = featuredSpecAssets[0]?.assetSrc;
    const secondAsset = featuredSpecAssets[1]?.assetSrc;
    const { featMsg: featMsg1, title: title1, desc: desc1 } = sectionTitles[1];
    const { featMsg: featMsg2, title: title2, desc: desc2 } = sectionTitles[2];
    return (
        <React.Fragment>
            <div className="featured-specs-wrap">
                <SectionTitle featMsg={featMsg1} title={title1} desc={desc1} marginBottom={'75'}/>
                <div className='featured-specs-cont1'>
                    <img className='featured-specs-img1' src={firstAsset} alt={featuredSpecAssets[0]?.alt}/>
                    <BorderLine/>
                    <SectionTitleV2 featMsg={featMsg2} title={title2} desc={desc2} isDescUnorderedListed={true}/>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FeaturedSpecs;