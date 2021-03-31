
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
import ReportsPageComponent from "./components/pages/KnowledgeCenterComponent/ReportsPageComponent/ReportsPageComponent"
import SingleReportPageComponent from "./components/pages/KnowledgeCenterComponent/ReportsPageComponent/SingleReportPageComponent/SingleReportPageComponent"
import CaseStudiesPageComponent from "./components/pages/KnowledgeCenterComponent/CaseStudiesPageComponent/CaseStudiesPageComponent"
import SingleCaseStudyPageComponent from "./components/pages/KnowledgeCenterComponent/CaseStudiesPageComponent/SingleCaseStudyPageComponent/SingleCaseStudyPageComponent"
import PresintationsPageComponent from "./components/pages/KnowledgeCenterComponent/PresintationsPageComponent/PresintationsPageComponent"
import LinksPageComponent from "./components/pages/KnowledgeCenterComponent/LinksPageComponent/LinksPageComponent"

import PodcastsPageComponent from "./components/pages/KnowledgeCenterComponent/PodcastsPageComponent/PodcastsPageComponent"
import SinglePodcastsPageComponent from "./components/pages/KnowledgeCenterComponent/PodcastsPageComponent/SinglePodcastsPageComponent/SinglePodcastsPageComponent"

import WebinarsPageComponent from "./components/pages/KnowledgeCenterComponent/WebinarsPageComponent/WebinarsPageComponent"
import SingleWebinarPageComponent from "./components/pages/KnowledgeCenterComponent/WebinarsPageComponent/SingleWebinarPageComponent/SingleWebinarPageComponent"

import BlogsPageComponent from "./components/pages/KnowledgeCenterComponent/BlogsPageComponent/BlogsPageComponent"
import SingleBlogPageComponent from "./components/pages/KnowledgeCenterComponent/BlogsPageComponent/SingleBlogPageComponent/SingleBlogPageComponent"

import PapersPageComponent from "./components/pages/KnowledgeCenterComponent/PapersPageComponent/PapersPageComponent"
import SinglePaperPageComponent from "./components/pages/KnowledgeCenterComponent/PapersPageComponent/SinglePaperPageComponent/SinglePaperPageComponent"



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




    const { isLoading: ReportsIsLoading, error: ReportsError, sendRequest: sendReportsRequest, clearError: clearReportsError } = useHttpClient();
    const [LoadedReports, setLoadedReports] = useState([]);
    const fetch_Reports = useCallback(
        async () => {
            try {
                const responseData = await sendReportsRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/reports-publications`
                );
                setLoadedReports(responseData);
                // console.log('Reports', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendReportsRequest],
    );



    const { isLoading: Case_studiesIsLoading, error: Case_studiesError, sendRequest: sendCase_studiesRequest, clearError: clearCase_studiesError } = useHttpClient();
    const [LoadedCase_studies, setLoadedCase_studies] = useState([]);
    const fetch_Case_studies = useCallback(
        async () => {
            try {
                const responseData = await sendCase_studiesRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/case-studies`
                );
                setLoadedCase_studies(responseData);
                // console.log('Case_studies', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendCase_studiesRequest],
    );



    const { isLoading: PodcastsIsLoading, error: PodcastsError, sendRequest: sendPodcastsRequest, clearError: clearPodcastsError } = useHttpClient();
    const [LoadedPodcasts, setLoadedPodcasts] = useState([]);
    const fetch_Podcasts = useCallback(
        async () => {
            try {
                const responseData = await sendPodcastsRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/podcasts`
                );
                setLoadedPodcasts(responseData);
                // console.log('Podcasts', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendPodcastsRequest],
    );



    const { isLoading: WebinarsIsLoading, error: WebinarsError, sendRequest: sendWebinarsRequest, clearError: clearWebinarsError } = useHttpClient();
    const [LoadedWebinars, setLoadedWebinars] = useState([]);
    const fetch_Webinars = useCallback(
        async () => {
            try {
                const responseData = await sendWebinarsRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/webinars`
                );
                setLoadedWebinars(responseData);
                console.log('Webinars ', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendWebinarsRequest],
    );



    const { isLoading: BlogsIsLoading, error: BlogsError, sendRequest: sendBlogsRequest, clearError: clearBlogsError } = useHttpClient();
    const [LoadedBlogs, setLoadedBlogs] = useState([]);
    const fetch_Blogs = useCallback(
        async () => {
            try {
                const responseData = await sendBlogsRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/blogs`
                );
                setLoadedBlogs(responseData);
                // console.log('Blogs ', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendBlogsRequest],
    );



    const { isLoading: LinksIsLoading, error: LinksError, sendRequest: sendLinksRequest, clearError: clearLinksError } = useHttpClient();
    const [LoadedLinks, setLoadedLinks] = useState([]);
    const fetch_Links = useCallback(
        async () => {
            try {
                const responseData = await sendLinksRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/useful-links`
                );
                setLoadedLinks(responseData);
                // console.log('Links ', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendLinksRequest],
    );




    const { isLoading: PapersIsLoading, error: PapersError, sendRequest: sendPapersRequest, clearError: clearPapersError } = useHttpClient();
    const [LoadedPapers, setLoadedPapers] = useState([]);
    const fetch_Papers = useCallback(
        async () => {
            try {
                const responseData = await sendPapersRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/white-papers`
                );
                setLoadedPapers(responseData);
                console.log('Papers ', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendPapersRequest],
    );



    useEffect(() => {
        fetch_Podcasts();
        fetch_Programmes();
        fetch_Members();
        fetch_News();
        fetch_Projects();
        fetch_Reports();
        fetch_Case_studies();
        fetch_Webinars();
        fetch_Blogs();
        fetch_Links();
        fetch_Papers();

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


                        <Route exact path="/KNOWLEDGECENTER/REPORTS/:report_id"
                            component={(props) => <   SingleReportPageComponent {...props} reports={LoadedReports} />}
                        />


                        <Route exact path="/KNOWLEDGECENTER/REPORTS">
                            <ReportsPageComponent reports={LoadedReports} />
                        </Route>





                        <Route exact path="/KNOWLEDGECENTER/CASE_STUDIES/:case_study_id"
                            component={(props) => <   SingleCaseStudyPageComponent {...props} case_studies={LoadedCase_studies} />}
                        />


                        <Route exact path="/KNOWLEDGECENTER/CASE_STUDIES">
                            <CaseStudiesPageComponent case_studies={LoadedCase_studies} />
                        </Route>



                        {/* ----------------------------------------------------------------------------------------------------------------------------- */}
                        {/* ----------------------------------------------------------------------------------------------------------------------------- */}
                        {/* ----------------------------------------------------------------------------------------------------------------------------- */}



                        <Route exact path="/KNOWLEDGECENTER/PAPERS/:paper_id"
                            component={(props) => <   SinglePaperPageComponent {...props} papers={LoadedPapers} />}
                        />


                        <Route exact path="/KNOWLEDGECENTER/PAPERS">
                            <PapersPageComponent papers={LoadedPapers} />
                        </Route>


                        {/* ----------------------------------------------------------------------------------------------------------------------------- */}
                        {/* ----------------------------------------------------------------------------------------------------------------------------- */}
                        {/* ----------------------------------------------------------------------------------------------------------------------------- */}







                        <Route exact path="/KNOWLEDGECENTER/PODCASTS/:podcast_id"
                            component={(props) => <   SinglePodcastsPageComponent {...props} podcasts={LoadedPodcasts} />}
                        />


                        <Route exact path="/KNOWLEDGECENTER/PODCASTS">
                            <PodcastsPageComponent podcasts={LoadedPodcasts} />
                        </Route>



                        <Route exact path="/KNOWLEDGECENTER/WEBINARS/:webinar_id"
                            component={(props) => <   SingleWebinarPageComponent {...props} webinars={LoadedWebinars} />}
                        />


                        <Route exact path="/KNOWLEDGECENTER/WEBINARS">
                            <WebinarsPageComponent webinars={LoadedWebinars} />
                        </Route>




                        <Route exact path="/KNOWLEDGECENTER/BLOGS/:blog_id"
                            component={(props) => <   SingleBlogPageComponent {...props} blogs={LoadedBlogs} />}
                        />


                        <Route exact path="/KNOWLEDGECENTER/BLOGS">
                            <BlogsPageComponent blogs={LoadedBlogs} />
                        </Route>









                        <Route exact path="/KNOWLEDGECENTER/LINKS">
                            <LinksPageComponent links={LoadedLinks} />
                        </Route>




                        <Route exact path="/KNOWLEDGECENTER/PRESENTATIONS">
                            <PresintationsPageComponent />
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
                            component={(props) => <SingleWorkingGroupPageComponent  {...props} programmes_state={{ ProgrammesIsLoading, ProgrammesError, LoadedProgrammes }} />
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

