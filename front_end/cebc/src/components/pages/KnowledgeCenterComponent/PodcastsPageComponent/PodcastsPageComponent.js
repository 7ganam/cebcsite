import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import "./PodcastsPageComponent.css"
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, } from 'reactstrap';
function PodcastsPageComponent(props) {

    console.log(`props.podcasts`, props.podcasts)
    function generate_podcasts_cards() {
        const podcasts = props.podcasts.map((podcast, index) => {
            return (


                <Col md={4} style={{ maxWidth: "300px", marginTop: "20px" }} >
                    <Card style={{ boxShadow: "rgb(0 0 0 / 10%) 0px 0px 9px 5px", padding: "8px" }} >
                        <CardImg top width="100%" src={podcast.image.url} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Season 2. Episode 2:</CardTitle>
                            <CardSubtitle>
                                {podcast.title}
                            </CardSubtitle>
                            <Link className="nav_link" to={`/KNOWLEDGECENTER/PODCASTS/${podcast.id}`}>
                                <button type="button" class="mt-2 btn btn-warning">
                                    Visit podcast
                            <i class="ml-2 fas fa-headphones"></i>
                                </button>
                            </Link>
                        </CardBody>
                    </Card>
                </Col>




            )

        })
        return podcasts;
    }



    return (
        <div style={{ marginTop: '', marginBottom: '' }}>
            <div id="title_header" style={{ marginTop: "150px ", marginBottom: "100px " }} >
                <div class="section_header" style={{ marginTop: "100px" }}>
                    <span class="section_header_inner"> podcasts </span>
                    <div className="section_header_under"></div>
                </div>
                <div>
                    <i class="fas fa-headphones" style={{ fontSize: "60px", marginTop: '20px' }}></i></div>

            </div>
            <Container style={{ marginTop: "100px ", marginBottom: "100px " }} >
                <Row style={{ display: "flex", justifyContent: "center" }} >

                    {generate_podcasts_cards()}
                </Row>
            </Container>
        </div>
    )
}

export default PodcastsPageComponent
