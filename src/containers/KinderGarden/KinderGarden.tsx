import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {Button, Grid, Typography} from "@mui/material";

const KinderGarden = () => {
    return (
        <Grid style={{textAlign: 'center', margin: 25}} >
            <Typography variant="h4">
                Детский сад
            </Typography>
            <Button variant="outlined" >
                <NavLink to="kinder-garden/new-child">Ввести данные нового ребенка</NavLink>
            </Button>
            <Button variant="outlined">
                <NavLink to="kinder-garden/search">Найти ребенка</NavLink>
            </Button>
            <Outlet/>
        </Grid>
    );
};

export default KinderGarden;