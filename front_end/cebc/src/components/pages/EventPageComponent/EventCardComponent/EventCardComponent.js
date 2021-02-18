import React from 'react'
import { Col, Row } from 'reactstrap'
import ev from "./header.jpg"
import './EventCardComponent.css'
function EventCardComponent() {
    return (
        <div style={{ marginTop: "15px", marginBottom: "15px" }}>
            <Row style={{ minHeight: "250px ", width: "100%", marginTop: "15px" }}>
                <Col className="event_box" md={3} style={{}}>
                    <img src={ev} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                </Col>
                <Col className="event_box" md={6} style={{}}>
                    <div id="event_body">
                        <div id="event_title">
                            Annual General Meeting 2021
                        </div>
                        <div id="event_text">
                            You are invited to attend NBC´s Annual General Meeting 2021 Date You are invited to attend NBC´s Annual General Meeting 2021 Date: ... You are invited to attend NBC´s Annual General Meeting 2021 Date: ...You are invited to attend NBC´s Annual General Meeting 2021 Date: ...You are invited to attend NBC´s Annual General Meeting 2021 Date: ...
                        </div>
                    </div>
                </Col>
                <Col className="event_box d-flex justify-align-content-start align-items-center" md={3}>
                    <div class="mec-event-meta mec-color-before p-3">
                        <div class="mec-date-details text-left my-2">
                            <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                            <span class="mec-event-d"><span class="mec-start-date-label" itemprop="startDate">23 Feb</span></span>
                        </div>

                        <div class="mec-time-details">
                            <i class="fas fa-clock mr-2 my-2"></i>
                            <span class="mec-start-time">6:00 PM</span> - <span class="mec-end-time">8:00 PM</span>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row style={{ minHeight: "57px ", width: "100%", marginTop: "0px" }}>
                <Col className="event_box" md={12} style={{ backgroundColor: "#FFA600" }}>
                </Col>
            </Row>
        </div>
    )
}

export default EventCardComponent
