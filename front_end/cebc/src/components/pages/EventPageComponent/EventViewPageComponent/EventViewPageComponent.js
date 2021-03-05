import React, { useCallback, useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; import ReactLoading from 'react-loading';
import { useHttpClient } from "../../../../hooks/http-hook"

import renderHTML from 'react-render-html';
import "./EventViewPageComponent.css"
import Editor from './Editor/Editor'
import { Col, Container, Row } from 'reactstrap';

import moment from 'moment';

function EventViewPageComponent(props) {

    // console.log(props.match.params.Event_id)

    const Event_id = props.match.params.Event_id;

    const { isLoading: EventIsLoading, error: EventError, sendRequest: sendEventRequest, clearError } = useHttpClient();
    const [LoadedEvent, setLoadedEvent] = useState(null);

    const fetchEvent = useCallback(
        async () => {

            try {
                const responseData = await sendEventRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/evnets/${Event_id}`
                );



                const event_post = responseData.event_post;
                const modified_event_post = event_post.replace('/uploads', `${process.env.REACT_APP_BACKEND_URL}/uploads`);
                let modified_event = { ...responseData, event_post: modified_event_post }
                console.log('evente', modified_event)

                setLoadedEvent(modified_event);


            } catch (err) {
                console.log({ err })
            }


        },
        [sendEventRequest, Event_id],
    );

    useEffect(() => {
        fetchEvent()
    }, [Event_id])


    return (

        <div id="event_background">
            <div id="event_box">



                {!!LoadedEvent ?
                    <div>
                        <div id="event_header" >



                            <div id="header_img" style={{ backgroundColor: "", padding: "0px", height: "210px", width: "300px" }}>
                                {LoadedEvent.event_thumbnail_image.length > 0 ?
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", overflow: "hidden" }}>
                                        <img src={`${process.env.REACT_APP_BACKEND_URL}${LoadedEvent.event_thumbnail_image[0].url}`}
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
                                    <h1> {LoadedEvent.title}</h1>
                                </div>
                                <div id="event_box_date" style={{ textAlign: "start", fontSize: '30px', color: "#56c7ec" }}>
                                    <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                                    <span>{moment(LoadedEvent.event_date).format('DD-MMMM-YYYY')}</span>


                                </div>
                            </div>


                        </div>
                        <div id="event_header_2">

                        </div>
                        <div id="event_body">
                            <div style={{}}>
                                <div style={{ width: '100%', margin: "auto" }}><Editor value={LoadedEvent.event_post} onChange={(input) => { }} /></div>
                            </div>
                        </div>
                    </div>
                    :
                    <div id="loading_spinner" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "400px" }} >
                        <div style={{ marginTop: "100px" }}>
                            <ReactLoading type={"spin"} color={"#00D2F9"} width={"20vw"} />
                        </div>
                    </div>

                }





            </div>
        </div>
    )
}

export default EventViewPageComponent
