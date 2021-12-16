import React from 'react';
import Appbar from '../Appbar/Appbar';
import CompaniesDomain from './CompaniesDomain';

function Companies() {
    return (
        <div>
            <Appbar />
            <div className="content">
                <br></br>
                <CompaniesDomain />  
            </div>
        </div>
    );
}

export default Companies;