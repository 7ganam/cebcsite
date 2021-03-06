import React from 'react'
import "./EventPageComponent.css"
import EventCardComponent from "./EventCardComponent/EventCardComponent"
import { Col, Container, Row } from 'reactstrap'
import { Link } from "react-router-dom";
import moment from 'moment';


import { useHttpClient } from "../../../hooks/http-hook"

import { useState, useEffect, useCallback } from 'react';



import {
    Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, CardFooter
} from 'reactstrap';

function EventPageComponent(props) {


    const evetns_per_page = 10;




    const { isLoading: UpcommingEventsIsLoading, error: UpcommingEventsError, sendRequest: sendUpcommingEventsRequest, clearError } = useHttpClient();
    const [LoadedUpcommingEvents, setLoadedUpcommingEvents] = useState([]);


    const { isLoading: PastEventsIsLoading, error: PastEventsError, sendRequest: sendPastEventsRequest, clearError: clearPastError } = useHttpClient();
    const [LoadedPastEvents, setLoadedPastEvents] = useState([]);



    const fetch_upcomming_Events = useCallback(
        async () => {
            try {
                var localTime = moment().format('YYYY-MM-DD'); // store localTime
                var current_date = localTime + "T00:00:00.000Z";
                var current_date = localTime;
                const responseData = await sendUpcommingEventsRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/events?Event_date_gte=${current_date}`
                );

                console.log('comming evs', responseData)

                setLoadedUpcommingEvents(responseData);
            } catch (err) {
                console.log({ err })
            }


        },
        [sendUpcommingEventsRequest],
    );


    const fetch_past_Events = useCallback(
        async () => {
            try {
                var localTime = moment().format('YYYY-MM-DD'); // store localTime
                var current_date = localTime + "T00:00:00.000Z";


                const responseData = await sendPastEventsRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/events?Event_date_lt=${current_date}&_limit=10`
                );

                setLoadedPastEvents(responseData);


            } catch (err) {
                console.log({ err })
            }


        },
        [sendPastEventsRequest],
    );



    useEffect(() => {

        fetch_upcomming_Events();
        fetch_past_Events();


    }, [fetch_upcomming_Events, fetch_past_Events]);



    const render_upcomming_events = (upcomming_events) => {

        const events_object = {}
        for (const event of upcomming_events) {
            let momentDate = moment(event.Event_date)
            let year = momentDate.year();
            let month = momentDate.month();

            if (!events_object[year]) { events_object[year] = {} }
            if (!events_object[year][month]) { events_object[year][month] = [] }
            events_object[year][month].push(event)
        }
        // console.log('event_object', events_object)

        let render_event = []
        for (const year in events_object) {
            // render_event.push(<div>{year}</div>)
            for (const month in events_object[year]) {

                render_event.push(
                    <Container style={{ marginTop: "" }}>
                        <div class="mec-month-divider" data-toggle-divider="mec-toggle-202102-1135">
                            <span>{moment().month(month).format("MMMM")} {year}</span>
                            <i class="mec-sl-arrow-down">  </i>
                        </div>
                    </Container>
                )

                for (const event of events_object[year][month]) {

                    // console.log('props.event', event)
                    render_event.push(
                        <Container className="mt-5">
                            <div style={{ marginTop: "50px " }}>
                                <EventCardComponent event={event} />
                            </div>
                        </Container>
                    )
                }
            }
        }




        return render_event
    }





    const render_past_events = (past_events) => {


        const events_object = {}
        for (const event of past_events) {
            let momentDate = moment(event.Event_date)
            let year = momentDate.year();
            let month = momentDate.month();

            if (!events_object[year]) { events_object[year] = {} }
            if (!events_object[year][month]) { events_object[year][month] = [] }

            events_object[year][month].push(event)
        }

        const reander_sub_elements = (events_object, year) => {
            const sub_objects = []
            for (const month in events_object[year]) {
                for (const event of events_object[year][month]) {
                    sub_objects.push(

                        <Col md={4} lg={3}>
                            <Card>
                                {event.Event_thumbnail_image ?

                                    <CardImg top width="100%" style={{ height: '100px', objectFit: "contain" }} src={`${event.Event_thumbnail_image.url}`} alt="Card image cap" />
                                    :
                                    <CardImg top width="100%" style={{ height: '100px', objectFit: "contain" }} src={"/logo_black.png"} alt="Card image cap" />
                                }
                                <CardBody>
                                    <CardTitle tag="h5"> {event.Title}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted"> <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                                        <span class="mec-event-d"><span class="mec-start-date-label" itemprop="startDate">{event.Event_date}</span></span>
                                    </CardSubtitle>
                                    <CardText></CardText>
                                </CardBody>
                                <CardFooter className="text-muted">
                                    <Link to={`/EVENTS/PAST/${event.id}`}>
                                        <div style={{ padding: '10px', borderStyle: "solid", borderWidth: "1px" }}>
                                            <div style={{}}>know more</div>
                                        </div>
                                    </Link >
                                </CardFooter>
                            </Card>
                        </Col>
                    )
                }
            }
            return sub_objects;
        }

        let render_event = []
        render_event.push(
            <Container fluid className="p-0">
                <div style={{ marginTop: "150px ", height: "250px", backgroundColor: "#1B273D", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ color: "white", fontSize: "60px" }}>
                        Past events
                    </div>
                </div>
            </Container>
        )

        for (const year in events_object) {
            render_event.push(
                <>
                    <Container style={{ marginTop: "" }}>
                        <div class="mec-month-divider_past" data-toggle-divider="mec-toggle-202102-1135">
                            <span> {year}</span>
                            <i class="mec-sl-arrow-down">  </i>
                        </div>
                    </Container>
                    <Container style={{ marginTop: "50px" }}>
                        <Row>
                            {reander_sub_elements(events_object, year)}
                        </Row>
                    </Container>
                </>
            )

        }

        return render_event
    }



    return (

        <div style={{ marginBottom: "20px" }}>



            {!props.match.params.Event_type ?
                <>
                    <div id="header_">
                        <span class="logo icon fa-paper-plane"></span>
                        <h1>Our events.</h1>
                        <p>CEBC members and strategic partners events.</p>
                    </div>
                    <div></div>
                    {
                        LoadedUpcommingEvents.length > 0 &&
                        render_upcomming_events(LoadedUpcommingEvents)
                    }
                    {
                        LoadedPastEvents.length > 0 &&
                        <div style={{ backgroundColor: "" }}>
                            {render_past_events(LoadedPastEvents)}
                        </div>
                    }
                </>
                :
                <>
                    {/* <h1>{JSON.stringify(props.match.params, null, 2)}</h1> */}

                    {props.match.params.Event_type === "Past" && LoadedPastEvents.length > 0 &&
                        <>
                            <div id="header_">
                                <span class="logo icon fa-paper-plane"></span>
                                <h1>Past events.</h1>
                                <p>CEBC members and strategic partners events.</p>
                            </div>
                            <div style={{ backgroundColor: "" }}>
                                {render_past_events(LoadedPastEvents)}
                            </div>
                        </>
                    }
                    {props.match.params.Event_type === "Upcoming" && LoadedUpcommingEvents.length > 0 &&
                        <>
                            <div id="header_">
                                <span class="logo icon fa-paper-plane"></span>
                                <h1>Upcomming events.</h1>
                                <p>CEBC members and strategic partners events.</p>
                            </div>
                            {render_upcomming_events(LoadedUpcommingEvents)}

                        </>
                    }
                </>
            }
        </div>

    )
}

export default EventPageComponent
