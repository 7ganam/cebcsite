import React from 'react'

import NewsComponent from "./NewsComponent/NewsComponent"
import WorkingGroupsComponent from "./WorkingGroupsComponent/WorkingGroupsComponent"
import "./HomePageComponent.css"
import VideoComponent from './VideoComponent/VideoComponent'
import { TwitterTimelineEmbed } from 'react-twitter-embed';


export default function HomePageComponent() {
    return (
        <div>


            <VideoComponent />

            <div id="news_section">
                <NewsComponent />
            </div>
            <div id="working_groups_section">
                <WorkingGroupsComponent />
            </div>

            <div style={{ marginTop: "100px" }}>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="CEBC2"
                    options={{ height: 600, width: 500 }}
                    style={{ height: "600px", width: "400px" }}
                />
            </div>





        </div>

    )
}
