import React from "react";
import "./sectiontitlev2.scss";



export function SectionTitleV2(props) {
    const { 
        featMsg, 
        title, 
        desc, 
        marginBottom,
        isDescUnorderedListed,
    } = props;
    return (
        <React.Fragment>
            <section style={{marginBottom: `${marginBottom}px`}} className='section-title-v2-container'>
                <p className='section-title-v2-feat'>{featMsg}</p>
                <h1 className='section-title-v2-title'>{title}</h1>
                {isDescUnorderedListed === true && Array.isArray(desc) ? 
                <ul className='section-title-v2-desc-listed'>
                    {desc.map((item, index)=>
                    {
                        return(
                        <li className='section-title-v2-desc-listed-items' key={`${index}_li`}>
                        {item}
                        </li>    
                    )}
                    )}
                </ul>
                : 
                <p className='section-title-v2-desc'>{desc}</p>
                }
            </section>
        </React.Fragment>
    );
}

export default SectionTitleV2;