
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarComponent from './components/shared/NavbarComponent/NavbarComponent'
import FooterComponent from './components/shared/FooterComponent/FooterComponent'
import HomePageComponent from './components/pages/HomePageComponent/HomePageComponent'

import MembersPageComponent from './components/pages/MembersPageComponent/MembersPageComponent'
import SingleMemberPageComponent from './components/pages/MembersPageComponent/SingleMemberPageComponent/SingleMemberPageComponent'


import AboutPageComponent from './components/pages/AboutPageComponent/AboutPageComponent'
import WhatWeDoPageComponent from './components/pages/AboutPageComponent/WhatWeDoPageComponent/WhatWeDoPageComponent'
import FaqPageComponent from './components/pages/AboutPageComponent/FaqPageComponent/FaqPageComponent'
import BoardPageComponent from './components/pages/AboutPageComponent/BoardPageComponent/BoardPageComponent'




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

// import { useHttpClient } from "./hooks/http-hook"
import useInitLoadedData from "./hooks/LoadInitData"
import { useEffect } from 'react';



export default function MainComponent() {

    const { LoadedEntity_s, LoadedPapers, LoadedLinks, LoadedBlogs, LoadedWebinars, LoadedPodcasts, LoadedCase_studies, LoadedNews, LoadedProjects, LoadedProgrammes, LoadedReports } = useInitLoadedData();





    useEffect(() => {


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
                            <HomePageComponent programmes_state={{ LoadedProgrammes }} members={LoadedEntity_s} latest_news={LoadedNews} />
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
                                (props) => <   SingleMemberPageComponent {...props} members={LoadedEntity_s} />
                            }
                        />

                        <Route exact path="/MEMBERS">
                            <MembersPageComponent members={LoadedEntity_s} />
                        </Route>



                        <Route path="/groups_programs/:group_id"
                            component={(props) => <SingleWorkingGroupPageComponent  {...props} programmes_state={{ LoadedProgrammes }} />
                            }
                        />

                        <Route exact path="/groups_programs">
                            <WorkingGroupsPageComponent programmes_state={{ LoadedProgrammes }} />
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

