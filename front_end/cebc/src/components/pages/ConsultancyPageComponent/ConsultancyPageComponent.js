import React from 'react'
import { Container, Row } from 'reactstrap'
import './ConsultancyPageComponent.css'
function ConsultancyPageComponent() {
    return (
        <div style={{
            minHeight: "400px", paddingTop: '120px', paddingBottom: '300px'
        }}>
            <div style={{ width: "100%", height: "900px", position: "absolute", top: "-50px", right: "", overflow: "hidden" }}  >
                <img src="/assets/images/hero.png" alt="" style={{ width: "100%", height: "auto", position: "" }} />
            </div>
            <Row className=" justify-content-center" style={{ width: '90%', margin: 'auto' }}>
                <div class="section_header" style={{ marginTop: "50px", marginBottom: "30px", zIndex: '1' }}>
                    <span class="section_header_inner">
                        CONSULTANCY
                            </span>
                    <div className="section_header_under"></div>
                </div>
            </Row>


            <Container>
                <Row className="title_row">
                    <div class="section_header" style={{ marginLeft: '15px', marginTop: "50px", alignItems: 'start', textAlign: 'left', paddingLeft: ' 0', fontWeight: '400' }}>
                        <span class="section_header_inner" style={{ fontSize: '34px', zIndex: '1' }}>Our services:</span>
                        <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px', width: "250px" }}></div>
                    </div>
                </Row>
                <div className='consultancy_services_div'>
                    <img src="/services.png" alt="" style={{ width: "100%", height: "auto" }} />
                </div>

                <Row className="title_row">
                    <div class="section_header" style={{ marginLeft: '15px', marginTop: "50px", alignItems: 'start', textAlign: 'left', paddingLeft: ' 0', fontWeight: '400' }}>
                        <span class="section_header_inner" style={{ fontSize: '34px', }}>We cover:</span>
                        <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px', width: "250px" }}></div>
                    </div>
                </Row>
                <div className='consultancy_services_div'>
                    <img src="/wecover.png" alt="" style={{ width: "100%", height: "auto" }} />
                </div>
            </Container>



        </div>
    )
}

export default ConsultancyPageComponent
