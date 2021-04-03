import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import "./MembersPageComponent.css"
import { Link } from "react-router-dom";

function MembersPageComponent(props) {


    function generate_assoicate_members_views(type) {

        console.log(`props.members`, props.members)
        const members_views = props.members.map((member, index) => {
            if (member.membership_type === type) {
                return (

                    <Link className="" to={`/MEMBERSHIP/MEMBERS/${member.id}`}>
                        <div class="member_card">
                            <div class="member_card_sub_div">
                                <img class="mem_carousel_img" src={member.entity_image.url} />
                            </div>
                        </div>
                    </Link>
                )
            }
        })
        return members_views
    }


    return (
        <div>
            <Container style={{ marginTop: "200px" }}>

                <Row className=" justify-content-center">
                    <Col >
                        <div class="section_header">
                            <span class="section_header_inner">
                                Partner members
                            </span>
                            <div className="section_header_under"></div>
                        </div>
                    </Col>
                </Row>
                <Row className=" justify-content-center">
                    <div style={{ display: "flex", maxWidth: "80%", flexWrap: "wrap", justifyContent: "center", marginTop: "20px", marginBottom: "40px" }}>
                        {generate_assoicate_members_views("partner_member_entity")}
                    </div>
                </Row>
            </Container>
            <Container fluid style={{ backgroundColor: '#F7F7F7', paddingTop: "100px", paddingBottom: "100px", marginTop: "50px", marginBottom: "50px" }}>

                <Row className=" justify-content-center">
                    <Col >
                        <div class="section_header">
                            <span class="section_header_inner">
                                Corporate
                            </span>
                            <div className="section_header_under"></div>
                        </div>
                    </Col>
                </Row>
                <Row className=" justify-content-center">
                    <div style={{ display: "flex", maxWidth: "80%", flexWrap: "wrap", justifyContent: "center", marginTop: "20px", marginBottom: "40px" }}>
                        {generate_assoicate_members_views("corporate_member_entity")}
                    </div>
                </Row>
            </Container>


            <Container style={{ marginTop: "" }}>


                <Row className=" justify-content-center">
                    <Col >
                        <div class="section_header">
                            <span class="section_header_inner">
                                Associate MEMBERS
                            </span>
                            <div className="section_header_under"></div>
                        </div>
                    </Col>
                </Row>

                <Row className=" justify-content-center">
                    <div style={{ display: "flex", maxWidth: "80%", flexWrap: "wrap", justifyContent: "center", marginTop: "20px", marginBottom: "40px" }}>
                        {generate_assoicate_members_views("assoicate_member_entity")}
                    </div>
                </Row>

            </Container>
        </div>
    )
}

export default MembersPageComponent
