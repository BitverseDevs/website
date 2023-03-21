import React from 'react';
import { upperNavData } from './data/sitehome';
import './uppernav.scss';


export function Uppernav() {
    return (
        <React.Fragment>
        <div className='uppernav-wrap'>
            <div className='uppernav-logo'>
                <img src='/website/assets/bv-asset/bitverse-logo-darkblue-blue.png'/>
            </div>
            <div className='uppernav-navItems'>
                <p>{upperNavData.nav1}</p>
                <p>{upperNavData.nav2}</p>
                <p>{upperNavData.nav3}</p>
                <p>{upperNavData.nav4}</p>
            </div>
            <button className='uppernav-button'>
                {upperNavData.button}
            </button>
        </div>
        </React.Fragment>
    );
}


export default Uppernav;