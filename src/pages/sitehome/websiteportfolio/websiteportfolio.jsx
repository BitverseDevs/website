import React from 'react';
import './websiteportfolio.scss';
import { websitePortfolioTitle } from '../data/sitehome';
import SectionTitle from '../components/sectionTitle/sectionTitle';

export function WebsitePortfolio(props) {
    const portfolioArray = Object.values(props.portfolios);
    const {title, desc} = websitePortfolioTitle;
    console.log(portfolioArray, 'meow1');
    return (
        <section className='website-portfolio--section-wrap'>
            {/* <figcaption className='website-portfolio--fig-caption'>
                <h5 className='website-portfolio--section-title'>
                    {title}
                </h5>
                <p className='website-portfolio--section-desc'>
                   {desc}
                </p>
            </figcaption> */}
            <SectionTitle title={title} desc={desc}/>
            <ul className='website-portfolio--figure-section'>
                {portfolioArray.map(({id, src, alt})=>{
                    return (
                        <li className='website-portfolio--figure-wraps' key={id}>
                            <img className='website-portfolio--figure-items' src={src} alt={alt}>
                            </img>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
}

export default WebsitePortfolio;