import React, { useState, Suspense } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import InstitutionDomain from '../InstitutionDomain';
import GraphTab from './GraphTabs/GraphTabs';
import Loader from "../../Loader/Loader";
import searchdata from '../searchdata.json';

const Wordcloud = React.lazy(() => import('./Wordcloud/Wordcloud'));


function CompaniesSubDomain({domain}) {

  const data = searchdata;
  const [reset,setReset] = useState(false);
  const searchlabel = 'Showing results for ' + domain

  const resetdomain = () => {
    setReset(true);
  }

  if(!(data.some(item => domain === item))|reset) {
    return(
      <InstitutionDomain />
    );
  }
  else{
    return (
      <div>
        <br></br>
        <h2 className='title'>Explore Technology Forecast</h2>
        <div className='searchbar'>
          <TextField
            disabled
            label={searchlabel}
            style={{
              backgroundColor: 'white',
              width: '65%',
              marginLeft: '15%',
              borderTopLeftRadius: '0.4em',
              borderBottomLeftRadius: '0.4em',              
            }}
          />
          <SearchIcon 
            style={{
              backgroundColor: 'white',
              marginTop: '0.05em',
              width: '1.7em',
              height: '3.4em',
              borderTopRightRadius: '0.4em',
              borderBottomRightRadius: '0.4em',
              fontSize: '1em',
              color: 'grey',
            }} />
            <Button 
              variant="contained" 
              onClick={resetdomain}
              style={{
                backgroundColor: 'blueviolet',
                marginLeft: '0.5em',
                marginRight: '0.5em',
                width: '7em'
              }} 
              startIcon={<RestartAltIcon />}>
              Reset
            </Button>
        </div>
  
        <br></br>
        <h3 className="textforwordcloud">Trending Subdomains in {domain}</h3>
        <div className="wordcloud">
          <Suspense fallback={<Loader />}>
            <Wordcloud domain={domain}/>
          </Suspense>
        </div>
        <br></br>
        <br></br>
        <GraphTab domain={domain}/>
        <br></br>
        <br></br>
      </div>
    );
  }


}

export default CompaniesSubDomain;