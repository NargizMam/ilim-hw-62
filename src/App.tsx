import React from 'react';
import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import ChildForm from "./components/ChildForm/ChildForm";
import School from "./containers/School/School";
import KinderGarden from "./containers/KinderGarden/KinderGarden";
import Search from "./components/Search/Search";

function App() {
  return (
        <>
        <header>
            <Navbar/>
        </header>
            <main className="container-fluid">

                <Routes>
                    <Route path="/" element={(
                        <Home/>
                    )}>

                    </Route>

                    <Route path="/school" element={(
                        <School/>
                    )}>
                        <Route path="/school/new-child" element={(
                            <ChildForm/>
                        )}/>
                        <Route path="/school/search" element={(
                            <Search/>
                        )}/>
                    </Route>

                    <Route path="/kinder-garden" element={(
                        <KinderGarden/>
                    )}>
                        <Route path="kinder-garden/new-child" element={(
                            <ChildForm/>
                        )}/>
                        <Route path="kinder-garden/search" element={(
                            <Search/>
                        )}/>
                    </Route>

                </Routes>
            </main>
        <footer>
            <Footer/>
        </footer>
        </>
  )}

export default App;
