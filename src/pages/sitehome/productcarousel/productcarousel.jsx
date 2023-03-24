import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import './productcarousel.scss';
import 'react-alice-carousel/lib/alice-carousel.css';
import { responsiveBrands, productCarouselHome } from '../data/sitehome';
// import ProductItems from './product-items/productitems';
import SectionTitleV2 from '../components/sectiontitleV2/sectiontitlev2';
import useWindowDimensions from '@/custom-hooks/use-window-dimension/use-window-dimension';
import helpers from '@/helpers/helpers';


const renderDotsItem = (item) => {
    // const label = item.activeIndex + 1;
    const isActive = item.isActive;
    const labelStyle = {
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? 'blue' : 'black',
      marginRight: '10px',
      cursor: 'pointer',
      fontFamily: 'Poppins-SemiBold',
    };
    return (
      <div style={labelStyle}>
        {productCarouselHome[item.activeIndex]?.sectionTitle.title}
      </div>
    );
  };

export const ProductCarousel = () => {
    const {width, height} = useWindowDimensions();
    const [isRender, setIsRender] = useState(undefined);
    const breakPoint = helpers.websiteBreakpoints(width);
    const shouldRender = helpers.breakpointRender(breakPoint);
    const customShouldRender = helpers.breakpointRender(breakPoint, {BP_3: true});
    useEffect(()=> {
        setIsRender(customShouldRender);
    }, [breakPoint]);

    const adjPadding = (key) => {
        const paddingProcessor = {
            'BP_1': 0,
            'BP_2': 0,
            'BP_3': 0,
            'default': 0,
        };
        return paddingProcessor[key] ?? paddingProcessor['default'];
    };

    const productItemsArray = productCarouselHome.map((product)=> { 
        return (
            <section className='product-carousel--main-container' draggable='false' style={{ flexDirection: !shouldRender ? 'column' : ''}}>
                <figcaption className='product-carousel--container-caption'>
                    <SectionTitleV2 featMsg={product.sectionTitle.featMsg} title={product.sectionTitle.title} desc={product.sectionTitle.desc}/>
                    <button className='hero-left-content-action-item-call'>
                        <a href={product.srcLink}>
                            {product.srcTitle}
                        </a>
                    </button>
                </figcaption>
                { isRender ? 
                <figure className='product-carousel--container-img' data-value="2" style={{marginRight: '40px', paddingLeft: '5px'}}>
                    <img src={product.img} alt={product.imgAlt} draggable='false'>
                    </img>
                </figure>
                :
                null
                }
            </section>
        );
    });


    return (
        <React.Fragment>
            <section className='product-carousel--section'>
                <AliceCarousel
                infinite
                animationDuration={800}
                disableButtonsControls
                items={productItemsArray}
                mouseTracking
                renderDotsItem={renderDotsItem}
                paddingLeft={adjPadding(breakPoint)}
                />
            </section>
        </React.Fragment>
    )
};


export default ProductCarousel;
