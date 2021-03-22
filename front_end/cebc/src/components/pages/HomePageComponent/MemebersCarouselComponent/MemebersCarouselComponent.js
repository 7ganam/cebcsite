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
        const elements_view = props.members.map((member, index) => {
            return (

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

            )
        })


        return (elements_view)
    }



    function generate_sub_carousel_elements_view() {
        const elements_view = props.members.map((member, index) => {
            return (
                <Link key={member.id} className="" to={`/MEMBERS/${member.id}`}>
                    <div class="mem_sub_carousel_elem">
                        <div class="mem_sub_carousel_sub_elem">
                            <img class="mem_sub_carousel_img" src={member.member_image.url} />
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
                <h2> CEBC members</h2>
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
