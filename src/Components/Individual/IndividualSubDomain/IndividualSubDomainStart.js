import React from 'react';
import IndividualSubDomain from './IndividualSubDomain';

function IndividualSubDomainStart({domain, searchdata}) {
    return(
        <IndividualSubDomain searchdata={searchdata} domain={domain} />
    );
}

export default IndividualSubDomainStart;