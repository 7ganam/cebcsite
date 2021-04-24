import React from 'react'
import { Col, Row } from 'reactstrap'
import './VideoComponent.css'

function VideoComponent() {
    return (
        <div id="video_section" style={{}}>
            <div id="video_top_shadow" >

            </div>
            <div id="video_bottom_shadow" >

            </div>
            <div id="video_text">

                <Row>
                    <Col md="8" className="justify-content-start text-left mx-5">
                        <div id="video_title">
                            Linking science, innovation, and policy to transform the world's energy systems.
                        </div>
                        <div className="ml-2 ml-md-0">
                            Established with a purpose on creating dialogue between public and private sectors in the UAE and MENA Region to support much needed regulation and policy to support the development of clean energy transition
                        </div>

                    </Col>
                </Row>


            </div>
            <video id='home_video' autoplay="" muted loop plays-inline="" data-vscid="sbql8lfln" >
                {/* <source src="//energy.mit.edu/wp-content/uploads/2018/12/homepage-video.mp4" type="video/mp4" />
                <source src="//energy.mit.edu/wp-content/uploads/2018/12/homepage-video.ogv" type="video/ogg" /> */}
                <source src="//cebc.s3.eu-central-1.amazonaws.com/c9_da5fc7ea05.mp4" type="video/mp4" />
                <source src="//cebc.s3.eu-central-1.amazonaws.com/c9_da5fc7ea05.mp4" type="video/mp4" />

                {/* <source src="//energy.mit.edu/wp-content/uploads/2018/12/homepage-video.ogv" type="video/ogg" /> */}
            </video>
        </div>
    )
}

export default VideoComponent
