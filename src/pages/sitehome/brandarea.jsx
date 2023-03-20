import React from "react";
import { brandArea } from "./data/brandarea";
import "./brandarea.scss";


export function BrandArea(brands) {
    const brandArray = Object.values(brands.brands);
    return (
        <React.Fragment>
        <div className="brand-area-wrap">
        {brandArray.map(({ id, src })=>
            (
            <div className="brand-area-item" key={id}>
                <img src={src}></img>
            </div>
        )    
        )}
        </div>
        </React.Fragment>
    );
}


export default BrandArea;