import React from "react";
import "./sectionTitle.scss";



export function SectionTitle(props) {
    const { 
        featMsg, 
        title, 
        desc, 
        marginBottom 
    } = props;
    return (
        <React.Fragment>
            <section style={{marginBottom: `${marginBottom}px`}} className='section-title-container'>
                <p className='section-title-feat'>{featMsg}</p>
                <h1 className='section-title-title'>{title}</h1>
                <p className='section-title-desc'>{desc}</p>
            </section>
        </React.Fragment>
    );
}

export default SectionTitle;