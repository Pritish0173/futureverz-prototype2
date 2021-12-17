import React, { useState }from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './GraphTabs.css';
import HorizontalBar from './HorizontalBar';
import graph from './GraphData.json';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function GraphTabs({domain}) {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let dataHorBar = graph.filter(word => word.domain===domain);
  dataHorBar = dataHorBar[0];
  const domaindata = dataHorBar.graphData
  const companies = domaindata.Companies
  const investments = domaindata.Investments
  const institutions = domaindata.Institutions
  const countries = domaindata.Countries
  const trends = domaindata.Trends
  const geographic = domaindata.Geographic
  const talent = domaindata.talent

  return (
    <div className="tabs">
      <Box sx={{bgcolor: 'transparent' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          style={{color: 'purple'}}
        >
          <Tab label="Competitors" {...a11yProps(0)} style={{color: 'slateblue', fontWeight: 'bold'}}/>
          <Tab label="Invest" {...a11yProps(1)} style={{color: 'slateblue', fontWeight: 'bold'}} />
          <Tab label="Geographic" {...a11yProps(2)} style={{color: 'slateblue', fontWeight: 'bold'}}/>
          <Tab label="Top Institutions" {...a11yProps(3)} style={{color: 'slateblue', fontWeight: 'bold'}}/>
          <Tab label="Performance" {...a11yProps(4)} style={{color: 'slateblue', fontWeight: 'bold'}}/>
          <Tab label="Talent Pool" {...a11yProps(5)} style={{color: 'slateblue', fontWeight: 'bold'}}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h4 className="graphheader">Leaders in {domain}</h4>
        <HorizontalBar data={companies} />
        <br></br>
        <br></br>
        <h4 className="graphheader">Top 10 Contributors in {domain}</h4>
        <HorizontalBar data={companies} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h4 className="graphheader">Top VC investors in {domain}</h4>
        <HorizontalBar data={investments} />
        <br></br>
        <br></br>
        <h4 className="graphheader">Top VC Firms investing in {domain}</h4>
        <HorizontalBar data={investments} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h4 className="graphheader">Active Countries in {domain} (Based on Jurisdiction)</h4>
        <HorizontalBar data={geographic} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <h4 className="graphheader">Top Institutions in {domain}</h4>
        <HorizontalBar data={institutions} />
        <br></br>
        <br></br>
        <h4 className="graphheader">Countries with Top talents in {domain}</h4>
        <HorizontalBar data={countries} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h4 className="graphheader">Active Countries in {domain}</h4>
        <HorizontalBar data={countries} />
        <br></br>
        <br></br>
        <h4 className="graphheader">Publication trends over 5 years in {domain}</h4>
        <HorizontalBar data={trends} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <h4 className="graphheader">Most Active authors globally</h4>
        <HorizontalBar data={talent} />
      </TabPanel>
    </div>
  );
}

export default GraphTabs;
