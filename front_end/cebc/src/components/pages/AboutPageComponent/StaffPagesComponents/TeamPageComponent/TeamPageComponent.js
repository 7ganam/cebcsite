import React from 'react'
import './TeamPageComponent.css'
import {
    Col, Container, Row, Card, CardText, CardBody, CardFooter,
    CardTitle,
} from 'reactstrap'
import ReactLoading from 'react-loading';

import { Link } from 'react-router-dom';


function TeamPageComponent(props) {
    // console.log(`props.staff`, props.staff)

    function create_staff_view(staff, role) {
        const staff_view_array = staff.map((member, index) => {

            if (member.role === role) {
                return (
                    <Col className="board_col my-2" md={4} lg={3} style={{ marginBottom: '20px' }}>
                        <div className="board_div mb-2 d-flex justify-content-stretch" style={{ borderStyle: 'none', backgroundColor: '', height: '100%' }}>

                            <Card style={{ height: '100%', width: '100%', boxShadow: '1px 3px 6px 1px #80808042' }}>
                                <Link to={`/ABOUTUS/STAFF/${member.id}`} style={{ color: "black" }}>
                                    <div className="card_title_container" style={{ padding: '10px', fontWeight: 'bold', height: '60px', justifyContent: 'center', alignItems: "center", display: 'flex' }} tag="h5">{member.name}</div>
                                </Link>
                                <div className="card_image_container" style={{ height: '250px', width: '100%' }}>

                                    <img src={member.image.url} style={{ height: "100%", width: "100%", objectFit: "cover" }} alt="" />

                                </div>
                                <CardBody style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <CardText>{member.title}</CardText>
                                </CardBody>

                                <CardFooter>
                                    <div className="linkedin" style={{ fontSize: "30px" }}>
                                        <a href={member.linkedin_url}>
                                            <i className="fab fa-linkedin i_link" aria-hidden="true"></i>
                                        </a>
                                    </div>
                                </CardFooter>

                            </Card>



                        </div>
                    </Col>
                )
            }


        })
        return (staff_view_array)

    }


    if (props.staff.length === 0) {
        return (
            <Container>
                <Row>
                    <div style={{ height: "100vh", margin: 'auto', marginTop: '200px' }}>
                        <ReactLoading type={"spin"} color={"#00D2F9"} width={"20vw"} />
                    </div>
                </Row>
            </Container>
        )
    }
    else {
        return (
            <div style={{ marginBottom: "30px" }}>

                <div style={{ width: "100%", height: "800px", position: "absolute", top: "0", right: "", overflow: "hidden" }}  >
                    <img src="/assets/images/hero.png" alt="" style={{ width: "100%", height: "auto", position: "", }} />
                </div>



                <Container id="board_content" >
                    <div class="section_header" style={{ margin: "140px 0 30px 0px", zIndex: "333" }}>
                        <span class="section_header_inner" style={{ zIndex: "333" }}>
                            Team
                            </span>
                        <div className="section_header_under" style={{ width: "100%", marginTop: "10px" }}></div>
                    </div>
                    <Row className=" justify-content-center align-items-stretch">
                        {create_staff_view(props.staff, "team_member")}
                    </Row>
                </Container>




            </div>
        )
    }


}

export default TeamPageComponent
