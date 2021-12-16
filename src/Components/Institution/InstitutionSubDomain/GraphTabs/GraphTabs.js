import React, { useState }from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './GraphTabs.css';
// import { HorizontalBar } from 'react-chartjs-2';
// import 'chart.js/auto';
// import { Chart } from 'react-chartjs-2';
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
  console.log(dataHorBar);
  const domaindata = dataHorBar.graphData
  console.log(domaindata);
  // const companies = domaindata.Companies
  // const skills = domaindata.Skills
  // const postings = domaindata.Postings
  const investments = domaindata.Investments
  // const institutions = domaindata.Institutions
  const countries = domaindata.Countries
  // const trends = domaindata.Trends
  const geographic = domaindata.Geographic
  // const talent = domaindata.talent

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
          <Tab label="Curriculam Planning" {...a11yProps(0)} style={{color: 'slateblue', fontWeight: 'bold'}}/>
          <Tab label="Research" {...a11yProps(1)} style={{color: 'slateblue', fontWeight: 'bold'}} />
          <Tab label="Collaborate" {...a11yProps(2)} style={{color: 'slateblue', fontWeight: 'bold'}}/>
          {/* <Tab label="Skills" {...a11yProps(3)} style={{color: 'slateblue', fontWeight: 'bold'}}/>
          <Tab label="Research" {...a11yProps(4)} style={{color: 'slateblue', fontWeight: 'bold'}}/> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h4 className="graphheader">Comparing acceleration among countries</h4>
        <HorizontalBar data={geographic} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h4 className="graphheader">Active Countries in {domain}</h4>
        <HorizontalBar data={countries} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h4 className="graphheader">Invest stocks on companies(filing more patents and VC funds)</h4>
        <HorizontalBar data={investments} />
      </TabPanel>
      {/* <TabPanel value={value} index={3}>
        <h4 className="graphheader">Top Skills required in {domain}</h4>
        <HorizontalBar data={skills} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h4 className="graphheader">Top Institutions in {domain}</h4>
        <HorizontalBar data={institutions} />
      </TabPanel> */}
    </div>
  );
}

export default GraphTabs;
