import React from 'react';
import {Outlet} from "react-router-dom";
import {Typography} from "@mui/material";
import './Home.css';


const Home = () => {
    return (
        <>

            <div className="Home">
                <Typography variant="h3" >
                    ОТКРЫТ НАБОР НА 2022-2023 УЧЕБНЫЙ ГОД
                    Запишитесь на собеседование
                </Typography>
                <Outlet/>
            </div>
            </>

    );
};

export default Home;