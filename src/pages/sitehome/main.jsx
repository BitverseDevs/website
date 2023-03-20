import React from 'react';
import { Uppernav, Sitehero, StaticNavMsg } from '.';
import './main.scss';


export function Main() {
    return (
        <React.Fragment>
        <StaticNavMsg/>
        <Uppernav/>
        <Sitehero/>
        </React.Fragment>
    );
}


export default Main;