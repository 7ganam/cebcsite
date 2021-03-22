
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComponent from './components/shared/NavbarComponent/NavbarComponent'
import FooterComponent from './components/shared/FooterComponent/FooterComponent'
import HomePageComponent from './components/pages/HomePageComponent/HomePageComponent'

import MembersPageComponent from './components/pages/MembersPageComponent/MembersPageComponent'
import SingleMemberPageComponent from './components/pages/MembersPageComponent/SingleMemberPageComponent/SingleMemberPageComponent'

import AboutPageComponent from './components/pages/AboutPageComponent/AboutPageComponent'



import KnowledgeCenterComponent from "./components/pages/KnowledgeCenterComponent/KnowledgeCenterComponent"
import ProjectsPageComponent from "./components/pages/KnowledgeCenterComponent/ProjectsPageComponent/ProjectsPageComponent"
import SingleProjectPageComponent from "./components/pages/KnowledgeCenterComponent/ProjectsPageComponent/SingleProjectPageComponent/SingleProjectPageComponent"


import EventNewsPageComponent from './components/pages/EventNewsPageComponent/EventNewsPageComponent'
import NewsEventSubPagesComponent from './components/pages/EventNewsPageComponent/NewsEventSubPagesComponent/NewsEventSubPagesComponent'
import EventViewPageComponent from './components/pages/EventNewsPageComponent/NewsEventSubPagesComponent/EventViewPageComponent/EventViewPageComponent'
import NewsViewPageComponent from './components/pages/EventNewsPageComponent/NewsEventSubPagesComponent/NewsViewPageComponent/NewsViewPageComponent'



import WorkingGroupsPageComponent from './components/pages/WorkingGroupsPageComponent/WorkingGroupsPageComponent'


import SingleWorkingGroupPageComponent from './components/pages/WorkingGroupsPageComponent/SingleWorkingGroupPageComponent/SingleWorkingGroupPageComponent'

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
                // console.log('loaded programs-groups', responseData)
            } catch (err) {
                console.log({ err })
            }


        },
        [sendProgrammesRequest],
    );



    const { isLoading: MembersIsLoading, error: MembersError, sendRequest: sendMembersRequest, clearError: clearMembersError } = useHttpClient();
    const [LoadedMembers, setLoadedMembers] = useState([]);
    const fetch_Members = useCallback(
        async () => {
            try {
                const responseData = await sendMembersRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/members`
                );
                setLoadedMembers(responseData);
                // console.log({ responseData })
            } catch (err) {
                console.log({ err })
            }
        },
        [sendMembersRequest],
    );


    const { isLoading: ProjectsIsLoading, error: ProjectsError, sendRequest: sendProjectsRequest, clearError: clearProjectsError } = useHttpClient();
    const [LoadedProjects, setLoadedProjects] = useState([]);
    const fetch_Projects = useCallback(
        async () => {
            try {
                const responseData = await sendProjectsRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/projects`
                );
                setLoadedProjects(responseData);
                // console.log('projects ', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendProjectsRequest],
    );


    const { isLoading: NewsIsLoading, error: NewsError, sendRequest: sendNewsRequest, clearError: clearNewsError } = useHttpClient();
    const { sendRequest: sendNewsCountRequest } = useHttpClient();
    const [LoadedNews, setLoadedNews] = useState([]);
    const [LoadedNewsCount, setLoadedNewsCount] = useState([]);
    const fetch_News = useCallback(
        async () => {
            try {

                const news_number_in_database = await sendNewsRequest(`${process.env.REACT_APP_BACKEND_URL}/news/count`);
                setLoadedNewsCount(news_number_in_database);
                // console.log({ news_number_in_database })

                const responseData = await sendNewsRequest(`${process.env.REACT_APP_BACKEND_URL}/news?_limit=4&_sort=date&_start=${news_number_in_database - 4}`);
                setLoadedNews(responseData);
                // console.log({ responseData })
                function extractContent(s) {
                    var span = document.createElement('span');
                    span.innerHTML = s;
                    return span.textContent || span.innerText;
                };
            } catch (err) {
                console.log({ err })
            }
        },
        [sendNewsRequest],
    );


    useEffect(() => {
        fetch_Programmes();
        fetch_Members();
        fetch_News();
        fetch_Projects();

    }, []);





    return (
        <div id="main_component" style={{ backgroundColor: "white", overflow: "" }}>
            <div id="content_wrap">
                <Router >
                    <ScrollToTopComponent />
                    <NavbarComponent />
                    {/* the navbar has to be inside the router since it uses LINK component which runs only inside router component */}
                    <Switch>
                        <Route exact path="/">
                            <HomePageComponent programmes_state={{ ProgrammesIsLoading, ProgrammesError, LoadedProgrammes }} members={LoadedMembers} latest_news={LoadedNews} />
                        </Route>



                        <Route exact path="/ABOUTUS">
                            <AboutPageComponent />
                        </Route>












                        <Route exact path="/KNOWLEDGECENTER/PROJECTS/:project_id"
                            component={(props) => <   SingleProjectPageComponent {...props} projects={LoadedProjects} />}
                        />


                        <Route exact path="/KNOWLEDGECENTER/PROJECTS">
                            <ProjectsPageComponent projects={LoadedProjects} />
                        </Route>


                        <Route exact path="/KNOWLEDGECENTER">
                            <KnowledgeCenterComponent />
                        </Route>













                        <Route path="/MEMBERS/:member_id"
                            component={
                                (props) => <   SingleMemberPageComponent {...props} members={LoadedMembers} />
                            }
                        />


                        <Route exact path="/MEMBERS">
                            <MembersPageComponent members={LoadedMembers} />
                        </Route>



                        <Route path="/groups_programs/:group_id"
                            component={(props) =>
                                <SingleWorkingGroupPageComponent  {...props} programmes_state={{ ProgrammesIsLoading, ProgrammesError, LoadedProgrammes }} />
                            }
                        />

                        <Route exact path="/groups_programs">
                            <WorkingGroupsPageComponent programmes_state={{ ProgrammesIsLoading, ProgrammesError, LoadedProgrammes }} />
                        </Route>



                        <Route path="/EVENTS_NEWS/News/:News_id"
                            component={(props) =>
                                <   NewsViewPageComponent {...props} />
                            }
                        />


                        <Route path="/EVENTS_NEWS/:sub_parameter/:Event_id"
                            component={(props) =>
                                <   EventViewPageComponent {...props} />
                            }
                        />
                        <Route path="/EVENTS_NEWS/:sub_parameter">
                            {(props) =>
                                <   NewsEventSubPagesComponent {...props} />
                            }
                        </Route>
                        <Route path="/EVENTS_NEWS">
                            {(props) => <EventNewsPageComponent {...props} />}
                        </Route>




                    </Switch>
                </Router>
            </div>
            <FooterComponent />

        </div >

    )
}

