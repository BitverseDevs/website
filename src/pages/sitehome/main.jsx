import React from 'react';
import { brandArea } from "./data/brandarea";
import { Uppernav, Sitehero, StaticNavMsg, BrandArea } from '.';
import './main.scss';


export function Main() {
    return (
        <React.Fragment>
        <StaticNavMsg/>
        <Uppernav/>
        <Sitehero/>
        <BrandArea brands={brandArea}/>
        </React.Fragment>
    );
}


export default Main;