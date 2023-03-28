import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import './serviceofferings.scss';
import 'react-alice-carousel/lib/alice-carousel.css';
import { serviceOfferingsHome } from '../data/sitehome';
import SectionTitleV2 from '../components/sectiontitleV2/sectiontitlev2';

const renderDotsItem = (item) => {
    const isActive = item.isActive;
    return (
      <div className={'service-offerings--data-style'} data-style={isActive}>
        <a className='service-offerings--data-text'>
            <span className='service-offerings--data-icon'>
                <svg className={'service-offerings--data-svg'}width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.3 0.1H6.7C6.81046 0.1 6.9 0.189543 6.9 0.3V3.7C6.9 3.81046 6.81046 3.9 6.7 3.9H0.3C0.189543 3.9 0.1 3.81046 0.1 3.7V0.3C0.1 0.189543 0.189543 0.1 0.3 0.1Z" strokeWidth="0.6"/>
                    <path d="M5 5H3.5H2M3.5 4V4.83405" strokeWidth="0.7" strokeLinecap="round"/>
                </svg>
            </span>
            <h6 className='service-offerings--data-title'>{serviceOfferingsHome[item.activeIndex]?.sectionTitle.title}</h6>
        </a>
      </div>
    );
  };

export const ServiceOfferings = () => {

    const productItemsArray = serviceOfferingsHome.map((product)=> { 
        return (
            <section className='service-offerings--main-container' draggable='false'>
                <figcaption className='service-offerings--container-caption'>
                    <SectionTitleV2 featMsg={product.sectionTitle.featMsg} title={product.sectionTitle.title} desc={product.sectionTitle.desc}/>
                    <button className='hero-left-content-action-item-call'>
                        <a href={product.srcLink}>
                            {product.srcTitle}
                        </a>
                    </button>
                </figcaption>
                <figure className='service-offerings--container-img' data-value="2" style={{marginRight: '40px', paddingLeft: '5px'}}>
                    <img src={product.img} alt={product.imgAlt} draggable='false'>
                    </img>
                </figure>
            </section>
        );
    });


    return (
        <React.Fragment>
            <div className='service-offerings--background'>
                <section className='service-offerings--section'>
                    <AliceCarousel
                    animationType='fadeout'
                    infinite
                    animationDuration={100}
                    disableButtonsControls
                    items={productItemsArray}
                    mouseTracking
                    renderDotsItem={renderDotsItem}
                    />
                </section>
            </div>
        </React.Fragment>
    )
};


export default ServiceOfferings;
