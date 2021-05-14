import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import "./BenifitsPageComponent.css"
import CallToAction from '../../../shared/CallToAction/CallToAction'
import why from './why.png'
function BenifitsPageComponent() {

    const data = [
        {
            title: 'Opportunity to attend CEBC social networking events to establish and build on professional relationships (an event every quarter)',
            PARTNER: true,
            CORPORATE: true,
            ASSOCIATE: true,
        },
        {
            title: 'Opportunity for free/discounted third-party conferences and events',
            PARTNER: true,
            CORPORATE: true,
            ASSOCIATE: true,
        },
        {
            title: 'Right to vote for a CEBC board member',
            PARTNER: true,
            CORPORATE: true,
            ASSOCIATE: true,
        },
        {
            title: 'Opportunity to contribute content to CEBC’s Newsletter to promote events, updates and activities',
            PARTNER: true,
            CORPORATE: true,
            ASSOCIATE: true,
        },
        {
            title: 'Logo on CEBC website and marketing materials',
            PARTNER: true,
            CORPORATE: true,
            ASSOCIATE: true,
        },
        {
            title: 'Access to the Members only section of the CEBC website for a number of services including event listings and job postings',
            PARTNER: true,
            CORPORATE: true,
            ASSOCIATE: false,
        },
        {
            title: 'Free access to CEBC Events (conferences and seminars) – 2 tickets free per event',
            PARTNER: true,
            CORPORATE: true,
            ASSOCIATE: false,
        },
        {
            title: 'Discounts for delegates to access CEBC Events (conferences and seminars) – 50% discount per delegate',
            PARTNER: true,
            CORPORATE: true,
            ASSOCIATE: false,
        },
        {
            title: 'Opportunity to champion/head a working group promoting a specific topic in the clean energy industry culminating in research paper',
            PARTNER: true,
            CORPORATE: false,
            ASSOCIATE: false,
        },
        {
            title: 'CEBC to run and manage a webinar (at discounted price compared to market) per year for our partners to engage and communicate with their audiences',
            PARTNER: true,
            CORPORATE: false,
            ASSOCIATE: false,
        },
        {
            title: 'Right to nominate and vote for a CEBC board member',
            PARTNER: true,
            CORPORATE: false,
            ASSOCIATE: false,
        },

    ]


    function generate_table_view(data) {



        const data_views = data.map((entry, index) => {
            return (
                <Row style={{ backgroundColor: index % 2 === 1 ? '#eaeaea' : 'white', minHeight: '50px', padding: '15px' }}>
                    <Col xs={4} md={3} className=" " style={{ display: "flex", justifyContent: 'center', flexDirection: 'column' }}>
                        {entry.title}
                    </Col>

                    <Col xs={2} md={3} className=" " style={{ fontSize: "30px", color: 'gray' }}>
                        <div className="table_cell" >
                            {entry.PARTNER && <i class="far fa-check-square"></i>}
                        </div>
                    </Col>
                    <Col xs={2} md={3} className=" " style={{ fontSize: "30px", color: 'gray' }}>
                        <div className="table_cell">
                            {entry.CORPORATE && <i class="far fa-check-square"></i>}
                        </div>
                    </Col>
                    <Col xs={2} md={3} className=" " style={{ fontSize: "30px", color: 'gray' }}>
                        <div className="table_cell" >
                            {entry.ASSOCIATE && <i class="far fa-check-square"></i>}
                        </div>
                    </Col>
                </Row>
            )

        })

        return data_views
    }



    return (
<>
            <div style={{ zIndex: '0', width: "100%", height: "800px", position: "absolute", top: "0", right: "", overflow: "hidden" }} >
                <img src="/assets/images/hero.png" alt="" style={{ width: "100%", height: "auto", position: "", }} />
            </div>
            <div style={{ minHeight: "300px", paddingTop: '200px', paddingBottom: '', backgroundColor: "" }}>
                <Container>
                    <Row className=" justify-content-center">
                        <Col >
                            <div class="section_header">
                                <span class="section_header_inner">
                                    Membership benifits & levels
                                </span>
                                <div className="section_header_under"></div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="title_row">
                        <div class="section_header" style={{
                            marginLeft: '15px', marginTop: "80px", alignItems: 'start', textAlign: 'left', paddingLeft: ' 0', fontWeight: '400'
                        }}>
    
    
                            <span class="section_header_inner" style={{ fontSize: '34px', fontWeight: '200' }}>MEMBERSHIP</span>
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
                                We provide opportunities
                                to meet, greet and learn
                                from the best in the business.
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
                                We support our members,
                                helping them to grow and
                                seize new opportunities.
                            </div>
                        </Col>
                    </Row>
    
                </Container>
                <div style={{ width: "100%", backgroundColor: "#F7F7F7", paddingBottom: "100px", }}>
                    <Container>
                        <Row className="title_row">
                            <div class="section_header" style={{ marginLeft: '15px', marginTop: "50px", alignItems: 'start', textAlign: 'left', paddingLeft: ' 0', fontWeight: '200' }}>
                                <span class="section_header_inner" style={{ fontSize: '34px', }}>WHY JOIN THE CEBC?</span>
                                <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px', width: "250px" }}></div>
                            </div>
                        </Row>
                        <div className='consultancy_services_div my-3' style={{ margin: 'auto' }}>
                            <img src={why} alt="" style={{ width: "100%", height: "auto" }} />
                        </div>
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
                    <Container>
                        <Row className="title_row">
                            <div class="section_header" style={{ marginTop: "50px", alignItems: 'start', textAlign: 'left', fontWeight: '200' }}>
                                <span class="section_header_inner" style={{ fontSize: '34px', }}>MEMBERSHIP LEVELS</span>
                                <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px', width: "250px" }}></div>
                            </div>
                        </Row>
                        <Row>
                            <Col style={{ fontFamily: "'Raleway', sans-serif", textAlign: 'left' }}>
                                Information on our three different levels of membership is available below. From time to time, we also offer Honorary Memberships to select organisations.
    
                                If you are a recruiter and would like to join to access our extended network of stakeholders, you can also apply for a special level of membership – please click here for more information.
    
                                If you have any questions on membership, or would like to know more, please email ahmed@cebcmena.com.
                        </Col>
                        </Row>
                    </Container>
    
                    <Container style={{ margin: 'auto', paddingTop: "40px", paddingBottom: '40px', fontFamily: "'Raleway', sans-serif", }}>
    
                        <div style={{ backgroundColor: '#eaeaea', minHeight: '50px', padding: '8px' }}>
                            <Row style={{ marginTop: 'auto', marginBottom: 'auto' }} className='pt-2' >
                                <Col md={3} className=" " style={{ padding: '10px', display: "flex", justifyContent: 'center', flexDirection: 'column' }}>
    
                                </Col>
                                <Col md={3} className=" " style={{ padding: '10px', }}>
                                    <div style={{ width: '90%', minHeight: "130px", backgroundColor: "gray", display: "flex", justifyContent: 'center', flexDirection: 'column', borderRadius: '10px' }}>
                                        <div>
                                            <div style={{ fontSize: "", fontWeight: "", color: "white" }}>
                                                PARTNER MEMBER
                                        </div>
    
                                            <div style={{ fontSize: "30px", fontWeight: "bolder", color: "white" }}>
                                                $5,000 USD
                                        </div>
                                            <div style={{ fontSize: "", fontWeight: "", color: "white" }}>
                                                per annum
                                        </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={3} className=" " style={{ padding: '10px', }}>
                                    <div style={{ width: '90%', minHeight: "130px", backgroundColor: "#FFB600", display: "flex", justifyContent: 'center', flexDirection: 'column', borderRadius: '10px' }}>
                                        <div>
                                            <div style={{ fontSize: "", fontWeight: "", color: "white" }}>
                                                CORPORATE MEMBER
                                        </div>
                                            <div style={{ fontSize: "30px", fontWeight: "bolder", color: "white" }}>
                                                $2,500 USD
                                        </div>
                                            <div style={{ fontSize: "", fontWeight: "", color: "white" }}>
                                                per annum
                                        </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col md={3} className=" " style={{ padding: '10px', }}>
                                    <div style={{ width: '90%', minHeight: "130px", backgroundColor: "gray", display: "flex", justifyContent: 'center', flexDirection: 'column', borderRadius: '10px' }}>
                                        <div>
                                            <div style={{ fontSize: "", fontWeight: "", color: "white" }}>
                                                ASSOCIATE MEMBER
                                        </div>
                                            <div style={{ fontSize: "30px", fontWeight: "bolder", color: "white" }}>
                                                $500 USD
                                        </div>
                                            <div style={{ fontSize: "", fontWeight: "", color: "white" }}>
                                                per annum
                                        </div>
                                        </div>
                                    </div>
                                </Col>
    
                            </Row>
                        </div>
                        {generate_table_view(data)}
                    </Container>
    
                    <div style={{ marginLeft: "auto", marginRight: "auto", marginBottom: "100px", marginTop: "40px", width: "400px" }}>
    
                        <CallToAction />
    
                    </div>
    
                </div>
    
    
            </div>
       
</>
   )
}

export default BenifitsPageComponent
