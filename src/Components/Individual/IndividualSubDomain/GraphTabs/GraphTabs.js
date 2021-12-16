import React, { useState, useEffect}from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './GraphTabs.css';
import HorizontalBar from './HorizontalBar';
import axios from 'axios';
import Loader from '../../../Loader/Loader';


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
  const [graph, setGraph] = useState(null);

  const sendGetRequestGraph = async () => {
    try {
        const datagraph = await axios.
        get(`https://futureverz.herokuapp.com/api/Individual/graph/` + domain + '/')
        .then(res => {
          console.log(res);
          console.log('success graph');
          const graphdata = res.data;
          setGraph(graphdata);
        })

    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
  };

  useEffect(() => {
    sendGetRequestGraph();
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // console.log(graph);
  // const companies = graph.Companies
  // const skills = graph.Skills
  // const postings = graph.Postings
  // const investments = graph.Investments
  // const institutions = graph.Institutions
  // const countries = graph.Countries
  // const trends = graph.Trends

  
  if(graph===null){
    return(
      <Loader />
    );
  }
  else{
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
            <Tab label="Employment" {...a11yProps(0)} style={{color: 'slateblue', fontWeight: 'bold'}}/>
            <Tab label="Investment" {...a11yProps(1)} style={{color: 'slateblue', fontWeight: 'bold'}} />
            <Tab label="Top Institutions" {...a11yProps(2)} style={{color: 'slateblue', fontWeight: 'bold'}}/>
            <Tab label="Active Countries" {...a11yProps(3)} style={{color: 'slateblue', fontWeight: 'bold'}}/>
            <Tab label="Trends" {...a11yProps(4)} style={{color: 'slateblue', fontWeight: 'bold'}}/>
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <h4 className="graphheader">Top companies to work in {domain}</h4>
          <HorizontalBar data={graph.Companies} />
          {/* <Chart type='bar' data={dataHorBar} style={{backgroundColor: 'white'}}/> */}
          <br></br>
          <br></br>
          <h4 className="graphheader">Trending skills in {domain}</h4>
          <HorizontalBar data={graph.Skills} />
          {/* <Chart type='bar' data={dataHorBar} style={{backgroundColor: 'white'}}/> */}
          <br></br>
          <br></br>
          <h4 className="graphheader">Top job posting companies in {domain}</h4>
          <HorizontalBar data={graph.Postings} />
          {/* <Chart type='bar' data={dataHorBar} style={{backgroundColor: 'white'}}/> */}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h4 className="graphheader">Invest stocks on companies(filing more patents and VC funds)</h4>
          <HorizontalBar data={graph.Investments} />
          {/* <Chart type='bar' data={dataHorBar} /> */}
        </TabPanel>
        <TabPanel value={value} index={2}>
          <h4 className="graphheader">Top institutions in {domain}</h4>
          <HorizontalBar data={graph.Institutions} />
          {/* <Chart type='bar' data={dataHorBar} /> */}
        </TabPanel>
        <TabPanel value={value} index={3}>
          <h4 className="graphheader">Active countries in {domain}</h4>
          <HorizontalBar data={graph.Countries} />
          {/* <Chart type='bar' data={dataHorBar} /> */}
        </TabPanel>
        <TabPanel value={value} index={4}>
          <h4 className="graphheader">Publication trends over 5 years in {domain}</h4>
          <HorizontalBar data={graph.Trends} />
          {/* <Chart type='bar' data={dataHorBar} /> */}
        </TabPanel>
      </div>
    ); 
  }
}

export default GraphTabs;
