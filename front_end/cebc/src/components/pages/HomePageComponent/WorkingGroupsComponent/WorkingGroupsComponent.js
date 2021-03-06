import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import "./WorkingGroupsComponent.css"
import WorkingGroupCardComponent from "./WorkingGroupCardComponent/WorkingGroupCardComponent"





function WorkingGroupsComponent(props) {


    console.log('WorkingGroupsComponent', props)

    const render_groups = (groups) => {
        const groups_view = groups.map((group, index) => {
            return (
                <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                    <div className="working_group_col_div">
                        <WorkingGroupCardComponent image={group.Thumb_nail_image} title={group.Name} />
                    </div>
                </Col>
            )
        })
        return (groups_view)
    }


    return (
        <div style={{ marginTop: '30px' }}>
            <Container>
                <Row className=" justify-content-center">
                    <div class="section_header">
                        <span class="section_header_inner">
                            Working groups
                            </span>
                        <div className="section_header_under"></div>
                    </div>
                </Row>
                <Row className=" justify-content-center" style={{ marginTop: "40px" }}>
                    {props.programmes_state.LoadedProgrammes.length > 0 &&
                        render_groups(props.programmes_state.LoadedProgrammes)
                    }
                </Row>
                <Row className=" justify-content-center">
                    <div className="end_div">
                        <h4 className="end_text">
                            BECOME A MEMBER
                        </h4>
                    </div>
                </Row>


            </Container>
        </div>
    )
}

export default WorkingGroupsComponent
