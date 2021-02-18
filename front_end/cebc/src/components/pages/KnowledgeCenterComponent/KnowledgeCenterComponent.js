import React from 'react'
import "./KnowledgeCenterComponent.css"
import KnowledgeCardComponent from "./KnowledgeCardComponent/KnowledgeCardComponent"
import { Container, Row, Col } from 'reactstrap'
// import casestudy from "./images/case.jpg"
// import blog from "./images/blog.jpg"
// import reports from "./images/reports.png"
// import web from "./images/web.png"

function KnowledgeCenterComponent() {
    return (
        <div >

            <div id="header_knowledge">
                <i class="icon solid major fas fa-lightbulb"></i>
                <h1>Knowledge Center.</h1>
                <p>The archives of our 10 years experience in the industry.</p>
            </div>
            <Container style={{ marginTop: "130px ", marginBottom: "130px " }}>


                <Row className=" justify-content-center">
                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <div className="working_group_col_div">
                            <KnowledgeCardComponent image="reports.png" title="REPORTS" />
                        </div>
                    </Col>
                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <div className="working_group_col_div" >
                            <KnowledgeCardComponent image="web.jpg" title="WEBINARS" />
                        </div>
                    </Col>
                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <div className="working_group_col_div">
                            <KnowledgeCardComponent image="case.jpg" title="RESEARCH PAPER & CASE STUDY" />
                        </div>

                    </Col>
                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <div className="working_group_col_div" >
                            <KnowledgeCardComponent image="blog.jpg" title="BLOG" />
                        </div>
                    </Col>
                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <div className="working_group_col_div">
                            <KnowledgeCardComponent image="news.jfif" title="NEWSLETTER" />
                        </div>

                    </Col>
                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <div className="working_group_col_div" >
                            <KnowledgeCardComponent image="mags.jpg" title="MAGAZINES" />
                        </div>
                    </Col>
                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <div className="working_group_col_div">
                            <KnowledgeCardComponent image="AboutCEBC-1.jpg" title="USEFUL LINKS" />
                        </div>

                    </Col>
                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <div className="working_group_col_div" >
                            <KnowledgeCardComponent image="Efficiency.jpg" title="WHITE PAPER" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default KnowledgeCenterComponent
