import React from 'react';
import Appbar from '../Appbar/Appbar';
import InstitutionDomain from './InstitutionDomain';

function Institutions() {
    return (
        <div>
            <Appbar />
            <div className="content">
                <br></br>
                <InstitutionDomain/>  
            </div>
        </div>
    );
}

export default Institutions;