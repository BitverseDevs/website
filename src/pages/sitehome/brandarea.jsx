import React, { useState, useEffect, useRef } from "react";
import { brandArea } from "./data/brandarea";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./brandarea.scss";

export function BrandArea(brands) {
    const brandArray = Object.values(brands.brands);
    const handleDragStart = (e) => e.preventDefault();
    const responsive = {
        0: {
            items: 2,
        },
        575:{
            items: 3,
        },
        767:{
            items: 4,
        },
        991:{
            items: 5,
        },
        1200:{
            items: 6,
        }
    };
    const items2 = brandArray.map(({id, src}) => (
        <img src={src} key={id} onDragStart={handleDragStart} role='presentation'
        >
        </img>
    ))
  return (
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
        responsive={responsive}
        />
    </div>
    
  );
}

export default BrandArea;