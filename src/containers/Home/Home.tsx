import React from 'react';
import {Outlet} from "react-router-dom";

const Home = () => {
    return (
        <>
            Домашняя страница

            <div className="container-fluid">
                <Outlet/>
            </div>
            </>

    );
};

export default Home;