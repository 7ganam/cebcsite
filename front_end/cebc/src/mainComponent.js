
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComponent from './components/shared/NavbarComponent/NavbarComponent'
import FooterComponent from './components/shared/FooterComponent/FooterComponent'
import HomePageComponent from './components/pages/HomePageComponent/HomePageComponent'
import AboutPageComponent from './components/pages/AboutPageComponent/AboutPageComponent'
import KnowledgeCenterComponent from "./components/pages/KnowledgeCenterComponent/KnowledgeCenterComponent"

import EventPageComponent from './components/pages/EventPageComponent/EventPageComponent'
import EventViewPageComponent from './components/pages/EventPageComponent/EventViewPageComponent/EventViewPageComponent'

import ScrollToTopComponent from "./ScrollToTopComponent"

import { useHttpClient } from "./hooks/http-hook"
import { useState, useEffect, useCallback } from 'react';



export default function MainComponent() {


    const { isLoading: ProgrammesIsLoading, error: ProgrammesError, sendRequest: sendProgrammesRequest, clearError } = useHttpClient();
    const [LoadedProgrammes, setLoadedProgrammes] = useState([]);

    const fetch_Programmes = useCallback(
        async () => {
            try {

                const responseData = await sendProgrammesRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/programmes-and-groups`
                );

                setLoadedProgrammes(responseData);
                console.log({ responseData })
            } catch (err) {
                console.log({ err })
            }


        },
        [sendProgrammesRequest],
    );



    useEffect(() => {

        fetch_Programmes();

    }, [fetch_Programmes]);














    return (
        <div id="main_component" style={{ backgroundColor: "white", overflow: "hidden" }}>
            <div id="content_wrap">
                <Router >
                    <ScrollToTopComponent />
                    <NavbarComponent />
                    {/* the navbar has to be inside the router since it uses LINK component which runs only inside router component */}
                    <Switch>
                        <Route exact path="/">
                            <HomePageComponent programmes_state={{ ProgrammesIsLoading, ProgrammesError, LoadedProgrammes }} />
                        </Route>

                        <Route path="/EVENTS/:Event_type/:Event_id"
                            component={(props) =>
                                <   EventViewPageComponent {...props} />
                            }
                        />
                        <Route path="/EVENTS/:Event_type">
                            {(props) =>
                                <   EventPageComponent {...props} />
                            }
                        </Route>

                        <Route path="/EVENTS">
                            {(props) =>
                                <   EventPageComponent {...props} />
                            }
                        </Route>

                        <Route exact path="/ABOUTUS">
                            <AboutPageComponent />
                        </Route>




                        <Route exact path="/KNOWLEDGECENTER">
                            <KnowledgeCenterComponent />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <FooterComponent />

        </div >

    )
}

