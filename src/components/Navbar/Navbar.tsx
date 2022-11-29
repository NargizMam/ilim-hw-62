import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import './Navlink.css';
import {Button, Grid} from "@mui/material";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </IconButton>
                    <div className="Navlink">
                        <NavLink to="/">
                            ОК "ИЛИМ"
                        </NavLink>
                        <Grid>
                            <Button variant="outlined">
                                <NavLink to="school">Школа</NavLink>
                            </Button>
                            <Button variant="outlined">
                                <NavLink to="kinder-garden">Детский сад</NavLink>
                            </Button>
                        </Grid>

                    </div>

                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;