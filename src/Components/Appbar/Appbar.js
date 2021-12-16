import React, { 
    // useState 
} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Logout from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Grid from '@mui/material/Grid';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";


function Appbar({user}) {

    // const [anchorEl, setAnchorEl] = useState(null);
    // // const open = Boolean(anchorEl);
  
    // const handleAvatar = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };
  
    // const handleClose = () => {
    //   setAnchorEl(null);
    // };
  
    // const handleLogout = () => {
    //   setAnchorEl(null);
    // }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography 
                            style={{ 
                            fontWeight: 'bold' 
                            }} 
                            variant="h5"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            FUTUREVERZ
                        </Typography>
                        <Navbar expand="lg">
                        <Container>
                            <Navbar.Brand></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{borderColor: 'white', backgroundColor: 'white'}}/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <React.Fragment>
                                    <Box 
                                    sx={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        textAlign: 'center', 
                                        marginTop: '10px' 
                                        }}
                                    >
                                    <Grid container spacing={3}>
                                        <Grid item xs>
                                            <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
                                                <Button variant="inverse" startIcon={<HomeIcon />}>
                                                    Home
                                                </Button>
                                            </Link>
                                        </Grid>
                                        <Grid item xs>
                                            <Button variant="inverse" startIcon={<InfoIcon />}>
                                                About
                                            </Button>
                                        </Grid>
                                        <Grid item xs>
                                            <Button variant="inverse" startIcon={<ContactPageIcon />}>
                                                Contact
                                            </Button>
                                        </Grid>
                                        <Grid item xs>
                                            <Tooltip title="Account settings">
                                                <IconButton 
                                                // onClick={handleAvatar} 
                                                size="small" 
                                                style={{
                                                    marginTop: '-5px'
                                                }} 
                                                >
                                                <Typography 
                                                    style={{
                                                        color: 'white',
                                                        marginRight:'5px'
                                                    }}
                                                >
                                                    Hello, John
                                                </Typography>
                                                <Avatar sx={{ width: 32, height: 32 }} ></Avatar>
                                                </IconButton>
                                            </Tooltip>
                                        </Grid>
                                    </Grid>
                                    </Box>
                                    {/* <Menu
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                    <Typography sx={{ ml: 2 }}>{user}</Typography>
                                    <MenuItem>
                                        <Avatar /> User
                                    </MenuItem>
                                    <MenuItem>
                                        <Avatar /> My account
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem>
                                        <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        Add another account
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                        <Settings fontSize="small" />
                                        </ListItemIcon>
                                        Settings
                                    </MenuItem>
                                    <MenuItem onClick={handleLogout}>
                                        <ListItemIcon>
                                        <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                    </Menu> */}
                                </React.Fragment>
                            </Navbar.Collapse>
                        </Container>
                        </Navbar>


                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default Appbar;