import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';
import './header.css';
import logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";
import { menuItems } from "../../data/constants/navigation";

const style = {
    borderRadius: '5px',
    fontWeight: '600',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingTop: '10px',
    paddinBottom: '10px',
    width: '125px'
}
const LoginStyle = {
    backgroundColor: 'white',
    color: 'black',
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingTop: '15px',
    paddinBottom: '15px',
    width: '125px'
}
const Header = () => {
    const [open, setOpen] = useState(false);
    const openList = () => {
        open === true ? setOpen(false) : setOpen(true);
    }
    return (
        <>
            <div className="classMainWrapper" style={{ width: '100%' }} >
                <Box>
                    {/* desktop view starts here */}
                    <div className="displayItems" >
                        <Grid container justifyContent="center" alignItems="center" padding={3}>
                            <Grid item container xs={10} sm={3} md={2} lg={1.3} justifyContent="center" alignItems="center">
                                <Grid item>
                                    <img alt="" src={logo} />
                                </Grid>
                                <Grid item alignItems="center">
                                    <div className="font-weight-700">
                                        Untitled UI
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid item container justifyContent="start" sm={7} md={6} >
                                {menuItems.map((menu) => (
                                    <Grid key={menu.id} item container justifyContent="center" xs={12} sm={4} md={3} lg={2}>
                                        <Link to={menu.target} className="header-link">
                                            <div className="menutitle">
                                                {menu.title} {menu.icons}
                                            </div>
                                        </Link>

                                    </Grid>
                                ))}
                            </Grid>

                            <Grid item container justifyContent="end" sm={2} md={3}>
                                <Grid item xs={12} sm={2} md={5}>
                                    <Button color="primary" sx={LoginStyle}><div className="font-weight-700">Login</div></Button>
                                </Grid>
                                <Grid item xs={20} sm={2} md={5} lg={4}>
                                    <Button variant="contained" sx={style}>Sign Up</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    {/* desktop view ends here */}


                    {/* tablet and mobile view starts here */}
                    <div className="hideItems">
                        <Grid container justifyContent="space-between" alignItems="center" padding={3}>
                            <Grid item container xs={5} sm={3} md={3} justifyContent="center" alignItems="center">
                                <Grid item>
                                    <img alt="" src={logo} />
                                </Grid>
                                <Grid item alignItems="center">
                                    <div className="font-weight-700">
                                        Untitled UI
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid item container justifyContent="end" xs={5} sm={5} md={2} >
                                <Button onClick={openList} >
                                    <FaBars size={25}
                                        color="black"
                                        style={{ border: '1px solid black', borderRadius: '5px', padding: '10px', display: 'block' }}
                                    />
                                </Button>
                            </Grid>
                        </Grid>

                    </div>
                    {
                        open &&
                        <div className="hideItems" style={{ width: '100%' }}>
                            <Grid container justifyContent="center">
                                {menuItems.map((menu) => (
                                    <Grid item key={menu.id} xs={10} sm={10} md={12}>
                                       <Button onClick={openList}>
                                       <Link className="header-link-mini" to={menu.target} >
                                            <div className="menutitle">
                                                {menu.title} {menu.icons}
                                            </div>
                                        </Link>
                                       </Button>
                                    </Grid>
                                ))}
                                
                                <Grid container justifyContent="center" paddingBottom={2}>
                                    <Grid item xs={10} sm={10} md={12} paddingTop={1}>
                                        <Button variant="contained" sx={style}><div className="font-weight-700">Login</div></Button>
                                    </Grid>
                                    <Grid item xs={10} sm={10} md={12} paddingTop={1}>
                                        <Button variant="contained" sx={style}>Sign Up</Button>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </div>
                    }
                    {/* tablet and mobile view ends here */}
                </Box>
            </div>
        </>
    );
}
export default Header;