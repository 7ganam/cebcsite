
import { BrowserRouter as Router, Route, } from "react-router-dom";
import NavbarComponent from './components/shared/NavbarComponent/NavbarComponent'
import FooterComponent from './components/shared/FooterComponent/FooterComponent'
import HomePageComponent from './components/pages/HomePageComponent/HomePageComponent'
import AboutPageComponent from './components/pages/AboutPageComponent/AboutPageComponent'
import KnowledgeCenterComponent from "./components/pages/KnowledgeCenterComponent/KnowledgeCenterComponent"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import EventPageComponent from './components/pages/EventPageComponent/EventPageComponent'



import ScrollToTopComponent from "./ScrollToTopComponent"
export default function MainComponent() {



    return (
        <div id="main_component" style={{ backgroundColor: "white" }}>
            <div id="content_wrap">
                <Router >
                    <ScrollToTopComponent />
                    <NavbarComponent />
                    {/* the navbar has to be inside the router since it uses LINK component which runs only inside router component */}

                    <Route exact path="/">
                        <HomePageComponent />
                    </Route>
                    <Route exact path="/ABOUTUS">
                        <AboutPageComponent />
                    </Route>
                    <Route exact path="/EVENTS">
                        <EventPageComponent />
                    </Route>
                    <Route exact path="/KNOWLEDGECENTER">
                        <KnowledgeCenterComponent />
                    </Route>
                </Router>
            </div>
            <FooterComponent />

        </div >

    )
}

