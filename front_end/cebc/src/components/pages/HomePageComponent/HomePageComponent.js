import React, { useEffect } from 'react'

import NewsComponent from "./NewsComponent/NewsComponent"
import WorkingGroupsComponent from "./WorkingGroupsComponent/WorkingGroupsComponent"
import "./HomePageComponent.css"
import VideoComponent from './VideoComponent/VideoComponent'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import MemebersCarouselComponent from "./MemebersCarouselComponent/MemebersCarouselComponent"
import CallToAction from '../../shared/CallToAction/CallToAction'
import PodcastsComponent from './PodcastsComponent/PodcastsComponent'

export default function HomePageComponent(props) {



    console.log(`latest_events`, props.LoadedPodcasts)


    return (
        <div style={{ overflow: 'hidden' }}>

            <VideoComponent />

            {props.members.length > 0 &&
                <div style={{ marginTop: "60px" }}>

                    <MemebersCarouselComponent members={props.members} />

                </div>
            }

            <div id="news_section" style={{ marginTop: "40px" }}>
                <NewsComponent latest_news={props.latest_news} latest_events={props.latest_events} />
            </div>



            <div id="working_groups_section" style={{ marginTop: "100px", backgroundColor: "#f7f7f7", paddingBottom: "100px " }}>
                <WorkingGroupsComponent programmes_state={props.programmes_state} />
            </div>


            <PodcastsComponent podcasts={props.LoadedPodcasts.length > 3 ? props.LoadedPodcasts.slice(0, 3) : props.LoadedPodcasts} />

            <div class="section_header" style={{ marginTop: "60px" }}>
                <span class="section_header_inner">
                    Social FEEDS
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
