import React from 'react'
import {
    Col, Container, Row, Card, CardText, CardBody, CardLink, CardFooter,
    CardTitle, CardSubtitle
} from 'reactstrap'
import "./AboutPageComponent.css"


import intro_img from "./images//CEBCWebHeader.jpg"
import event from "./images//Clean-Air-Forum-Photo-1-385x250.jpg"


import a from "./images/1.png"
import b from "./images/2.png"
import c from "./images/3.png"
import d from "./images/4.png"
import f from "./images/6.png"
import wice from "./images//WomeninCleanEnergy.jpg"
import Member from "./images//Member.jpg"
import NEVC from "./images/NEVC.jpg"
import WorkingAreaComponent from "./WorkingAreaComponent/WorkingAreaComponent"
import aa from "./images/board/aa.png"

import SDGComponenet from './SDGComponenet/SDGComponenet'

import NavbarSlider from "./components/NavbarSlider/NavbarSlider";

function AboutPageComponent() {


    return (
        <div>
            <div style={{ color: "#FFF" }} >
                <NavbarSlider />
            </div>

            <div style={{ width: "100%", height: "2000px", position: "absolute", top: "", right: "", overflow: "hidden" }}  >
                <img src="/assets/images/sha1.jpg" alt="" style={{ width: "100%", height: "auto", position: "absolute", top: "-200px", right: "-45vw", opacity: ".5" }} />
            </div>

            <Container style={{ marginTop: "150px", marginBottom: "150px", }}>
                <Col sm="12">
                    <div class="section_header" style={{ marginBottom: "120px" }}>
                        <span class="section_header_inner">
                            Our Vision and Mission
                            </span>
                        <div className="section_header_under"></div>
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
                <WorkingAreaComponent />
            </div>



            <div style={{ width: "100%", height: "2000px", position: "absolute", top: "", right: "", overflow: "hidden" }}  >
                <img src="/assets/images/hero.png" alt="" style={{ width: "100%", height: "auto", position: "", }} />
            </div>

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
                                </CardBody>                                   <CardFooter>
                                    <div className="linkedin" style={{ fontSize: "30px" }}>
                                        <a href="https://www.linkedin.com/">
                                            <i className="fab fa-linkedin i_link" aria-hidden="true"></i>
                                        </a>
                                    </div></CardFooter>
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
                                </CardBody>                                   <CardFooter>
                                    <div className="linkedin" style={{ fontSize: "30px" }}>
                                        <a href="https://www.linkedin.com/">
                                            <i className="fab fa-linkedin i_link" aria-hidden="true"></i>
                                        </a>
                                    </div></CardFooter>
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
                                </CardBody>                                   <CardFooter>
                                    <div className="linkedin" style={{ fontSize: "30px" }}>
                                        <a href="https://www.linkedin.com/">
                                            <i className="fab fa-linkedin i_link" aria-hidden="true"></i>
                                        </a>
                                    </div></CardFooter>
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
                                </CardBody>                                   <CardFooter>
                                    <div className="linkedin" style={{ fontSize: "30px" }}>
                                        <a href="https://www.linkedin.com/">
                                            <i className="fab fa-linkedin i_link" aria-hidden="true"></i>
                                        </a>
                                    </div></CardFooter>
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
                                </CardBody>                                   <CardFooter>
                                    <div className="linkedin" style={{ fontSize: "30px" }}>
                                        <a href="https://www.linkedin.com/">
                                            <i className="fab fa-linkedin i_link" aria-hidden="true"></i>
                                        </a>
                                    </div></CardFooter>
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
                                </CardBody>                                   <CardFooter>
                                    <div className="linkedin" style={{ fontSize: "30px" }}>
                                        <a href="https://www.linkedin.com/">
                                            <i className="fab fa-linkedin i_link" aria-hidden="true"></i>
                                        </a>
                                    </div></CardFooter>
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
                                </CardBody>                                   <CardFooter>
                                    <div className="linkedin" style={{ fontSize: "30px" }}>
                                        <a href="https://www.linkedin.com/">
                                            <i className="fab fa-linkedin i_link" aria-hidden="true"></i>
                                        </a>
                                    </div></CardFooter>
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
                                </CardBody>                                   <CardFooter>
                                    <div className="linkedin" style={{ fontSize: "30px" }}>
                                        <a href="https://www.linkedin.com/">
                                            <i className="fab fa-linkedin i_link" aria-hidden="true"></i>
                                        </a>
                                    </div></CardFooter>
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
                                </CardBody>                                   <CardFooter>
                                    <div className="linkedin" style={{ fontSize: "30px" }}>
                                        <a href="https://www.linkedin.com/">
                                            <i className="fab fa-linkedin i_link" aria-hidden="true"></i>
                                        </a>
                                    </div></CardFooter>
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
                                </CardBody>                                   <CardFooter>
                                    <div className="linkedin" style={{ fontSize: "30px" }}>
                                        <a href="https://www.linkedin.com/">
                                            <i className="fab fa-linkedin i_link" aria-hidden="true"></i>
                                        </a>
                                    </div></CardFooter>
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
                                </CardBody>                                   <CardFooter>
                                    <div className="linkedin" style={{ fontSize: "30px" }}>
                                        <a href="https://www.linkedin.com/">
                                            <i className="fab fa-linkedin i_link" aria-hidden="true"></i>
                                        </a>
                                    </div></CardFooter>
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
                                </CardBody>                                   <CardFooter>
                                    <div className="linkedin" style={{ fontSize: "30px" }}>
                                        <a href="https://www.linkedin.com/">
                                            <i className="fab fa-linkedin i_link" aria-hidden="true"></i>
                                        </a>
                                    </div></CardFooter>
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
                                </CardBody>                                   <CardFooter>
                                    <div className="linkedin" style={{ fontSize: "30px" }}>
                                        <a href="https://www.linkedin.com/">
                                            <i className="fab fa-linkedin i_link" aria-hidden="true"></i>
                                        </a>
                                    </div></CardFooter>
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
                                </CardBody>                                   <CardFooter>
                                    <div className="linkedin" style={{ fontSize: "30px" }}>
                                        <a href="https://www.linkedin.com/">
                                            <i className="fab fa-linkedin i_link" aria-hidden="true"></i>
                                        </a>
                                    </div></CardFooter>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default AboutPageComponent
