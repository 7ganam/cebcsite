import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import { Carousel } from 'react-responsive-carousel';


import './WorkingAreaComponent.css'
import wice from "../images//WomeninCleanEnergy.jpg"
import Member from "../images//Member.jpg"
import NEVC from "../images/NEVC.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function WorkingAreaComponent() {
    return (
        <div>
            <div class="section_header" style={{ margin: "200px 0 100px 0px" }}>
                <span class="section_header_inner">
                    Our Working Areas
                            </span>
                <div className="section_header_under"></div>
            </div>

            <Container id="main_working_container" fluid>
                <Container id="sub_working_container" >
                    <Row>
                        <Col md={4} className="d-flex justify-content-center align-items-center">
                            <div className="working_card">
                                <div style={{ width: "150px", height: "150px", marginTop: "38px", borderRadius: "100%", overflow: "hidden", }}>
                                    <img src={Member} alt="wice" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </div>

                                <div style={{ color: "#FFB800", height: "0", width: "70%", backgroundColor: "#FFB800", marginTop: "80px", marginBottom: "9px" }}>  </div>
                                <div style={{ color: "white", fontSize: "30px", fontFamily: "'Black Ops One', cursive" }}>
                                    working groups
                                 </div>
                                <div style={{ color: "#FFB800", height: "3px", width: "70%", backgroundColor: "#FFB800", marginTop: "12px" }}>  </div>

                            </div>
                        </Col>
                        <Col md={4} className="d-flex justify-content-center align-items-center">
                            <div className="working_card middle_working_card">
                                <div style={{ width: "150px", height: "150px", marginTop: "38px", borderRadius: "100%", overflow: "hidden", }}>
                                    <img src={wice} alt="wice" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </div>

                                <div style={{ color: "#FFB800", height: "0", width: "70%", backgroundColor: "#FFB800", marginTop: "80px", marginBottom: "9px" }}>  </div>
                                <div style={{ color: "white", fontSize: "30px", fontFamily: "'Black Ops One', cursive" }}>
                                    Programmes
                                 </div>
                                <div style={{ color: "#FFB800", height: "3px", width: "70%", backgroundColor: "#FFB800", marginTop: "12px" }}>  </div>

                            </div>
                        </Col>
                        <Col md={4} className="d-flex justify-content-center align-items-center">
                            <div className="working_card">
                                <div style={{ width: "150px", height: "150px", marginTop: "38px", borderRadius: "100%", overflow: "hidden", }}>
                                    <img src={NEVC} alt="wice" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </div>

                                <div style={{ color: "#FFB800", height: "0", width: "70%", backgroundColor: "#FFB800", marginTop: "80px", marginBottom: "9px" }}>  </div>
                                <div style={{ color: "white", fontSize: "30px", fontFamily: "'Black Ops One', cursive" }}>
                                    Events
                                 </div>
                                <div style={{ color: "#FFB800", height: "3px", width: "70%", backgroundColor: "#FFB800", marginTop: "12px" }}>  </div>
                            </div>
                        </Col>
                    </Row>

                </Container>



                <Carousel autoPlay>
                    <div>
                        <img style={{ height: "300px", width: "auto" }} src={wice} alt="wice" className="yours-custom-class" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img style={{ height: "300px", width: "auto" }} src={NEVC} alt="wice" className="yours-custom-class" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img style={{ height: "300px", width: "auto" }} src={wice} alt="wice" className="yours-custom-class" />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img style={{ height: "300px", width: "auto" }} src={wice} alt="wice" className="yours-custom-class" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img style={{ height: "300px", width: "auto" }} src={NEVC} alt="wice" className="yours-custom-class" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img style={{ height: "300px", width: "auto" }} src={wice} alt="wice" className="yours-custom-class" />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img style={{ height: "300px", width: "auto" }} src={wice} alt="wice" className="yours-custom-class" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img style={{ height: "300px", width: "auto" }} src={NEVC} alt="wice" className="yours-custom-class" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img style={{ height: "300px", width: "auto" }} src={wice} alt="wice" className="yours-custom-class" />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img style={{ height: "300px", width: "auto" }} src={wice} alt="wice" className="yours-custom-class" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img style={{ height: "300px", width: "auto" }} src={NEVC} alt="wice" className="yours-custom-class" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img style={{ height: "300px", width: "auto" }} src={wice} alt="wice" className="yours-custom-class" />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img style={{ height: "300px", width: "auto" }} src={wice} alt="wice" className="yours-custom-class" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img style={{ height: "300px", width: "auto" }} src={NEVC} alt="wice" className="yours-custom-class" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img style={{ height: "300px", width: "auto" }} src={wice} alt="wice" className="yours-custom-class" />
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img style={{ height: "300px", width: "auto" }} src={wice} alt="wice" className="yours-custom-class" />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img style={{ height: "300px", width: "auto" }} src={NEVC} alt="wice" className="yours-custom-class" />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img style={{ height: "300px", width: "auto" }} src={wice} alt="wice" className="yours-custom-class" />
                        <p className="legend">Legend 3</p>
                    </div>
                </Carousel>



            </Container>
        </div >
    )
}

export default WorkingAreaComponent
