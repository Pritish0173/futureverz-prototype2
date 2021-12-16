import './App.css';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="hometitle">
        <p>FUTUREVERZ</p>
      </div>
      <div className="homeheader">
        <h3>Select Your Usecase</h3>
      </div>
      <div className="home">

        <Grid container spacing={3}>

          <Grid item xs>
            <Card
              bg={'primary'}  
              style={{ width: '18rem'}}
              text={'white'}
            >
              <Card.Header><strong>Individual</strong></Card.Header>
              <Card.Body>
                <Card.Text>
                  Know top companies to work for, trending skills, stocks to invest and much more...
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Link to="/Individual" style={{textDecoration: 'none'}}>
                    <Button variant="outlined" style={{backgroundColor:'white'}}>Explore</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid item xs>
            <Card
              bg={'secondary'}  
              style={{ width: '18rem'}}
              text={'white'}
            >
              <Card.Header><strong>Companies</strong></Card.Header>
              <Card.Body>
                <Card.Text>
                  Competitor analysis, explore Investment opportunities and much more...
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Link to="/Companies" style={{textDecoration: 'none'}}>
                    <Button variant="outlined" style={{backgroundColor:'white'}}>Explore</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid item xs>
            <Card
              bg={'warning'}  
              style={{ width: '18rem'}}
              text={'white'}
            >
              <Card.Header><strong>Government</strong></Card.Header>
              <Card.Body>
                <Card.Text>
                  Know about accelerating technologies to make policy decisions and much more...
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Link to="/Government" style={{textDecoration: 'none'}}>
                    <Button variant="outlined" style={{backgroundColor:'white'}}>Explore</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Grid>
          
          <Grid item xs>
            <Card
              bg={'info'}  
              style={{ width: '18rem'}}
              text={'white'}
            >
              <Card.Header><strong>Institutions</strong></Card.Header>
              <Card.Body>
                <Card.Text>
                  Plan your curriculum, partner with companies working on emerging technologies and much more...
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Link to="/Institutions" style={{textDecoration: 'none'}}>
                    <Button variant="outlined" style={{backgroundColor:'white'}}>Explore</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Grid>

        </Grid>
      </div>
    </div>

  );
}

export default Home;