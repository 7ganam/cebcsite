import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './EventNewsPageComponent.css'
import { Link } from "react-router-dom";
import MITCardComponent from './MITCardComponent/MITCardComponent'
import news from './image/news.jpg'
import events from './image/events.jpg'

function EventNewsPageComponent() {
    return (
        <div style={{ marginTop: '140px' }}>
            <Container>
                <Row className=" justify-content-center">
                    <div class="section_header" style={{ marginTop: "30px" }}>
                        <span class="section_header_inner">
                            EVENTS & NEWS
                            </span>
                        <div className="section_header_under"></div>
                    </div>
                </Row>
                <Row className=" justify-content-center" style={{ marginTop: "40px" }}>

                    <Col className="working_group_col" xs="12" md="7" lg="6" style={{}}>
                        <Link className="" to={`/EVENTS_NEWS/News`}>
                            <div className="working_group_col_div">
                                <MITCardComponent image={news} title={`news`} />
                            </div>
                        </Link>
                    </Col>
                    <Col className="working_group_col" xs="12" md="7" lg="6" style={{}}>
                        <Link className="" to={`/EVENTS_NEWS/All`}>
                            <div className="working_group_col_div">
                                <MITCardComponent image={events} title={`events`} />
                            </div>
                        </Link>
                    </Col>
                </Row>
                <Row className=" justify-content-center">
                    <div className="end_div">
                        <h4 className="end_text">
                            {/* BECOME A MEMBER */}
                        </h4>
                    </div>
                </Row>


            </Container>
        </div>
    )
}

export default EventNewsPageComponent
