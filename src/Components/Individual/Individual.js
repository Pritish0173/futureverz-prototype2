import React from 'react';
import Appbar from '../Appbar/Appbar';
import IndividualDomain from './IndividualDomain';

function Individual() {
    return (
        <div>
            <Appbar />
            <div className="content">
                <IndividualDomain />
            </div>
        </div>
    );
}

export default Individual;