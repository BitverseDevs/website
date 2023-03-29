import React, { useState } from 'react';
import './sitehero.scss';
import { heroData } from '../../../data/sitehome';

export function Sitehero() {
    const [selectedItem, setSelectedItem] = useState(false); 
    function handleClick() {
        setSelectedItem(!selectedItem);
      }
    return (
        <React.Fragment>
        <section className='hero-wrap'>
            <div className='hero-container'>
                <div className='hero-left-content'>
                    <div className='hero-left-content-wrap'>
                        <div className='hero-left-content-title'>
                            {heroData.left_title}
                        </div>
                        <div className='hero-left-content-desc'>
                            {heroData.left_desc}
                        </div>
                        <div className='hero-left-content-action-items'>
                            <button className='hero-left-content-action-item-call'>{heroData.left_call}</button>
                            <div className='hero-left-content-action-item-play' onClick={handleClick}>
                                <div className='play-wrap'>
                                    <button className='play-wrap-shape'>
                                    </button>
                                </div>
                            </div>
                            <div className='hero-left-content-action-item-watch'>
                                {heroData.left_watch}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hero-right-content'>
                    <img className='hero-right-content-img' src='/website/assets/bv-asset/bv-header-media.png'/>
                </div>
            </div>
        </section>
        <section className={selectedItem ? 'overlay_active': ''} onClick={handleClick}>
        </section>
        {/* <iframe className={selectedItem ? 'iframe_active' : 'iframe_inactive'} src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100090029121157%2Fvideos%2F714203046926001%2F&show_text=false&width=560&t=0" width="560" height="314" style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
        <iframe className={selectedItem ? 'iframe_active' : 'iframe_inactive'} src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100090029121157%2Fvideos%2F714203046926001%2F&show_text=false&width=560&t=0" style={{overflow: 'hidden'}} allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </React.Fragment>
    );
}


export default Sitehero;