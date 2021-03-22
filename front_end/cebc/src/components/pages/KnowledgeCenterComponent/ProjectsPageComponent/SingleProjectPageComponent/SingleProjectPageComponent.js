import React, { useCallback, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLoading from 'react-loading';

import renderHTML from 'react-render-html';
import "./SingleProjectPageComponent.css"
import Editor from './Editor/Editor'
import { Col, Container, Row } from 'reactstrap';

import moment from 'moment';
import { Link } from 'react-router-dom';

function SingleProjectPageComponent(props) {

    // console.log(props.match.params.Event_id)
    console.log(`singeprops.projects`, props.projects)
    const project_id = props.match.params.project_id;

    const the_project = props.projects.filter((project) => project.id == project_id)[0] //leave this as two ==

    console.log(`the_project`, the_project)

    function generate_members_views(type) {

        console.log(`props.members`, props.members)
        const members_views = the_project.members.map((member, index) => {
            if (member.membership_type) {
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

        <>

            <div className="back_ground_div">    </div>

            <div id="project_background">


                <Container style={{ maxWidth: '90%', marginTop: '200px', display: '' }}>
                    <Row className='justify-content-start align-items-stretch'>
                        <Col className='p-0' md={4} style={{ background: '', }}>
                            {!!props.projects.length > 0 &&
                                <div className="project_image_box">
                                    <img src={`${the_project.image.url}`} style={{ width: "100%", height: "auto", }} alt="" />
                                </div>
                            }

                        </Col>
                        <Col className='p-0' md={7}>
                            <div className="project_box">
                                {!!props.projects.length > 0 ?
                                    <div>
                                        <div id="project_header" >

                                            <div id="header_text"
                                                style={{ backgroundColor: "", flexGrow: "1", marginLeft: "20px", display: "flex", flexDirection: "column", minHeight: "210px", justifyContent: "center" }}
                                            >
                                                <div id="project_box_title" style={{ textAlign: "start", fontSize: '50px' }}>
                                                    <h1> {the_project.title}</h1>
                                                </div>
                                            </div>


                                        </div>
                                        <div id="project_header_2">

                                        </div>
                                        <div id="project_body">
                                            <div style={{}}>
                                                <div style={{ width: '100%', margin: "auto" }}><Editor value={the_project.about} onChange={(input) => { }} /></div>
                                            </div>
                                        </div>

                                    </div>
                                    :
                                    <div id="loading_spinner" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "150px" }} >
                                        <div style={{ marginTop: "100px" }}>
                                            <ReactLoading type={"spin"} color={"#00D2F9"} width={"20vw"} />
                                        </div>
                                    </div>

                                }


                            </div>

                            {!!props.projects.length > 0 &&
                                <div>
                                    <div class="section_header" style={{ marginTop: "10px", alignItems: 'start', textAlign: 'left' }}>
                                        <span class="section_header_inner" style={{ fontSize: '34px', }}>project details </span>
                                        <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px' }}></div>
                                    </div>
                                    <div className="project_details_box">
                                        <Row style={{ minHeight: "30px" }}>
                                            <Col className="details_title" md={3} >
                                                Category :
                                            </Col>
                                            <Col md={8} className="details_value">
                                                {the_project.category}
                                            </Col>
                                        </Row>
                                        <Row style={{ minHeight: "30px" }}>
                                            <Col md={3} className="details_title">
                                                Location :
                                            </Col>
                                            <Col md={8} className="details_value">
                                                {the_project.location}
                                            </Col>
                                        </Row>
                                        <Row style={{ minHeight: "30px" }}>
                                            <Col md={3} className="details_title">
                                                Completed :
                                            </Col>
                                            <Col md={8} className="details_value">
                                                {the_project.completed}
                                            </Col>
                                        </Row>


                                    </div>
                                </div>
                            }

                            {!!props.projects.length > 0 &&
                                <div>
                                    <div class="section_header" style={{ marginTop: "10px", alignItems: 'start', textAlign: 'left' }}>
                                        <span class="section_header_inner" style={{ fontSize: '34px', }}>Member</span>
                                        <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px' }}></div>
                                    </div>
                                    <Row className=" justify-content-center">
                                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "start", marginTop: "20px", marginBottom: "40px" }}>
                                            {generate_members_views()}
                                        </div>
                                    </Row>
                                </div>
                            }

                        </Col>
                    </Row>
                </Container>




            </div >

        </>
    )
}

export default SingleProjectPageComponent
