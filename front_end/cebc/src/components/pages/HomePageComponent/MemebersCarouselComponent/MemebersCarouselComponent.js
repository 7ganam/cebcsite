import React, { useEffect } from 'react'
import "./MemebersCarouselComponent.css"
function MemebersCarouselComponent() {

    useEffect(() => {
        window.$("#rcbrand-demo").rcbrand({
            visibleItems: 4,
            animationSpeed: 4000,
            autoPlay: {
                enable: true,
                interval: 4000,
                pauseOnHover: true,

            }
        });

    }, [])

    return (
        <div>
            <div style={{ maxWidth: "1300px", margin: "auto", }}>

                <ul id="rcbrand-demo">
                    <li>
                        <div class="mem_carousel_elem">
                            <div class="mem_carousel_sub_elem">
                                <img class="mem_carousel_img" src="/members/m2.jpg" />

                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="mem_carousel_elem">
                            <div class="mem_carousel_sub_elem">
                                <img class="mem_carousel_img" src="/members/m3.jpg" />

                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="mem_carousel_elem">
                            <div class="mem_carousel_sub_elem">
                                <img class="mem_carousel_img" src="/members/m4.jpg" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="mem_carousel_elem">
                            <div class="mem_carousel_sub_elem">
                                <img class="mem_carousel_img" src="/members/m5.jpg" />

                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="mem_carousel_elem">
                            <div class="mem_carousel_sub_elem">
                                <img class="mem_carousel_img" src="/members/m3.jpg" />

                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MemebersCarouselComponent
