import React from 'react';
import staticNavMsg from './data/siteHome';
import './staticnavmsg.scss';


export function StaticNavMsg() {
    return (
        <React.Fragment>
        <div className='staticnavmsg-wrap'>
            <p className='staticnavmsg-msg'>
                {staticNavMsg.msg1}
            </p>
        </div>
        </React.Fragment>
    );
}


export default StaticNavMsg;