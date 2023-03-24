import React from 'react';
import './productspecs.scss';
import { productSpecificationTitle } from '../data/sitehome';
import SectionTitle from '../components/sectionTitle/sectionTitle';



export function ProductSpecs(){ 
    const {featMsg, title, desc} = productSpecificationTitle;


    return(
        <React.Fragment>
            <section className='product-specs--section'>
                <h2 className='product-specs--h2'>
                    <SectionTitle featMsg={featMsg} title={title} desc={desc}/>
                </h2>
                <summary className='product-specs--summary'>
                    <p>hello</p>
                </summary>
            </section>
        </React.Fragment>
    )
}


export default ProductSpecs;