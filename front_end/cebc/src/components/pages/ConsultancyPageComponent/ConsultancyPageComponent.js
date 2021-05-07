import { Alert, Col, Container, Row } from 'reactstrap'
import './ConsultancyPageComponent.css'
import logo_black from './logo_black.png'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import React, { useCallback, useState, useEffect, useRef } from 'react'
import ReactLoading from 'react-loading';


import * as Yup from 'yup'


const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    entity: Yup.string(),
    consultancy_type: Yup.string().required('Required'),
    message: Yup.string().required('Required'),

})
const initialValues = {
    name: '',
    email: '',
    entity: '',
    consultancy_type: '',
    Message: '',
}





function ConsultancyPageComponent() {


    const formRef = useRef();
    const [modal, setModal] = useState(false);
    const [Response_json_content, setResponse_json_content] = useState({});
    const [Fetch_success, setFetch_success] = useState(false);
    const [Sending_data, setSending_data] = useState(false);
    const [Fetch_error, setFetch_error] = useState(false);
    const [Error_message, setError_message] = useState(null);
    const [formValues, setFormValues] = useState(null)


    const onSubmit = async (values, submitProps) => {
        setError_message(null)
        console.log('Form data', values)
        console.log('submitProps', submitProps)
        const request_data = {
            "sender_name": values.name,
            "entity_name": values.entity,
            "consultancy_type": values.consultancy_type,
            "email": values.email,
            "message": values.message,
        }
        console.log('request_data', request_data)

        try {
            setSending_data(true)
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/applications-for-courses`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(request_data)
            });
            const response_json_content = await response.json()
            if (!response.ok) {
                setFetch_error(true)
                throw new Error(response_json_content.message || "something went wrong");
            }
            setSending_data(false)
            setResponse_json_content(response_json_content)

            if (response_json_content.email !== "") {
                setFetch_success(true)
                console.log({ response_json_content })
            }

        } catch (err) {
            setSending_data(false)
            setError_message(err)
            console.log(err);
        }

    }

    function render_submit_button() {

        let fomik_object = formRef.current;
        if (Sending_data) {
            return (
                <div style={{ marginTop: "30px" }}>
                    <ReactLoading type={"spin"} color={"#00D2F9"} width={"30px"} />
                </div>
            )
        }

        else if (Fetch_success) {

            return (
                <Alert color="success" style={{ marginTop: "30px", color: '' }}>
                    Application submitted .. we will come back to you soon
                </Alert>
            )
        }
        else if (Error_message) {

            return (
                <div>

                    <button
                        className='signub_submit_button'
                        type='submit'
                        disabled={!fomik_object.isValid}
                        style={{ backgroundColor: (!fomik_object.isValid) ? "grey" : "" }}
                    >
                        {(!fomik_object.isValid) ? "data not valid" : "Submit"}
                    </button>
                    <Alert color="danger" style={{ marginTop: "30px", color: '' }}>

                        something went wrong please try again later

                    </Alert>
                </div>
            )
        }
        else if (formRef.current) {
            return (

                <button
                    className='signub_submit_button'
                    type='submit'
                    disabled={!fomik_object.isValid || fomik_object.isSubmitting}
                    style={{ backgroundColor: (!fomik_object.isValid || fomik_object.isSubmitting) ? "grey" : "" }}
                >
                    {(!fomik_object.isValid || fomik_object.isSubmitting) ? "data not valid" : "Submit"}
                </button>
            )

        }

    }


    return (
        <div style={{
            minHeight: "400px", paddingTop: '120px', paddingBottom: '300px'
        }}>
            <div style={{ width: "100%", height: "900px", position: "absolute", top: "-50px", right: "", overflow: "hidden" }}  >
                <img src="/assets/images/hero.png" alt="" style={{ width: "100%", height: "auto", position: "" }} />
            </div>
            <Row className=" justify-content-center" style={{ width: '90%', margin: 'auto' }}>
                <div class="section_header" style={{ marginTop: "50px", marginBottom: "30px", zIndex: '1' }}>
                    <span class="section_header_inner">
                        CONSULTANCY
                            </span>
                    <div className="section_header_under"></div>
                </div>
            </Row>


            <Container>
                <Row className="title_row">
                    <div class="section_header" style={{ marginLeft: '15px', marginTop: "50px", alignItems: 'start', textAlign: 'left', paddingLeft: ' 0', fontWeight: '400' }}>
                        <span class="section_header_inner" style={{ fontSize: '34px', zIndex: '1' }}>Our services:</span>
                        <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px', width: "250px" }}></div>
                    </div>
                </Row>
                <div className='consultancy_services_div'>
                    <img src="/services2.png" alt="" style={{ width: "100%", height: "auto" }} />
                </div>

                <Row className="title_row">
                    <div class="section_header" style={{ marginLeft: '15px', marginTop: "50px", alignItems: 'start', textAlign: 'left', paddingLeft: ' 0', fontWeight: '400' }}>
                        <span class="section_header_inner" style={{ fontSize: '34px', }}>We cover:</span>
                        <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px', width: "250px" }}></div>
                    </div>
                </Row>
                <div className='consultancy_services_div'>
                    <img src="/wecover.png" alt="" style={{ width: "100%", height: "auto" }} />
                </div>
                <div>


                    <Row className="title_row">
                        <div class="section_header" style={{ marginLeft: '15px', marginTop: "50px", alignItems: 'start', textAlign: 'left', paddingLeft: ' 0', fontWeight: '400' }}>
                            <span class="section_header_inner" style={{ fontSize: '34px', }}>apply for consultancy:</span>
                            <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '20px', width: "250px" }}></div>
                        </div>
                    </Row>


                    <div className='consultancy_form_wrapper' style={{ maxWidth: '1000px', margin: 'auto', width: '85vw', display: "flex", flexWrap: "wrap", justifyContent: "start", marginTop: "0px", marginBottom: "40px" }}>

                        <Row style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>


                            <Col md={12} style={{ height: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                <div className='consultancy_form application_form_box p-3 p-md-0'>
                                    <Row style={{ padding: "10px 10px 10px 0px ", }} >
                                        <Col md={4} >
                                            <div className='su_left_col' style={{}}>


                                                <div class="section_header" style={{ textAlign: 'left', marginTop: "30px", alignItems: 'start', width: '100%', maxWidth: '100%', margin: 'auto', }}>
                                                    <span class="section_header_inner" style={{ marginTop: "20px", fontSize: '30px', fontWeight: 'bold' }}>APPLY FOR CONSULTANCY</span>
                                                    <div className="section_header_under" style={{ fontSize: '34px', marginBottom: '0px' }}></div>
                                                </div>


                                                <div style={{ marginTop: "20px", width: '100%', display: "flex", justifyContent: 'left', alignItems: 'center' }}>
                                                    <img id="" style={{ height: "auto", width: "90%" }} src={logo_black} alt="oval" />
                                                </div>
                                                <div style={{ color: 'grey', textAlign: "left", width: '100%', display: "flex", justifyContent: 'center', marginTop: '20px', padding: '10px' }}>
                                                    Send us a message  and we will contact you back soon
                                                </div>
                                                <div style={{ color: "grey", textAlign: "left", width: '100%', display: "flex", justifyContent: 'center', marginTop: '5px', padding: '10px' }}>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col md={8}>

                                            <Formik
                                                initialValues={formValues || initialValues}
                                                validationSchema={validationSchema}
                                                onSubmit={onSubmit}
                                                enableReinitialize
                                                innerRef={formRef}
                                            >
                                                {formik => {
                                                    // console.log('Formik props', formik)
                                                    return (
                                                        <Form className="signUP_form">
                                                            <Row className='formik-control'>
                                                                <Col md={12} style={{ padding: '0px 10px 0px 0px ' }}>
                                                                    <label className='formik-label' htmlFor='name'>Your Name</label>
                                                                </Col>
                                                                <Col style={{ padding: '0px' }}>
                                                                    <Field type='text' id='name' name='name' />
                                                                </Col>
                                                                <Col xs={12} style={{ padding: '0px' }}>
                                                                    <ErrorMessage className='err_msg' name='name'>
                                                                        {error => <div className='formikerror'>{error}</div>}
                                                                    </ErrorMessage>
                                                                </Col>
                                                            </Row>

                                                            <Row className='formik-control'>
                                                                <Col md={12} style={{ padding: '0px 10px 0px 0px ' }}>
                                                                    <label className='formik-label' htmlFor='email'>Your Email</label></Col>
                                                                <Col style={{ padding: '0px' }}>
                                                                    <Field type='email' id='email' name='email' /></Col>
                                                                <Col xs={12} style={{ padding: '0px' }}>
                                                                    <ErrorMessage className='err_msg' name='email'>
                                                                        {error => <div className='formikerror'>{error}</div>}
                                                                    </ErrorMessage>
                                                                </Col>
                                                            </Row>

                                                            <Row className='formik-control'>
                                                                <Col md={12} style={{ padding: '0px 10px 0px 0px ' }}>
                                                                    <label className='formik-label' htmlFor='entity'>Your Company Name</label>
                                                                </Col>
                                                                <Col style={{ padding: '0px' }}>
                                                                    <Field
                                                                        type='text'
                                                                        id='entity'
                                                                        name='entity'
                                                                    />
                                                                </Col>
                                                                <Col xs={12} style={{ padding: '0px' }}>
                                                                    <ErrorMessage className='err_msg' name='entity'>
                                                                        {error => <div className='formikerror'>{error}</div>}
                                                                    </ErrorMessage>
                                                                </Col>
                                                            </Row>



                                                            <Row className='formik-control'>
                                                                <Col md={12} style={{ padding: '0px 10px 0px 0px ' }}>
                                                                    <label className='formik-label' htmlFor='consultancy_type'>Consultancy Type</label>
                                                                </Col>
                                                                <Col style={{ padding: '0px' }}>
                                                                    <Field
                                                                        type='text'
                                                                        id='consultancy_type'
                                                                        name='consultancy_type'
                                                                    />
                                                                </Col>
                                                                <Col xs={12} style={{ padding: '0px' }}>
                                                                    <ErrorMessage className='err_msg' name='consultancy_type'>
                                                                        {error => <div className='formikerror'>{error}</div>}
                                                                    </ErrorMessage>
                                                                </Col>
                                                            </Row>



                                                            <Row className='formik-control'>
                                                                <Col md={12} style={{ padding: '0px 10px 0px 0px ' }}>
                                                                    <label className='formik-label' htmlFor='message'>Message</label>
                                                                </Col>
                                                                <Col style={{ padding: '0px' }}>
                                                                    <Field
                                                                        as='textarea'
                                                                        type='textarea'
                                                                        id='message'
                                                                        name='message'
                                                                        placeholder='message '
                                                                    />
                                                                </Col>
                                                                <Col xs={12} style={{ padding: '0px' }}>
                                                                    <ErrorMessage className='err_msg' name='message'>
                                                                        {error => <div className='formikerror'>{error}</div>}
                                                                    </ErrorMessage>
                                                                </Col>
                                                            </Row>

                                                            {render_submit_button()}

                                                        </Form>
                                                    )
                                                }}
                                            </Formik>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                        </Row>
                    </div>
                </div>
            </Container>



        </div>
    )
}

export default ConsultancyPageComponent
