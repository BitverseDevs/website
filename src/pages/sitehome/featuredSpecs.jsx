import React, { useEffect, useState } from "react";
import SectionTitle from "./components/sectionTitle/sectionTitle";
import SectionTitleV2 from "./components/sectiontitleV2/sectiontitlev2";
import BorderLine from "./components/borderline/borderline";
import useWindowDimensions from "@/custom-hooks/use-window-dimension/use-window-dimension";
import helpers from "@/helpers/helpers";
import { featuredSpecAssets, sectionTitles } from "./data/sitehome";
import "./featuredSpecs.scss";



export function FeaturedSpecs(props) {
    const {width, height} = useWindowDimensions();
    const [isRender, setIsRender] = useState(undefined);
    const firstAsset = featuredSpecAssets[0]?.assetSrc;
    const secondAsset = featuredSpecAssets[1]?.assetSrc;
    const { featMsg: featMsg1, title: title1, desc: desc1 } = sectionTitles[1];
    const { featMsg: featMsg2, title: title2, desc: desc2 } = sectionTitles[2];
    const { featMsg: featMsg3, title: title3, desc: desc3 } = sectionTitles[3];
    const breakPoint = helpers.websiteBreakpoints(width);
    const shouldRender = helpers.breakpointRender(breakPoint);
    useEffect(()=> {
        setIsRender(shouldRender);
    }, [breakPoint])
    return (
        <React.Fragment>
            <div className="featured-specs-wrap">
                <SectionTitle featMsg={featMsg1} title={title1} desc={desc1} marginBottom={'75'}/>
                <div className='featured-specs-cont' border-render={`${isRender}`}>
                    <figure className='featured-specs-img-wrap'>
                        <img className='featured-specs-img1' src={firstAsset} alt={featuredSpecAssets[0]?.alt}/>
                    </figure>
                    {isRender ? <BorderLine/> : null}
                    <SectionTitleV2 featMsg={featMsg2} title={title2} desc={desc2} isDescUnorderedListed={true}/>
                </div>
                <div className='featured-specs-cont featured-specs-cont2' border-render={`${isRender}`}>
                    {isRender ?
                    <>
                    <div className='featured-specs-cont-title-wrap'>
                        <SectionTitleV2 featMsg={featMsg3} title={title3} desc={desc3} isDescUnorderedListed={false}/>
                    </div>
                    <BorderLine/>
                    </> 
                    : 
                    <SectionTitleV2 featMsg={featMsg3} title={title3} desc={desc3} isDescUnorderedListed={false}/>
                    }
                    <figure className='featured-specs-img-wrap'>
                        <img className='featured-specs-img2' src={secondAsset} alt={featuredSpecAssets[1]?.alt}/>
                    </figure>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FeaturedSpecs;