import React, { useCallback, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; import ReactLoading from 'react-loading';

import renderHTML from 'react-render-html';
import "./SingleMemberPageComponent.css"
import Editor from './Editor/Editor'
import { Col, Container, Row } from 'reactstrap';

import moment from 'moment';

function SingleMemberPageComponent(props) {
    const member_id = props.match.params.member_id;

    const member = props.members.filter((member) => {
        return member.id.toString() === member_id;
    })[0]


    console.log(`member`, member)


    return (

        <div id="event_background">
            <div id="event_box">



                {!!member ?
                    <div>
                        <div id="event_header" >



                            <div id="header_img" style={{ backgroundColor: "", padding: "0px", height: "210px", width: "300px" }}>

                                {member.member_image ?
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", overflow: "hidden" }}>
                                        <img src={`${member.member_image.url}`}
                                            style={{ width: "300px", height: "auto", }} alt="" />
                                    </div>
                                    :
                                    <img src={`/logo_black.png`}
                                        style={{ width: "300px", height: "auto", position: "relative", top: "50px" }} alt="" />
                                }
                            </div>



                            <div id="header_text"
                                style={{ backgroundColor: "", flexGrow: "1", marginLeft: "20px", display: "flex", flexDirection: "column", minHeight: "210px", justifyContent: "center" }}>
                                <div id="event_box_title" style={{ textAlign: "start", fontSize: '50px' }}>
                                    <h1>
                                        {member.name}
                                        {/* add title here */}
                                    </h1>
                                </div>
                                <div id="event_box_date" style={{ textAlign: "start", fontSize: '30px', color: "#56c7ec" }}>



                                </div>
                            </div>


                        </div>
                        <div id="event_header_2">
                            <i class="fas fa-award  mr-2"></i>
                            <span>
                                {member.membership_type}
                            </span>
                            {` member`}
                        </div>
                        <div id="event_body">
                            <div style={{}}>

                                <div style={{ width: '100%', margin: "auto" }}>
                                    {member.description}
                                    <Editor value={member.member_page} onChange={(input) => { }} />
                                </div>
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
        </div>
    )
}

export default SingleMemberPageComponent
