import React, { useCallback, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLoading from 'react-loading';

import renderHTML from 'react-render-html';
import "./SingleNewsLetterPageComponent.css"
import Editor from './Editor/Editor'
import { Col, Container, Row } from 'reactstrap';

import moment from 'moment';
import { Link } from 'react-router-dom';







function SingleNewsLetterPageComponent(props) {

    // console.log(props.match.params.Event_id)
    console.log(`singeprops.NewsLetters`, props.NewsLetters)
    const NewsLetter_id = props.match.params.NewsLetter_id;

    const the_NewsLetter = props.NewsLetters.filter((NewsLetter) => NewsLetter.id == NewsLetter_id)[0] //leave this as two ==

    // console.log(`the_NewsLetter`, the_NewsLetter)

    function generate_entity_views(type) {

        // console.log(`props.members`, props.members)
        const members_views = the_NewsLetter.entities.map((member, index) => {
            if (member.membership_type) {
                return (

                    <Link className="" to={`/MEMBERSHIP/MEMBERS/${member.id}`}>
                        <div class="member_card">
                            <div class="member_card_sub_div">
                                <img class="mem_carousel_img" src={member.entity_image && member.entity_image.url} />
                            </div>
                        </div>
                    </Link>
                )
            }
        })
        return members_views

    }



    function generate_groups_cards(groups_list) {
        const groups = groups_list.map((groups, index) => {
            return (
                <Col md={4} className="d-flex justify-content-center align-items-center">
                    <Link to={`/ABOUTUS/working_groups/${groups.id}`}>
                        <div className="project_card">
                            <div style={{ width: "100%", height: "250px", borderRadius: "", overflow: "hidden", borderBottom: '1px solid #80808045' }}>
                                <img src={groups.Thumb_nail_image.url} alt="wice" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </div>

                            <div style={{ background: "white", width: "100%", minHeight: "60px", color: "black", fontSize: "16px", display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                <div >
                                    {groups.Name}
                                </div>
                            </div>
                        </div>
                    </Link>
                </Col>
            )

        })
        return groups;
    }


    return (

        <>

            <div className="back_ground_div">    </div>

            <div id="NewsLetter_background">


                <Container style={{ maxWidth: '90%', marginTop: '200px', display: '' }}>
                    <Row className='justify-content-start align-items-stretch'>
                        <Col className='p-0' md={4} style={{ background: '', }}>
                            {!!props.NewsLetters.length > 0 &&
                                <div className="NewsLetter_image_box">
                                    {the_NewsLetter.image ?
                                        <img src={`${the_NewsLetter.image && the_NewsLetter.image.url}`} style={{ width: "100%", height: "auto", }} alt="" />
                                        :
                                        <img src={"/logo_black.png"} style={{ width: "100%", height: "auto", }} alt="" />
                                    }
                                </div>
                            }

                        </Col>
                        <Col className='p-0' md={7}>
                            <div className="NewsLetter_box">
                                {!!props.NewsLetters.length > 0 ?
                                    <div>
                                        <Row id="NewsLetter_header" >

                                            <Col id="header_text"
                                                style={{ backgroundColor: "", flexGrow: "1", marginLeft: "20px", display: "flex", flexDirection: "column", minHeight: "210px", justifyContent: "center" }}
                                            >
                                                <div id="NewsLetter_box_title" style={{ textAlign: "start", }}>
                                                    <div> {the_NewsLetter.title}</div>
                                                </div>

                                            </Col>
                                            <Col xs={12} md={6} class="open_NewsLetter_button">
                                                <a target="_blank" href={the_NewsLetter.file && the_NewsLetter.file.url} style={{ textDecoration: 'none' }}>
                                                    <div class="NewsLetter_button action-button shadow animate blue">

                                                        <div>Download </div>

                                                        <i class="fas fa-external-link-alt mt-3"></i>

                                                    </div>
                                                </a>
                                            </Col>

                                        </Row>
                                        <div id="NewsLetter_header_2">

                                        </div>
                                        <div id="NewsLetter_body">
                                            <div style={{}}>
                                                <div style={{ width: '100%', margin: "auto" }}><Editor value={the_NewsLetter.description} onChange={(input) => { }} /></div>
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

                            {!!props.NewsLetters.length > 0 &&
                                <div>
                                    <div class="section_header" style={{ marginTop: "10px", alignItems: 'start', textAlign: 'left' }}>
                                        <span class="section_header_inner" style={{ fontSize: '34px', }}>NewsLetter details </span>
                                        <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px' }}></div>
                                    </div>
                                    <div className="NewsLetter_details_box">
                                        <Row style={{ minHeight: "30px" }}>
                                            <Col className="details_title" xs={6} md={3} >
                                                Category :
                                            </Col>
                                            <Col xs={6} md={8} className="details_value">
                                                {'newsletter'}
                                            </Col>
                                        </Row>

                                        <Row style={{ minHeight: "30px" }}>
                                            <Col xs={6} md={3} className="details_title">
                                                date :
                                            </Col>
                                            <Col xs={6} md={8} className="details_value">
                                                {the_NewsLetter.date}
                                            </Col>
                                        </Row>


                                    </div>
                                </div>
                            }

                            {!!props.NewsLetters.length > 0 && the_NewsLetter && the_NewsLetter.entities.length > 0 &&
                                <div>
                                    <div class="section_header" style={{ marginTop: "10px", alignItems: 'start', textAlign: 'left' }}>
                                        <span class="section_header_inner" style={{ fontSize: '34px', }}>Member</span>
                                        <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px' }}></div>
                                    </div>
                                    <Row className=" justify-content-center">
                                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "start", marginTop: "20px", marginBottom: "40px" }}>
                                            {generate_entity_views()}
                                        </div>
                                    </Row>
                                </div>
                            }
                            {!!the_NewsLetter && the_NewsLetter.programmes_and_groups.length > 0 &&
                                <>

                                    <div id="groups_projects_box" style={{ backgroundColor: 'transparent', border: '0' }}>
                                        <div class="section_header" style={{ marginTop: "10px", alignItems: 'start', textAlign: 'left' }}>
                                            <span class="section_header_inner" style={{ fontSize: '34px', }}>Groups</span>
                                            <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '10px' }}></div>
                                        </div>

                                    </div>
                                    <Row style={{ marginBottom: '20px', }}>
                                        {generate_groups_cards(the_NewsLetter.programmes_and_groups)}
                                    </Row>

                                </>
                            }

                        </Col>
                    </Row>
                </Container>




            </div >

        </>
    )
}

export default SingleNewsLetterPageComponent
