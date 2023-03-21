import React from 'react';
import { borderLine } from '../../data/uiData';
import './borderline.scss';



export function BorderLine() {
    const firstShape = borderLine[0];
    const secondShape = borderLine[1];
    return (
        <React.Fragment>
            <section className='borderline-container'>
                <div className='borderline-line-bg'></div>
                <div className='borderline-content'>
                    <img className='borderline-sh1' src={firstShape?.assetSrc} alt={firstShape?.alt} key={firstShape?.id}/>
                    <img className='borderline-sh2' src={secondShape?.assetSrc} alt={secondShape?.alt} key={secondShape?.id}/>
                    <img className='borderline-sh1' src={firstShape?.assetSrc} alt={firstShape?.alt} key={firstShape?.id}/>
                </div>
            </section>
        </React.Fragment>
    );
}

export default BorderLine;