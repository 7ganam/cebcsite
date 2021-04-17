import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import "./BenifitsPageComponent.css"
import CallToAction from '../../../shared/CallToAction/CallToAction'

function BenifitsPageComponent() {
    return (
        <div style={{ minHeight: "300px", paddingTop: '200px', paddingBottom: '', backgroundColor: "" }}>
            <Container>
                <Row className="title_row">
                    <div class="section_header" style={{
                        marginLeft: '15px', marginTop: "10px", alignItems: 'start', textAlign: 'left', paddingLeft: ' 0', fontWeight: '400'
                    }}>


                        <span class="section_header_inner" style={{ fontSize: '34px', }}>MEMBERSHIP</span>
                        <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px', width: "250px" }}></div>
                    </div>
                </Row>
                <Row>
                    <Col style={{ fontFamily: "'Raleway', sans-serif", textAlign: 'left' }}>
                        You can be a part of building a sustainable and profitable clean energy sector in the MENA region by joining the CEBC as a member.

                        By becoming a member, you join a group of companies all sharing a similar aspiration; to assist the nations of this region meet their aspirations to become more energy efficient, less polluting and technically advanced in energy production.

                        Three membership categories levels are available, which entitle your company to a number of benefits.
                    </Col>
                </Row>


                <Row style={{ margin: '30px 0 30px 0' }}>
                    <Col md={4} className="d-flex justify-content-center align-items-center mb-4 " style={{ flexDirection: "column" }}>
                        <div className="working_card2">
                            <div style={{ width: "100%", height: "250px", marginTop: "", borderRadius: "", overflow: "hidden", }}>
                                <img src={"https://cebc.s3.eu-central-1.amazonaws.com/Image_For_Article_1094_15905836938893485_059eb826f3.webp"} alt="wice" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>

                            <div style={{ background: "white", width: "100%", height: "60px", color: "black", fontSize: "20px", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                <div > ADVOCACY</div>
                            </div>
                        </div>
                        <div style={{ fontFamily: "'Raleway', sans-serif", textAlign: '', marginTop: "20px" }}>
                            We work to ensure that
                            members have a voice in
                            the MENA clean energy sector.
                        </div>
                    </Col>
                    <Col md={4} className="d-flex justify-content-center align-items-center mb-4" style={{ flexDirection: "column" }}>
                        <div className="working_card2">
                            <div style={{ width: "100%", height: "250px", marginTop: "", borderRadius: "", overflow: "hidden", }}>
                                <img src={"https://cebc.s3.eu-central-1.amazonaws.com/Networking_1_635x500_1b7742e5b7.jpg"} alt="wice" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>


                            <div style={{ background: "white", width: "100%", height: "60px", color: "black", fontSize: "20px", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                <div > NETWORKING</div>
                            </div>

                        </div>
                        <div style={{ fontFamily: "'Raleway', sans-serif", textAlign: '', marginTop: "20px" }}>
                            We work to ensure that
                            members have a voice in
                            the MENA clean energy sector.
                        </div>
                    </Col>
                    <Col md={4} className="d-flex justify-content-center align-items-center mb-4" style={{ flexDirection: "column" }}>
                        <div className="working_card2">
                            <div style={{ width: "100%", height: "250px", marginTop: "", borderRadius: "", overflow: "hidden", }}>
                                <img src={"https://cebc.s3.eu-central-1.amazonaws.com/renewablejobs_c900724e75.jpg"} alt="wice" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>

                            <div style={{ background: "white", width: "100%", height: "60px", color: "black", fontSize: "20px", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                <div >SUPPORT</div>
                            </div>
                        </div>
                        <div style={{ fontFamily: "'Raleway', sans-serif", textAlign: '', marginTop: "20px" }}>
                            We work to ensure that
                            members have a voice in
                            the MENA clean energy sector.
                        </div>
                    </Col>
                </Row>

            </Container>
            <div style={{ width: "100%", backgroundColor: "#F7F7F7", paddingBottom: "100px", }}>
                <Container>
                    <Row className="title_row">
                        <div class="section_header" style={{ marginLeft: '15px', marginTop: "50px", alignItems: 'start', textAlign: 'left', paddingLeft: ' 0', fontWeight: '400' }}>
                            <span class="section_header_inner" style={{ fontSize: '34px', }}>WHY JOIN THE CEBC?</span>
                            <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px', width: "250px" }}></div>
                        </div>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div className='join_card' >
                                <div style={{ fontWeight: 'bold' }}> We know the MENA clean energy sector. </div>
                                We can connect you with likeminded individuals also looking to promote change and innovation in the region.
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='join_card' >
                                <div style={{ fontWeight: 'bold' }}>We are on the pulse. </div>
                                We know the latest news and updates in the MENA region, and share these with our members.
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className='join_card' >
                                <div style={{ fontWeight: 'bold' }}>We create opportunities for our members. </div>
                                Whether these be speaking at our events, promoting your project or advertising tenders, we ensure of members receive ample opportunity to share their news, achievements and work.
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='join_card' >
                                <div style={{ fontWeight: 'bold' }}>We believe in what we do.</div>
                                We are all advocates for the renewable energy sector, and believe in the importance of renewables and clean energy for our future – and yours.
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='join_card' >
                                <div style={{ fontWeight: 'bold' }}>We run quality events, </div>
                                which members can attend free of charge.
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div style={{ marginLeft: "auto", marginRight: "auto", marginTop: "100px", marginBottom: '0px', width: "600px" }}>

                    <CallToAction />

                </div>
            </div>


        </div>
    )
}

export default BenifitsPageComponent
