import React, { useEffect } from 'react'
import "./MemebersCarouselComponent.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLoading from 'react-loading';
import { Link } from "react-router-dom";
import rcbrand_overload from "./responsive-brand-logo-carousel/js/jquery.rcbrand"
import $ from "jquery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import gold from './images/gold2.png'
import silver from './images/silver2.png'
import pronze from './images/pronze2.png'

rcbrand_overload($)

function MemebersCarouselComponent(props) {

    const settings = {
        dots: false,
        infinite: true,
        // speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 10000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]

    };
    const settings2 = {
        dots: true,
        infinite: true,
        // speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    autoplay: false,
                    speed: 50,
                }
            }
        ]
    };



    function generate_carousel_elements_view() {

        const filtersed_elements_view = props.members.filter((member) => { return (member.membership_type === "partner_entity") }
        )


        const elements_view = filtersed_elements_view.map((member, index) => {

            return (
                <Link key={member.id} className="" to={`/MEMBERSHIP/MEMBERS/${member.id}`}>
                    <div class="mem_carousel_elem">
                        <div class="mem_carousel_sub_elem">
                            <img class="mem_carousel_img" src={member.entity_image.url} alt="member" />
                        </div>

                    </div>
                </Link>
            )



        })

        console.log(`elements_view`, elements_view)
        return (elements_view)
    }



    function generate_sub_carousel_elements_view() {
        const filtersed_elements_view = props.members.filter((member) => { return (member.membership_type !== "partner_entity") }
        )
        const elements_view = filtersed_elements_view.map((member, index) => {
            return (
                <Link key={member.id} className="" to={`/MEMBERSHIP/MEMBERS/${member.id}`}>
                    <div class="mem_sub_carousel_elem">
                        <div class="mem_sub_carousel_sub_elem" style={{ position: "relative" }}>


                            {member.membership_type === 'partner_member_entity' &&
                                <div style={{ width: '25px', Height: '25px', position: "absolute", bottom: "-20px", right: "5px" }}>
                                    <img class="mem_sub_carousel_img" src={gold}
                                        style={{ width: '100%', Height: '100%', objectFit: "cover" }} alt="member" />
                                </div>

                            }
                            {member.membership_type === 'corporate_member_entity' &&
                                <div style={{ width: '25px', Height: '25px', position: "absolute", bottom: "-20px", right: "5px" }}>
                                    <img class="mem_sub_carousel_img" src={silver}
                                        style={{ width: '100%', Height: '100%', objectFit: "cover" }} alt="member" />
                                </div>

                            }
                            {member.membership_type === 'assoicate_member_entity' &&
                                <div style={{ width: '25px', Height: '25px', position: "absolute", bottom: "-20px", right: "5px" }}>
                                    <img class="mem_sub_carousel_img" src={pronze}
                                        style={{ width: '100%', Height: '100%', objectFit: "cover" }} alt="member" />
                                </div>

                            }



                            <img class="mem_sub_carousel_img" src={member.entity_image.url} alt="member" />
                        </div>
                    </div>
                </Link>
            )
        })
        return (elements_view)
    }
    return (
        <div id="Carousel_section">

            <div style={{ width: "80%", maxWidth: "1200px", margin: 'auto' }}>
                {/* <h2> CEBC members</h2> */}
                <div>
                    <Slider className="main_slider" {...settings}>
                        {generate_carousel_elements_view()}
                    </Slider>
                </div>
                <div>

                    <Slider {...settings2}>
                        {generate_sub_carousel_elements_view()}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default MemebersCarouselComponent
