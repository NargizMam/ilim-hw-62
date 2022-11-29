import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const KinderGarden = () => {
    return (
        <div>
            Садик
            <NavLink to="/new-child">Ввести данные нового ребенка</NavLink>
            <NavLink to="/search">Найти ребенка</NavLink>
            <Outlet/>
        </div>
    );
};

export default KinderGarden;