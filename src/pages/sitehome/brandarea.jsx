import React from "react";
import SectionTitle from "./components/sectionTitle";
import { responsiveBrands, sectionTitles } from "./data/sitehome";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./brandarea.scss";



export function BrandArea(props) {
    const brandArray = Object.values(props.brands);
    const { featMsg, title, desc } = sectionTitles[0];
    const handleDragStart = (e) => e.preventDefault();
    const items2 = brandArray.map(({id, src}) => (
        <img src={src} key={id} onDragStart={handleDragStart} role='presentation'
        >
        </img>
    ));
  return (
    <React.Fragment>
        <SectionTitle featMsg={featMsg} title={title} desc={desc} marginBottom={'40'}/>
        <div className="carousel-wrap">
            <AliceCarousel 
            mouseTracking
            // autoWidth
            // autoHeight
            autoPlay
            infinite
            autoPlayInterval = {4500}
            animationDuration = {1000}
            disableDotsControls
            disableButtonsControls 
            items={items2} 
            responsive={responsiveBrands}
            />
        </div>
    </React.Fragment>
  );
}

export default BrandArea;