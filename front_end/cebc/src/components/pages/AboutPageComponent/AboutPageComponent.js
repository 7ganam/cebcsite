import React from 'react'
import {
    Col, Container, Row, Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap'
import "./AboutPageComponent.css"
import hero from "./hero.png"
import hero2 from "./hero.png"

import intro_img from "./CEBCWebHeader.jpg"
import event from "./Clean-Air-Forum-Photo-1-385x250.jpg"

import quote from "./quote3.png"
import lead from "./lead.jpg"
import ce from "./ce.jpg"
import gvt from "./gvt.jpg"
import a from "./1.png"
import b from "./2.png"
import c from "./3.png"
import d from "./4.png"
import e from "./5.png"
import f from "./6.png"
import wice from "./WomeninCleanEnergy.jpg"
import Member from "./Member.jpg"
import NEVC from "./NEVC.jpg"

import aa from "./board/aa.png"
import bb from "./board/bb.jpg"
import cc from "./board/cc.jpg"
import dd from "./board/dd.jpg"
import ee from "./board/ee.jpg"
import ff from "./board/ff.jpg"

function AboutPageComponent() {

    return (
        <div>
            <div style={{ position: "absolute", width: "100%", top: "100px" }}>
                <img src={hero} width="100%" height="auto" alt="" />
            </div>

            <Container style={{ marginTop: "150px", marginBottom: "150px" }}>
                <Row id="intro_row"  >
                    <Col xs="12">

                        <div className="section_head_title " >   <div className="panel__title">about us</div> </div>
                    </Col>
                    <Col md="6" style={{ height: "400px", borderStyle: "", padding: "0px" }}>
                        <img src={intro_img} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                    </Col>
                    <Col md="6" style={{ height: "400px" }}>
                        <div className="d-flex justify-content-center align-items-center ml-4" style={{ height: "100%" }}>
                            <img src={quote} style={{ height: "40px", width: "auto", position: "absolute", top: "30px", left: "20px", opacity: ".5" }} alt="" />
                            <div style={{ textAlign: "left", fontSize: "20px" }}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                                consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
                                velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
                                praesent luptatum zzril delenit augue duis dolore te feugait nulla
                                facilisi.
                            </div>
                        </div>
                    </Col>
                </Row>




                {/* TODO:: separate this component into its own conponent ... it uses the asseets folder in public folder got it from Arcana by HTML5 UP */}
                <Row id="vision_mission_row" style={{ marginTop: "100px" }} >
                    <Col sm="12">
                        <div className="section_head_title" >
                            <div className="panel__title">
                                vision and mission
                            </div>
                        </div>
                    </Col>

                    <Col className="vision_mission_col justify-content-center align-items-center d-flex flex-column mb-5" md="4">
                        <div class="box highlight">
                            {/* <i class="icon solid major fa-paper-plane"></i> */}
                            <i class="icon solid major fas fa-hands-helping"></i>
                            <h3>leading forum</h3>
                            <p>
                                Establish a leading forum for companies and government entities focused on the development and deployment of clean energy in the MENA region;
                                    </p>
                        </div>
                    </Col>
                    <Col className="vision_mission_col justify-content-center align-items-center d-flex flex-column mb-5" md="4">
                        <div class="box highlight">
                            <i class="icon solid major fa-pencil-alt"></i>
                            <h3>Promote the clean energy</h3>
                            <p>

                                Promote the clean energy industry beginning to flourish in the region and inform the wider community of the benefits of the sector;
                                        </p>
                        </div>
                    </Col>
                    <Col className="vision_mission_col justify-content-center align-items-center d-flex flex-column mb-5" md="4">
                        <div class="box highlight">
                            <i class="icon solid major fa-wrench"></i>
                            <h3>Collaborate with governments</h3>
                            <p>
                                Collaborate with government agencies and other stakeholders in policy development and regulation of this rapidly developing and exciting sector;
                                        </p>
                        </div>
                    </Col>
                    <Col className="vision_mission_col justify-content-center align-items-center d-flex flex-column mb-5" md="4">
                        <div class="box highlight">
                            <i class="icon solid major fas fa-hands-helping"></i>
                            <h3>strategic alliances</h3>
                            <p>
                                Develop a series of strategic alliances with research institutions, international associations, media and others to drive the delivery of clean energy solutions for MENA;
                                        </p>
                        </div>
                    </Col>
                    <Col className="vision_mission_col justify-content-center align-items-center d-flex flex-column mb-5" md="4">
                        <div class="box highlight">
                            <i class="icon solid major fas fa-lightbulb"></i>
                            <h3>data and information</h3>
                            <p>
                                Coordinate the gathering of data and information on the sector to ensure relevant benchmarking and transparency in the sectors development; and
                                        </p>
                        </div>
                    </Col>
                    <Col className="vision_mission_col justify-content-center align-items-center d-flex flex-column mb-5" md="4">
                        <div class="box highlight">
                            <i class="icon solid major  fa-university"></i>
                            <h3>assist governments</h3>
                            <p>
                                Support and assist governments, industry and the community in the region to meet low carbon targets and sustainability goals.

                                        </p>
                        </div>
                    </Col>

                </Row>




                <div id="sdg_container">
                    <div id="sdgbg"></div>
                    <Row id="SDGs_row" className="justify-content-center">
                        <Col sm="12">
                            <div className="section_head_title" >
                                <div className="panel__title">
                                    We work with an aim to achieve the
                                    Sustainable Development Goals (SDGs)
                                </div>
                            </div>
                        </Col>
                        <Col className="SDGs_col justify-content-center align-items-center d-flex flex-column mb-5" md="2">
                            <div className="SDGs_div mb-2">
                                <img src={a} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                            </div>
                            <div className="SDGs_title">SDGs</div>
                        </Col>
                        <Col className="SDGs_col justify-content-center align-items-center d-flex flex-column mb-5" md="2">
                            <div className="SDGs_div mb-2">
                                <img src={b} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                            </div>
                            <div className="SDGs_title">SDGs</div>
                        </Col>
                        <Col className="SDGs_col justify-content-center align-items-center d-flex flex-column mb-5" md="2">
                            <div className="SDGs_div mb-2">
                                <img src={c} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                            </div>
                            <div className="SDGs_title">SDGs</div>
                        </Col>
                        <Col className="SDGs_col justify-content-center align-items-center d-flex flex-column mb-5" md="2">
                            <div className="SDGs_div mb-2">
                                <img src={d} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                            </div>
                            <div className="SDGs_title">SDGs</div>
                        </Col>
                        <Col className="SDGs_col justify-content-center align-items-center d-flex flex-column mb-5" md="2">
                            <div className="SDGs_div mb-2">
                                <img src={f} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                            </div>
                            <div className="SDGs_title">SDGs</div>
                        </Col>
                    </Row>


                </div>div
                <Row id="working_area_row" className="justify-content-center">

                    <Col sm="12">
                        <div className="section_head_title" >
                            <div className="panel__title">
                                OUR WORKING AREA
                            </div>
                        </div>
                    </Col>


                    <Col id="working_area_col_1" className=" justify-content-center align-items-center d-flex flex-column" md="4">

                        <div className="vision_mission_col justify-content-center align-items-center d-flex flex-column my-4" md="12">
                            <div className="working_area_icon mb-2" >
                                <img src={wice} style={{ objectFit: "cover", width: "100%", height: "100%" }} alt="" />
                            </div>
                            <div className="working_area_icob_title">PROGRAMMES</div>
                        </div>
                        <div className="vision_mission_col justify-content-center align-items-center d-flex flex-column my-4" md="12">
                            <div className="working_area_icon mb-2">
                                <img src={Member} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                            </div>
                            <div className="working_area_icob_title">EVENTS</div>
                        </div>
                        <div className="vision_mission_col justify-content-center align-items-center d-flex flex-column my-4" md="12">
                            <div className="working_area_icon mb-2">
                                <img src={NEVC} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                            </div>
                            <div className="working_area_icob_title">WORKING GROUPS</div>
                        </div>

                    </Col>

                    <Col id="working_area_col_2" className=" justify-content-center align-items-center d-flex flex-column " md="8">
                        <div className="working_area_div_2 mb-2 d-flex flex-column" style={{ height: "100%", width: "100%" }} >
                            <div className=" justify-content-center align-items-center d-flex flex-column ">
                                <div style={{ height: "40%", width: "100%", backgroundColor: "red", marginBottom: "10px " }}>
                                    <img src={event} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                </div>
                                <div style={{ height: "40%", width: "100%", backgroundColor: "red" }}>
                                    <img src={event} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>

            </Container>

            <Container className="partition_separator board_separator" fluid>
                <div>
                    <div className="panel__title">
                        THE CEBC BOARD
                    </div>
                </div>
            </Container>

            <Container id="board_content" >
                <Row className=" justify-content-center align-items-center">
                    <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3" >
                        <div className="board_div mb-2">
                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                </CardBody>
                                <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                <CardBody>
                                    <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                    <CardLink href="#"> Link</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                        <div className="board_div mb-2">

                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                </CardBody>
                                <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                <CardBody>
                                    <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                    <CardLink href="#"> Link</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                        <div className="board_div mb-2">

                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                </CardBody>
                                <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                <CardBody>
                                    <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                    <CardLink href="#"> Link</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                        <div className="board_div mb-2">

                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                </CardBody>
                                <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                <CardBody>
                                    <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                    <CardLink href="#"> Link</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                        <div className="board_div mb-2">

                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                </CardBody>
                                <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                <CardBody>
                                    <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                    <CardLink href="#"> Link</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                        <div className="board_div mb-2">

                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                </CardBody>
                                <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                <CardBody>
                                    <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                    <CardLink href="#"> Link</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                        <div className="board_div mb-2">

                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                </CardBody>
                                <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                <CardBody>
                                    <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                    <CardLink href="#"> Link</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                        <div className="board_div mb-2">

                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                </CardBody>
                                <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                <CardBody>
                                    <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                    <CardLink href="#"> Link</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>


                </Row>
            </Container>

            <Container className="partition_separator board_separator" fluid>

                <div className="panel__title">
                    BOARD ADVISORY COMMITTEE
                </div>
            </Container>

            <Container id="board_content_2" >
                <Row className=" justify-content-center align-items-center" >
                    <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3" >
                        <div className="board_div mb-2">

                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                </CardBody>
                                <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                <CardBody>
                                    <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                    <CardLink href="#"> Link</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                        <div className="board_div mb-2">

                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                </CardBody>
                                <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                <CardBody>
                                    <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                    <CardLink href="#"> Link</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                        <div className="board_div mb-2">

                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                </CardBody>
                                <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                <CardBody>
                                    <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                    <CardLink href="#"> Link</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                        <div className="board_div mb-2">

                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                </CardBody>
                                <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                <CardBody>
                                    <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                    <CardLink href="#"> Link</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>



                </Row>
            </Container>

            <Container className="partition_separator board_separator" fluid>
                <div className="panel__title">
                    CEBC TEAM
                </div>
            </Container>

            <Container id="board_content_3" >
                <Row className=" justify-content-center align-items-center" >
                    <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3" >
                        <div className="board_div mb-2">

                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                </CardBody>
                                <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                <CardBody>
                                    <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                    <CardLink href="#"> Link</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                    <Col className="board_col justify-content-center align-items-center d-flex flex-column my-2" md="4" lg="3">
                        <div className="board_div mb-2">

                            <Card>
                                <CardBody>
                                    <CardTitle tag="h5">MHAIRI MAIN GARCIA</CardTitle>
                                </CardBody>
                                <img src={aa} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />
                                <CardBody>
                                    <CardText>Partner, Dentons Dubai and Vice-Chair of the Clean Energy Business Council.</CardText>
                                    <CardLink href="#"> Link</CardLink>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default AboutPageComponent
