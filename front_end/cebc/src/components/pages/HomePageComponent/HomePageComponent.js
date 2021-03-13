import React, { useEffect } from 'react'

import NewsComponent from "./NewsComponent/NewsComponent"
import WorkingGroupsComponent from "./WorkingGroupsComponent/WorkingGroupsComponent"
import "./HomePageComponent.css"
import VideoComponent from './VideoComponent/VideoComponent'
import { TwitterTimelineEmbed } from 'react-twitter-embed';



export default function HomePageComponent(props) {


    useEffect(() => {
        window.$("#rcbrand-demo").rcbrand({
            visibleItems: 4
        });

    }, [])


    return (
        <div>

            <VideoComponent />
            <div>

                <ul id="rcbrand-demo">
                    <li><img src="/members/m2.jpg" /></li>
                    <li><img src="/members/m2.jpg" /></li>
                    <li><img src="/members/m2.jpg" /></li>
                    <li><img src="/members/m2.jpg" /></li>
                    <li><img src="/members/m2.jpg" /></li>
                </ul>
            </div>

            <div id="news_section">
                <NewsComponent />
            </div>
            <div id="working_groups_section" style={{ marginTop: "100px" }}>
                <WorkingGroupsComponent programmes_state={props.programmes_state} />
            </div>

            <div class="section_header" style={{ marginTop: "100px" }}>
                <span class="section_header_inner">
                    our socials
                            </span>
                <div className="section_header_under"></div>
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
