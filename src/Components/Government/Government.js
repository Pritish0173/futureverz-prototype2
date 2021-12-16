import React from 'react';
import Appbar from '../Appbar/Appbar';
import GovernmentDomain from './GovernmentDomain';

function Government() {
    return (
        <div>
            <Appbar />
            <div className="content">
                <br></br>
                <GovernmentDomain />
            </div>
        </div>
    );
}

export default Government;