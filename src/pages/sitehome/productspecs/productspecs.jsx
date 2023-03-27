import React from 'react';
import './productspecs.scss';
import SectionTitle from '../components/sectionTitle/sectionTitle';
import FeaturesList from '../components/featureslist/featureslist';


export function ProductSpecs(props){ 
    const {featMsg, title, desc} = props?.productsTitle;


    return(
        <React.Fragment>
            <section className='product-specs--section'>
                <h2 className='product-specs--h2'>
                    <SectionTitle featMsg={featMsg} title={title} desc={desc}/>
                </h2>
                <summary className='product-specs--summary'>
                    <FeaturesList products={props?.productsList}/>
                </summary>
            </section>
        </React.Fragment>
    )
}


export default ProductSpecs;