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
            <div class="section_header" style={{ margin: "400px 0 100px 0px" }}>
                <span class="section_header_inner">
                    Our Working Areas
                            </span>
                <div className="section_header_under"></div>
            </div>

            <Container id="main_working_container" fluid>
                <Container id="sub_working_container" >
                    <Row>
                        <Col md={4} className="d-flex justify-content-center align-items-center">
                            <div className="working_card2">
                                <div style={{ width: "100%", height: "250px", marginTop: "", borderRadius: "", overflow: "hidden", }}>
                                    <img src={Member} alt="wice" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </div>

                                <div style={{ background: "white", width: "100%", height: "60px", color: "black", fontSize: "20px", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <div >  working groups</div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="d-flex justify-content-center align-items-center">
                            <div className="working_card2">
                                <div style={{ width: "100%", height: "250px", marginTop: "", borderRadius: "", overflow: "hidden", }}>
                                    <img src={wice} alt="wice" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </div>


                                <div style={{ background: "white", width: "100%", height: "60px", color: "black", fontSize: "20px", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <div >  Programmes</div>
                                </div>
                            </div>

                        </Col>
                        <Col md={4} className="d-flex justify-content-center align-items-center">
                            <div className="working_card2">
                                <div style={{ width: "100%", height: "250px", marginTop: "", borderRadius: "", overflow: "hidden", }}>
                                    <img src={NEVC} alt="wice" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </div>

                                <div style={{ background: "white", width: "100%", height: "60px", color: "black", fontSize: "20px", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <div > Events</div>
                                </div>
                            </div>

                        </Col>
                    </Row>
                    <div className="carousel_wrapper">
                        <Carousel autoPlay infiniteLoop >
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
                    </div>
                </Container>
















            </Container>
        </div >
    )
}

export default WorkingAreaComponent
