import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {Button, Grid, Typography} from "@mui/material";

const School = () => {
    return (
        <Grid style={{textAlign: 'center', margin: 25}} >
            <Typography variant="h4">
                Школа
            </Typography>
            <Button variant="outlined" >
                <NavLink to="/school/new-child">Ввести данные нового ребенка</NavLink>
            </Button>
            <Button variant="outlined">
                <NavLink to="/school/search">Найти ребенка</NavLink>
            </Button>

            <Outlet/>
        </Grid>
    );
};

export default School;