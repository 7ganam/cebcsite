import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import "./WorkingGroupsComponent.css"
import WorkingGroupCardComponent from "./WorkingGroupCardComponent/WorkingGroupCardComponent"
function WorkingGroupsComponent() {
    return (
        <div style={{ marginTop: '30px' }}>
            <Container>
                <Row className=" justify-content-center">
                    <h2 class="panel__title">
                        Working groups
                    </h2>
                </Row>
                <Row className=" justify-content-center">
                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <div className="working_group_col_div">
                            <WorkingGroupCardComponent image="CEBCSchools.jpg" title="CEBC Schools" />
                        </div>
                    </Col>
                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <div className="working_group_col_div" >
                            <WorkingGroupCardComponent image="WomeninCleanEnergy.jpg" title="women in clean energy" />
                        </div>
                    </Col>
                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <div className="working_group_col_div">
                            <WorkingGroupCardComponent image="sukuk.jpg" title="energy efficeny working group" />
                        </div>

                    </Col>
                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <div className="working_group_col_div" >
                            <WorkingGroupCardComponent image="NEVC.jpg" title="future mobility club" />
                        </div>
                    </Col>
                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <div className="working_group_col_div">
                            <WorkingGroupCardComponent image="AboutCEBC-1.jpg" title="clean energy pliciy working group" />
                        </div>

                    </Col>
                    <Col className="working_group_col" xs="12" md="7" lg="4" style={{}}>
                        <div className="working_group_col_div" >
                            <WorkingGroupCardComponent image="Efficiency.jpg" title="climate finance working group" />
                        </div>
                    </Col>
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
