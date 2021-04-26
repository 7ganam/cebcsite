import React, { useState, useEffect, useRef } from 'react'
import './StickersComponent.css'
import './ToolTip.css'

import ContactUsModalComponent from '../ContactUsModalComponent/ContactUsModalComponent'
import { createPopper } from '@popperjs/core';
import { Button, Toast, ToastBody, ToastHeader } from 'reactstrap';
import { Col, Modal, ModalBody, Row } from 'reactstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useContext } from "react";
import * as Yup from 'yup'
import { Alert } from 'reactstrap';
import ReactLoading from 'react-loading';

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
})

const initialValues = {
    email: '',
}





function StickersComponent() {

    const [ModalIsOpen, setModalIsOpen] = useState(false)
    function toggle_contact_modal() {
        setModalIsOpen(state => !state)
    }

    const [ToasterIsOpen, setToasterIsOpen] = useState(false)
    function open_Toaster() {
        setToasterIsOpen(state => !state)
    }
    function close_Toaster(event) {
        setToasterIsOpen(false)
    }

    useEffect(() => {
        const popcorn = document.querySelector('#popcorn');
        const tooltip = document.querySelector('#tooltip');
        const popperInstance = createPopper(popcorn, tooltip, {
            placement: 'left',
            modifiers: [
                {

                    name: 'offset',
                    options: {
                        offset: [3, 8],
                    },
                },
            ],
        });
        function show() {
            tooltip.setAttribute('data-show', '');

            // We need to tell Popper to update the tooltip position
            // after we show the tooltip, otherwise it will be incorrect
            popperInstance.update();
        }

        function hide() {
            tooltip.removeAttribute('data-show');
        }

        const showEvents = ['mouseenter', 'focus'];
        const hideEvents = ['mouseleave', 'blur'];

        showEvents.forEach(event => {
            popcorn.addEventListener(event, show);
        });
        hideEvents.forEach(event => {
            popcorn.addEventListener(event, hide);
        });
    }, [])


    useEffect(() => {
        const popcorn2 = document.querySelector('#popcorn2');
        const tooltip2 = document.querySelector('#tooltip2');
        const popperInstance = createPopper(popcorn2, tooltip2, {
            placement: 'left',
            modifiers: [
                {

                    name: 'offset',
                    options: {
                        offset: [0, 4],
                    },
                },
            ],
        });
        function show() {
            tooltip2.setAttribute('data-show', '');

            // We need to tell Popper to update the tooltip position
            // after we show the tooltip, otherwise it will be incorrect
            popperInstance.update();
        }

        function hide() {
            tooltip2.removeAttribute('data-show');
        }

        const showEvents = ['mouseenter', 'focus'];
        const hideEvents = ['mouseleave', 'blur'];

        showEvents.forEach(event => {
            popcorn2.addEventListener(event, show);
        });
        hideEvents.forEach(event => {
            popcorn2.addEventListener(event, hide);
        });
    }, [])


    useEffect(() => {
        setTimeout(open_Toaster, 5000);

    }, [])


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

        const request_data = {
            "email": values.email
        }
        console.log('request_data', request_data)

        try {
            setSending_data(true)
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/applications-for-user-accountsddddddd`, {
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
                // login(response_json_content)
                // toggle();
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
                <div style={{ marginLeft: "5px" }}>
                    <ReactLoading type={"spin"} color={"#00D2F9"} width={"20px"} />
                </div>
            )
        }

        else if (Fetch_success) {

            close_Toaster()
        }
        else if (Error_message) {
            setError_message(false)
            close_Toaster()
        }
        else if (formRef.current) {
            return (

                <button
                    className=''
                    type='submit'
                    disabled={!fomik_object.isValid || fomik_object.isSubmitting}
                    style={{
                        backgroundColor: (!fomik_object.isValid || fomik_object.isSubmitting) ? "grey" : "",
                        width: "30px ",
                        minWidth: '30px',
                        height: "30px ",
                        minHeight: '30px',
                        margin: '0',
                        padding: '0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: '5px'

                    }
                    }
                >
                    {(!fomik_object.isValid || fomik_object.isSubmitting) ?
                        <i class="fas fa-times"></i>
                        :
                        <i class="fas fa-arrow-alt-circle-right"></i>
                    }
                </button >
            )

        }

    }


    function stop_porpagation(event) {
        event.stopPropagation();
    }

    return (
        <>
            <ContactUsModalComponent toggle={toggle_contact_modal} ModalIsOpen={ModalIsOpen} />
            <div className='sticke_div' >
                <div className='subcripe-sticker'>
                    <div id="popcorn" aria-describedby="tooltip" className='sticker_body' onClick={open_Toaster} >
                        <i class="fas fa-envelope"></i>

                    </div>
                    <div id="tooltip" role="tooltip">
                        subscripe to our mailing list
                         <div id="arrow" data-popper-arrow></div>
                    </div>
                </div>



                <div className={`subscipe_toaster ${ToasterIsOpen ? '' : 'closed'}`} style={{}}>
                    <div className='toaster_header'>
                        Subscripe to our newsletters
                                 <div onClick={close_Toaster} class=" ml-auto mr-2">
                            <i class="fas fa-times " ></i>
                        </div>
                    </div>
                    <div className='toaster_body'>
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
                                    <Form className="" style={{}}>

                                        <div md={12} style={{ padding: '0px 0px 0px 0px ' }}>
                                            <label style={{ color: 'black', fontWeight: 'lighter', fontSize: '15px', textAlign: 'left' }} className='' htmlFor='email'>Your Email:</label>
                                        </div>
                                        <div className='toaster_form'>
                                            <div style={{ padding: '0px', marginLeft: '0px', height: '30px' }}>
                                                <Field type='email' id='email' name='email'
                                                    style={{ height: '30px', color: 'black', }}
                                                />
                                            </div>
                                            {render_submit_button()}


                                        </div>



                                    </Form>
                                )
                            }}
                        </Formik>

                    </div>

                </div>



                <div className='contact_us-sticker'>
                    <div onClick={toggle_contact_modal} id="popcorn2" aria-describedby="tooltip" className='sticker_body'>
                        <i class="fas fa-paper-plane"></i>
                    </div>
                    <div id="tooltip2" role="tooltip">
                        conact us
                        <div id="arrow" data-popper-arrow></div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default StickersComponent
