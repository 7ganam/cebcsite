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

function WorkingAreaComponent(props) {

    function generate_carousel_images() {
        let images = props.gallery.map((image, index) =>
        (
            <div>
                <img style={{ height: "300px", width: "auto" }} src={image.url} alt="wice" className="yours-custom-class" />
                <p className="legend">Legend 2</p>
            </div>
        )
        )
        return images;
    }


    return (
        <div style={{ paddingBottom: '30px' }}>
            <div className="section_header working_areas_header" >
                <span className="section_header_inner ">
                    Our Working Areas
                            </span>
                <div className="section_header_under"></div>
            </div>

            <Container id="main_working_container" fluid>
                <Container id="sub_working_container" >
                    <Row>
                        <Col md={4} className="d-flex justify-content-center align-items-center">
                            <div className="working_card2" style={{ marginBottom: '30px' }}>
                                <div style={{ width: "100%", height: "250px", marginTop: "", borderRadius: "", overflow: "hidden", }}>
                                    <img src={Member} alt="wice" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </div>

                                <div style={{ background: "white", width: "100%", height: "60px", color: "black", fontSize: "20px", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <div >  working groups</div>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} className="d-flex justify-content-center align-items-center">
                            <div className="working_card2" style={{ marginBottom: '30px' }}>
                                <div style={{ width: "100%", height: "250px", marginTop: "", borderRadius: "", overflow: "hidden", }}>
                                    <img src={wice} alt="wice" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </div>


                                <div style={{ background: "white", width: "100%", height: "60px", color: "black", fontSize: "20px", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                    <div >  Programmes</div>
                                </div>
                            </div>

                        </Col>
                        <Col md={4} className="d-flex justify-content-center align-items-center">
                            <div className="working_card2" style={{ marginBottom: '30px' }}>
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
                            {props.gallery &&
                                generate_carousel_images()
                            }
                        </Carousel>
                    </div>
                </Container>
















            </Container>
        </div >
    )
}

export default WorkingAreaComponent
