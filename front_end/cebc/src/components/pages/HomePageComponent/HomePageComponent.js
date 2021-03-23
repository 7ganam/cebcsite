import React, { useEffect } from 'react'

import NewsComponent from "./NewsComponent/NewsComponent"
import WorkingGroupsComponent from "./WorkingGroupsComponent/WorkingGroupsComponent"
import "./HomePageComponent.css"
import VideoComponent from './VideoComponent/VideoComponent'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import MemebersCarouselComponent from "./MemebersCarouselComponent/MemebersCarouselComponent"


export default function HomePageComponent(props) {

    // console.log(`homeprops.members`, props.members)


    return (
        <div style={{ overflow: 'hidden' }}>

            <VideoComponent />

            <div id="news_section" style={{ marginTop: "60px" }}>
                <NewsComponent latest_news={props.latest_news} />
            </div>
            {props.members.length > 0 &&

                <MemebersCarouselComponent members={props.members} />
            }
            <div id="working_groups_section" style={{ marginTop: "100px", backgroundColor: "#f7f7f7", paddingBottom: "100px " }}>
                <WorkingGroupsComponent programmes_state={props.programmes_state} />
            </div>

            <div class="section_header" style={{ marginTop: "60px" }}>
                <span class="section_header_inner">
                    Socials
                </span>
                <div className="section_header_under"></div>
            </div>


            <div id="twtr_container" style={{ marginTop: "70px", marginBottom: '70px' }}>
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
