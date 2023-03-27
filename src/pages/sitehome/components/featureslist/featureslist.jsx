import React from 'react';
import './featureslist.scss';

function FeaturesList(props) {
    const versionActive = props?.versionName;
    const featuresArray = Object.values(props?.products);
    return (
        <section className='features-list--section-wrap'>
            <ul className='features-list--list-ul'>
                {featuresArray.map(({id, productName, productDesc, srcLink})=>{
                    return(
                        <li className='features-list--list-li' key={id}>
                            <h6 className='features-list--h6-wrap'>
                                <a href={srcLink} className='features-list--content-wrap'>
                                    <span className='features-list--icon-wrap'>
                                        <span className='features-list--svg-wrap'>
                                            <svg className={'features-list--data-svg'}width="7" stroke='#000000' height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.3 0.1H6.7C6.81046 0.1 6.9 0.189543 6.9 0.3V3.7C6.9 3.81046 6.81046 3.9 6.7 3.9H0.3C0.189543 3.9 0.1 3.81046 0.1 3.7V0.3C0.1 0.189543 0.189543 0.1 0.3 0.1Z" strokeWidth="0.6"/>
                                                <path d="M5 5H3.5H2M3.5 4V4.83405" stroke='#000000' strokeWidth="0.7" strokeLinecap="round"/>
                                            </svg>
                                        </span>
                                        <h5 className='features-list--svg-title'>{productName}</h5>
                                    </span>
                                    <span className='features-list--svg-content'>
                                        <p className='features-list--svg-desc' href={srcLink}>
                                            {productDesc} 
                                        </p>
                                    </span>
                                </a>
                            </h6>
                        </li>
                    )
                })}
            </ul>
        </section>
    );
}

export default  FeaturesList;