import React from 'react';
import './nextbuttonarrow.scss';

export function NextButtonArrow(props) {
    const {
        bgColor,
        bgBorderRadius,
        bgMarginTop,
        bgMarginRight,
        bgMarginLeft,
        bgMarginBottom,
        bgHeight,
        bgWidth,
        arrowColor,
        arrowDirection,
    } = props;
    function arrowToPoint(key){
        const keyProcessor = {
            'right': {transform: 'rotate(-45deg)',},
            'left': {transform: 'rotate(135deg)',},
            'up': {transform: 'rotate(-135deg)',},
            'down': {transform: 'rotate(45deg)',},
        };
        return keyProcessor[key] ?? keyProcessor['right'];
    };

    const adjustableBgStyles = {
        background: bgColor ?? 'linear-gradient(90deg, #0076ff 0%, #00c4ff 100%)',
        borderRadius: bgBorderRadius ?? '50px',
        marginTop: bgMarginTop ?? '0px',
        marginRight: bgMarginRight ?? '0px',
        marginLeft: bgMarginLeft ?? '0px',
        marginBottom: bgMarginBottom ?? '0px',
        height: bgHeight ?? '50px',
        width: bgWidth ?? '50px',
        display: 'flex',
        flexDirection: 'center',
        alignItems: 'center',
    };
    const adjustableArrowStyles = {
        borderType: 'solid',
        borderColor: arrowColor ?? '#00000',
        borderWidth: '0 3px 3px 0',
        display: 'inline-block',
        padding: '4px',
        marginRight: 'auto',
        marginLeft: 'auto',
        ...arrowToPoint(arrowDirection),
    }
    return (
        <React.Fragment>
        <span className='next-button-arrow--figure-wrap'>
            <button className='next-button-arrow--figure-background' style={adjustableBgStyles}>
                <i className='next-button-arrow--figure-arrow' style={adjustableArrowStyles}></i>
            </button>
        </span>
        </React.Fragment>
    );
}

export default NextButtonArrow;