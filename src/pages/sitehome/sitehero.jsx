import React from "react";
import "./sitehero.scss";
import { heroData } from "./data/sitehome";

export function Sitehero() {
    return (
        <React.Fragment>
        <section className="hero-wrap">
            <div className="hero-container">
                <div className="hero-left-content">
                    <div className="hero-left-content-wrap">
                        <div className="hero-left-content-title">
                            {heroData.left_title}
                        </div>
                        <div className="hero-left-content-desc">
                            {heroData.left_desc}
                        </div>
                        <div className="hero-left-content-action-items">
                            <button className="hero-left-content-action-item-call">{heroData.left_call}</button>
                            <div className="hero-left-content-action-item-play">
                                <div className="play-wrap">
                                    <div className="play-wrap-shape">
                                    </div>
                                </div>
                            </div>
                            <div className="hero-left-content-action-item-watch">
                                {heroData.left_watch}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-right-content">
                    <img className="hero-right-content-img" src="/website/assets/bv-asset/bv-header-media.png"></img>
                </div>
            </div>
        </section>
        </React.Fragment>
    );
}


export default Sitehero;