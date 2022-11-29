import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import {Button} from "@mui/material";

const School = () => {
    return (
        <div>
            <Button variant="outlined">
                <NavLink to="/new-child">Ввести данные нового ребенка</NavLink>
            </Button>
            <Button variant="outlined">
                <NavLink to="/search">Найти ребенка</NavLink>
            </Button>

            <Outlet/>
        </div>
    );
};

export default School;