import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import "./MembersPageComponent.css"
import { Link } from "react-router-dom";

function MembersPageComponent(props) {


    function generate_assoicate_members_views(type) {

        // console.log(`props.members`, props.members)
        const members_views = props.members.map((member, index) => {
            if (member.membership_type === type) {
                return (

                    <Link className="" to={`/MEMBERS/${member.id}`}>
                        <div class="member_card">
                            <div class="member_card_sub_div">
                                <img class="mem_carousel_img" src={member.member_image.url} />
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
                                Associate MEMBERS
                            </span>
                            <div className="section_header_under"></div>
                        </div>
                    </Col>
                </Row>

                <Row className=" justify-content-center">
                    <div style={{ display: "flex", maxWidth: "80%", flexWrap: "wrap", justifyContent: "center", marginTop: "20px", marginBottom: "40px" }}>
                        {generate_assoicate_members_views("Associate")}
                    </div>
                </Row>


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
                        {generate_assoicate_members_views("Corporate")}
                    </div>
                </Row>

                <Row className=" justify-content-center">
                    <Col >
                        <div class="section_header">
                            <span class="section_header_inner">
                                Partner
                            </span>
                            <div className="section_header_under"></div>
                        </div>
                    </Col>
                </Row>
                <Row className=" justify-content-center">
                    <div style={{ display: "flex", maxWidth: "80%", flexWrap: "wrap", justifyContent: "center", marginTop: "20px", marginBottom: "40px" }}>
                        {generate_assoicate_members_views("Partner")}
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default MembersPageComponent
