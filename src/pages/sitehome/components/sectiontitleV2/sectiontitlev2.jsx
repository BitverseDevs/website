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
    console.log(desc, "meow1")
    return (
        <React.Fragment>
            <section style={{marginBottom: `${marginBottom}px`}} className='section-title-v2-container'>
                <p className='section-title-v2-feat'>{featMsg}</p>
                <h1 className='section-title-v2-title'>{title}</h1>
                {isDescUnorderedListed === true && Array.isArray(desc) ? 
                <ul className='section-title-v2-desc-listed'>
                    {desc.map((item, index)=>
                    {
                        console.log(item, "mama")
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