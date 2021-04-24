import React, { useState, useCallback, useEffect } from 'react'
import './WhatWeDoPageComponent.css'

import { Col, Container, Row } from 'reactstrap'




import mena from "./../images/mena1.png"

import WorkingAreaComponent from "./../WorkingAreaComponent/WorkingAreaComponent"

import SDGComponenet from './../SDGComponenet/SDGComponenet'

import NavbarSlider from "./../components/NavbarSlider/NavbarSlider";

import { useHttpClient } from "../../../../hooks/http-hook"



function WhatWeDoPageComponent() {



    const { sendRequest: sendcontentRequest } = useHttpClient();
    const [Loadedcontent, setLoadedcontent] = useState([]);
    const fetch_content = useCallback(
        async () => {
            try {
                const responseData = await sendcontentRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/about-page`
                );
                setLoadedcontent(responseData);
                // console.log('content ', responseData)
            } catch (err) {
                console.log({ err })
            }
        },
        [sendcontentRequest],
    );

    useEffect(() => {
        fetch_content();
    }, [])

    return (

        <div>
            <div style={{ color: "#FFF" }} >
                <NavbarSlider />
            </div>

            {/* <div style={{ width: "100%", height: "2000px", position: "absolute", top: "", right: "", overflow: "hidden" }}  >
                <img src="/assets/images/sha1.jpg" alt="" style={{ width: "100%", height: "auto", position: "absolute", top: "-200px", right: "-45vw", opacity: ".5" }} />
            </div> */}

            <div style={{ width: "100%", height: "2000px", position: "absolute", top: "", right: "", overflow: "hidden" }}  >
                <img src={mena} alt="" style={{
                    width: "100%", height: "auto", position: "absolute", right: ' 0', top: '200px', filter: 'gray', filter: ' grayscale(1)', opacity: ' .1',
                }} />
            </div>

            <Container style={{ marginTop: "50px", marginBottom: "50px", }}>
                <Col sm="12">
                    <div class="section_header" style={{ marginBottom: "120px" }}>
                        <span class="section_header_inner" style={{ fontWeight: "bold" }}>
                            Our Vision and Mission
                            </span>
                        {/* <div className="section_header_under" style={{ width: "80%", marginTop: '20px' }}></div> */}
                    </div>
                </Col>
                <Row style={{ position: "relative", top: "" }}>

                    <Col className="p-md-2" md={{ size: 6 }}>
                        <div className="media  media_element">
                            <div className="vision_icon" style={{}}>
                                <i className="solid  fas fa-hands-helping"></i>
                            </div>

                            <div className="media-body align-content-start text-left">
                                <h3 className="mt-0 media_header">leading forum</h3>
                                    Establish a leading forum for companies and government entities focused on the development and deployment of clean energy in the MENA region;
                                </div>
                        </div>

                    </Col>
                    <Col className="p-md-2" md={{ size: 6, order: 2, offset: 6 }}>
                        <div className="media  media_element">
                            <div className="vision_icon" style={{}}>
                                <i class="solid fas fa-charging-station"></i>
                            </div>

                            <div className="media-body align-content-start text-left">
                                <h3 className="mt-0 media_header">Promote the clean energy</h3>
                                    Promote the clean energy industry beginning to flourish in the region and inform the wider community of the benefits of the sector;
                                </div>
                        </div>

                    </Col>


                </Row>
                <Row style={{ position: "relative", top: "" }}>

                    <Col className="p-md-2" md={{ size: 6 }}>
                        <div className="media  media_element">
                            <div className="vision_icon" style={{}}>
                                <i class="fas fa-file-contract"></i>
                            </div>

                            <div className="media-body align-content-start text-left">
                                <h3 className="mt-0 media_header">Collaborate with governments</h3>
                                    Collaborate with government agencies and other stakeholders in policy development and regulation of this rapidly developing and exciting sector;
                                </div>
                        </div>

                    </Col>
                    <Col className="p-md-2" md={{ size: 6, order: 2, offset: 6 }}>
                        <div className="media  media_element">
                            <div className="vision_icon" style={{}}>
                                <i class="fas fa-chess"></i>
                            </div>

                            <div className="media-body align-content-start text-left">
                                <h3 className="mt-0 media_header">strategic alliances</h3>
                                    Develop a series of strategic alliances with research institutions, international associations, media and others to drive the delivery of clean energy solutions for MENA;
                                </div>
                        </div>

                    </Col>

                </Row>
                <Row style={{ position: "relative", top: "" }}>

                    <Col className="p-md-2" md={{ size: 6 }}>
                        <div className="media  media_element">
                            <div className="vision_icon" style={{}}>
                                <i class="solid  fas fa-lightbulb"></i>
                            </div>

                            <div className="media-body align-content-start text-left">
                                <h3 className="mt-0 media_header">data and information</h3>
                                    Coordinate the gathering of data and information on the sector to ensure relevant benchmarking and transparency in the sectors development;
                                </div>
                        </div>

                    </Col>
                    <Col className="p-md-2" md={{ size: 6, order: 2, offset: 6 }}>
                        <div className="media  media_element">
                            <div className="vision_icon" style={{}}>
                                <i class="  fas  fa-university"></i>
                            </div>

                            <div className="media-body align-content-start text-left">
                                <h3 className="mt-0 media_header"> assist governments</h3>
                                    Support and assist governments, industry and the community in the region to meet low carbon targets and sustainability goals.
                                    </div>
                        </div>

                    </Col>

                </Row>

            </Container>


            <div style={{ marginTop: "", backgroundColor: "#f7f7f7", height: "500px", paddingTop: "1px" }}>
                <SDGComponenet />
            </div>

            <div style={{ marginTop: "", backgroundColor: "#f7f7f7", paddingTop: "1px" }}>
                <WorkingAreaComponent gallery={Loadedcontent.gallery} />
            </div>





        </div>

    )
}

export default WhatWeDoPageComponent
