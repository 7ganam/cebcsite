import React from 'react'
import "./EventPageComponent.css"
import EventCardComponent from "./EventCardComponent/EventCardComponent"
import { Col, Container, Row } from 'reactstrap'
import ev from "./header.jpg"

function EventPageComponent() {

    return (
        <div style={{ marginBottom: "20px" }}>
            <div id="header_">
                <span class="logo icon fa-paper-plane"></span>

                <h1>Upcoming events.</h1>
                <p>CEBC members and strategic partners events.</p>
            </div>

            <div class="mec-month-divider" data-toggle-divider="mec-toggle-202102-1135">
                <span>February 2021</span>
                <i class="mec-sl-arrow-down">  </i>
            </div>

            <Container className="mt-5">
                <div style={{ marginTop: "50px " }}>
                    <EventCardComponent />
                </div>
                <div style={{ marginTop: "50px " }}>
                    <EventCardComponent />
                </div>
            </Container>

            <div class="mec-month-divider" data-toggle-divider="mec-toggle-202102-1135">
                <span>March 2021</span>
                <i class="mec-sl-arrow-down">  </i>
            </div>

            <Container className="mt-5">
                <div style={{ marginTop: "50px " }}>
                    <EventCardComponent />
                </div>
            </Container>

            <Container fluid className="p-0">
                <div style={{ marginTop: "150px ", height: "250px", backgroundColor: "#1B273D", display: "flex", justifyContent: "center", alignItems: "center" }}>

                    <div style={{ color: "white", fontSize: "60px" }}>
                        Past events
                    </div>
                </div>
            </Container>

            <div class="mec-month-divider" data-toggle-divider="mec-toggle-202102-1135">
                <span>Decemper 2020</span>
                <i class="mec-sl-arrow-down">  </i>
            </div>

            <Container className="mt-5">

                <Row>

                    <Col md={6} className="p-2" >
                        <div style={{ height: "130px", backgroundColor: "rgb(229 229 229)", display: "flex", alignItems: "center", padding: "0" }}>
                            <div style={{ height: "110px", width: "110px", marginLeft: "11px" }}>
                                <img src={ev} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                            </div>
                            <div style={{ height: "120px", flexGrow: "1", marginLeft: "5px", justifyContent: "center", display: "flex", alignItems: "center" }}>
                                <div id="past_event_title" style={{ padding: "10px" }}>
                                    <div style={{ fontSize: "30px", textAlign: "left" }}>Annual General Meeting 2021</div>
                                    <div class="mec-date-details text-left my-2 " style={{ color: "#30b0c4" }}>
                                        <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                                        <span class="mec-event-d"><span class="mec-start-date-label" itemprop="startDate">23 DEC</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="p-2" >
                        <div style={{ height: "130px", backgroundColor: "rgb(229 229 229)", display: "flex", alignItems: "center", padding: "0" }}>
                            <div style={{ height: "110px", width: "110px", marginLeft: "11px" }}>
                                <img src={ev} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                            </div>
                            <div style={{ height: "120px", flexGrow: "1", marginLeft: "5px", justifyContent: "center", display: "flex", alignItems: "center" }}>
                                <div id="past_event_title" style={{ padding: "10px" }}>
                                    <div style={{ fontSize: "30px", textAlign: "left" }}>Annual General Meeting 2021</div>
                                    <div class="mec-date-details text-left my-2 " style={{ color: "#30b0c4" }}>
                                        <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                                        <span class="mec-event-d"><span class="mec-start-date-label" itemprop="startDate">23 DEC</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="p-2" >
                        <div style={{ height: "130px", backgroundColor: "rgb(229 229 229)", display: "flex", alignItems: "center", padding: "0" }}>
                            <div style={{ height: "110px", width: "110px", marginLeft: "11px" }}>
                                <img src={ev} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                            </div>
                            <div style={{ height: "120px", flexGrow: "1", marginLeft: "5px", justifyContent: "center", display: "flex", alignItems: "center" }}>
                                <div id="past_event_title" style={{ padding: "10px" }}>
                                    <div style={{ fontSize: "30px", textAlign: "left" }}>Annual General Meeting 2021</div>
                                    <div class="mec-date-details text-left my-2 " style={{ color: "#30b0c4" }}>
                                        <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                                        <span class="mec-event-d"><span class="mec-start-date-label" itemprop="startDate">23 DEC</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>


            </Container>


            <div class="mec-month-divider" data-toggle-divider="mec-toggle-202102-1135">
                <span>November 2020</span>
                <i class="mec-sl-arrow-down">  </i>
            </div>

            <Container className="mt-5">

                <Row>

                    <Col md={6} className="p-2" >
                        <div style={{ height: "130px", backgroundColor: "rgb(229 229 229)", display: "flex", alignItems: "center", padding: "0" }}>
                            <div style={{ height: "110px", width: "110px", marginLeft: "11px" }}>
                                <img src={ev} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                            </div>
                            <div style={{ height: "120px", flexGrow: "1", marginLeft: "5px", justifyContent: "center", display: "flex", alignItems: "center" }}>
                                <div id="past_event_title" style={{ padding: "10px" }}>
                                    <div style={{ fontSize: "30px", textAlign: "left" }}>Annual General Meeting 2021</div>
                                    <div class="mec-date-details text-left my-2 " style={{ color: "#30b0c4" }}>
                                        <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                                        <span class="mec-event-d"><span class="mec-start-date-label" itemprop="startDate">23 DEC</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="p-2" >
                        <div style={{ height: "130px", backgroundColor: "rgb(229 229 229)", display: "flex", alignItems: "center", padding: "0" }}>
                            <div style={{ height: "110px", width: "110px", marginLeft: "11px" }}>
                                <img src={ev} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                            </div>
                            <div style={{ height: "120px", flexGrow: "1", marginLeft: "5px", justifyContent: "center", display: "flex", alignItems: "center" }}>
                                <div id="past_event_title" style={{ padding: "10px" }}>
                                    <div style={{ fontSize: "30px", textAlign: "left" }}>Annual General Meeting 2021</div>
                                    <div class="mec-date-details text-left my-2 " style={{ color: "#30b0c4" }}>
                                        <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                                        <span class="mec-event-d"><span class="mec-start-date-label" itemprop="startDate">23 DEC</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="p-2" >
                        <div style={{ height: "130px", backgroundColor: "rgb(229 229 229)", display: "flex", alignItems: "center", padding: "0" }}>
                            <div style={{ height: "110px", width: "110px", marginLeft: "11px" }}>
                                <img src={ev} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                            </div>
                            <div style={{ height: "120px", flexGrow: "1", marginLeft: "5px", justifyContent: "center", display: "flex", alignItems: "center" }}>
                                <div id="past_event_title" style={{ padding: "10px" }}>
                                    <div style={{ fontSize: "30px", textAlign: "left" }}>Annual General Meeting 2021</div>
                                    <div class="mec-date-details text-left my-2 " style={{ color: "#30b0c4" }}>
                                        <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                                        <span class="mec-event-d"><span class="mec-start-date-label" itemprop="startDate">23 DEC</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>


            </Container>




        </div>




    )
}

export default EventPageComponent
