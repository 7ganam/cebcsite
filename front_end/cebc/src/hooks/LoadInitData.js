
import { useState, useEffect, useCallback } from 'react';
import { useHttpClient } from "./http-hook"

import React from 'react'

function useInitLoadedData() {


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
                // console.log('Papers ', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendPapersRequest],
    );


    const { isLoading: Entity_sIsLoading, error: Entity_sError, sendRequest: sendEntity_sRequest, clearError: clearEntity_sError } = useHttpClient();
    const [LoadedEntity_s, setLoadedEntity_s] = useState([]);
    const fetch_Entity_s = useCallback(
        async () => {
            try {
                const responseData = await sendEntity_sRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/entities`
                );
                setLoadedEntity_s(responseData);
                console.log('fetched_Entity_s ', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendEntity_sRequest],
    );



    useEffect(() => {
        fetch_Podcasts();
        fetch_Programmes();
        fetch_Entity_s();
        fetch_News();
        fetch_Projects();
        fetch_Reports();
        fetch_Case_studies();
        fetch_Webinars();
        fetch_Blogs();
        fetch_Links();
        fetch_Papers();

    }, []);




    return { LoadedEntity_s, LoadedPapers, LoadedLinks, LoadedBlogs, LoadedWebinars, LoadedPodcasts, LoadedCase_studies, LoadedNewsCount, LoadedNews, LoadedProjects, LoadedProgrammes, LoadedReports };
}

export default useInitLoadedData
