import "./SingleWorkingGroupPageComponent.css"
import { Link } from "react-router-dom";



import React, { useCallback, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; import ReactLoading from 'react-loading';
import { useHttpClient } from "../../../../hooks/http-hook"

import renderHTML from 'react-render-html';

import Editor from './Editor/Editor'
import { Col, Container, Row } from 'reactstrap';

import moment from 'moment';

function SingleWorkingGroupPageComponent(props) {

    // console.log(props.match.params.group_program_id)

    const group_program_id = props.match.params.group_id;
    const the_group = props.programmes_state.LoadedProgrammes.filter((group) => {
        return group.id == group_program_id
    })[0]
    console.log(`the_group`, the_group)

    function generate_members_view() {
        const members = the_group.member.map((member) => {
            return (
                <div className='member_container'
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <div className='member_image_container'>
                        <img className='member_image' src={member.image.url} />
                    </div>
                    <div className='member_text'>
                        <div className="member_name"> {member.name}</div>
                        <div className="member_position"> {member.position}</div>
                        <div className="member_Entity"> {member.Entity}</div>

                    </div>
                </div>
            )
        })
        return members;
    }

    function generate_members_views() {

        console.log(`props.members`, props.members)
        const members_views = the_group.member_companies.map((member, index) => {
            return (
                <Link className="" to={`/MEMBERS/${member.id}`}>
                    <div class="member_card">
                        <div class="member_card_sub_div" style={{ background: 'white' }}>
                            <img class="mem_carousel_img" src={member.member_image.url} />
                        </div>
                    </div>
                </Link>
            )

        })
        return members_views

    }

    return (
        <>

            <div id="group_program_background">
                <div
                    id="group_program_box">
                    {!!the_group ?
                        <div>
                            <div id="group_program_header" style={{}}>

                                <div id="header_img" style={{ padding: "0px", height: "100%", width: "100%", position: "absolute" }}>
                                    {the_group.Thumb_nail_image ?

                                        <div
                                            style={{
                                                position: "absolute",
                                                display: "flex", justifyContent: "center", alignItems: "center", width: "100%", overflow: "hidden", height: "100%"
                                            }}>
                                            <img src={`${the_group.Thumb_nail_image.url}`} style={{ width: "100%", height: "100%", objectFit: 'cover', filter: 'brightness(40%)' }} alt="" />
                                        </div>
                                        :
                                        <img src={`/logo_black.png`}
                                            style={{ width: "100%", height: "auto", position: "relative", top: "50px" }} alt="" />
                                    }


                                </div>


                                <div id="group_program_box_title" >
                                    <h1 style={{ fontSize: "50px" }}> {the_group.Name}</h1>
                                </div>

                            </div>
                            <div id="group_program_header_2">
                                <i class="fas fa-chalkboard-teacher mr-2"></i>

                                {`CEBC `}
                                {the_group.Type}
                            </div>
                            <div id="group_program_body">
                                <div style={{}}>
                                    <div style={{ width: '100%', margin: "auto" }}><Editor value={the_group.Page} onChange={(input) => { }} /></div>
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


                <div id="members_container">

                    <div class="section_header" style={{ marginTop: "10px" }}>
                        <span class="section_header_inner" style={{ fontSize: '34px', }}>members </span>
                        <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px' }}></div>
                    </div>
                    <div
                        id="group_program_member_box">
                        {!!the_group &&
                            <>

                                {generate_members_view()}

                            </>
                        }
                    </div>
                </div>

                <div id="members_container">

                    <div class="section_header" style={{ marginTop: "10px" }}>
                        <span class="section_header_inner" style={{ fontSize: '34px', }}>member entities </span>
                        <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px' }}></div>
                    </div>
                    <div
                        id="group_program_member_box">
                        {!!the_group &&
                            <>

                                {generate_members_views()}

                            </>
                        }
                    </div>
                </div>
            </div>


        </>

    )
}

export default SingleWorkingGroupPageComponent
