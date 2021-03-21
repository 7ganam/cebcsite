import React, { useEffect } from 'react'
import "./MemebersCarouselComponent.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLoading from 'react-loading';
import { Link } from "react-router-dom";

function MemebersCarouselComponent(props) {



    useEffect(() => {

        window.$("#rcbrand-demo").rcbrand({
            visibleItems: 4,
            animationSpeed: 1000,
            autoPlay: {
                enable: true,
                interval: 4000,
                pauseOnHover: true,

            }
        });

        window.$("#rcbrand-subbar").rcbrand({
            visibleItems: 8,
            animationSpeed: 1000,
            autoPlay: {
                enable: true,
                interval: 4000,
                pauseOnHover: true,

            }
        });

    }, [])

    function generate_carousel_elements_view() {
        const elements_view = props.members.map((member, index) => {
            return (
                <li>
                    <Link className="" to={`/MEMBERS/${member.id}`}>
                        <div class="mem_carousel_elem">
                            <div class="mem_carousel_sub_elem">
                                <img class="mem_carousel_img" src={member.member_image.url} />
                            </div>
                            <div style={{ marginTop: "12px" }}>
                                {member.membership_type}
                            </div>
                        </div>
                    </Link>
                </li >
            )
        })


        return (
            <>
                <ul ul id="rcbrand-demo" >
                    {elements_view}
                </ul >
            </>
        )
    }



    function generate_sub_carousel_elements_view() {
        const elements_view = props.members.map((member, index) => {
            return (
                <li>
                    <Link className="" to={`/MEMBERS/${member.id}`}>
                        <div class="mem_sub_carousel_elem">
                            <div class="mem_sub_carousel_sub_elem">
                                <img class="mem_sub_carousel_img" src={member.member_image.url} />
                            </div>
                            {/* <div style={{ marginTop: "12px" }}>
                                {member.membership_type}
                            </div> */}
                        </div>
                    </Link>
                </li >
            )
        })


        return (
            <>
                <ul ul id="rcbrand-subbar" >
                    {elements_view}
                </ul >
            </>
        )
    }
    return (
        <div id="Carousel_section">
            <div style={{ maxWidth: "1300px", margin: "auto", }}>
                {generate_carousel_elements_view()}
            </div>
            <div style={{ maxWidth: "1300px", margin: "auto", }}>
                {generate_sub_carousel_elements_view()}
            </div>
        </div>
    )
}

export default MemebersCarouselComponent
