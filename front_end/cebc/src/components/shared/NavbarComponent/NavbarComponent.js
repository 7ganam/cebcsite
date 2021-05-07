import React, { useState, useEffect } from 'react';
import { NavbarBrand, Collapse, Navbar, NavbarToggler, Nav, NavItem, Container } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { LoginContext } from "../../../contexts/LoginContext"
import { useContext } from "react";


import { Link } from "react-router-dom";
import "./NavbarComponent.css"


import logo_white from './logo_white.png'
import logo_black from './logo_black.png'
import ExtendedNavItemComponent, { ExtendedNavItemComponent2 } from "./ExtendedNavItemComponent/ExtendedNavItemComponent"


import "./NavbarComponent.css"
import "hover.css";
const $ = require("jquery");


const NavbarComponent = (props) => {

    const { login, IsLoggedIn, Token, ToggleLoginModal, logout, IsSignUpModalShown, ToggleSignUpModal, User } = useContext(LoginContext);

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    let [Scrolled, setScrolled] = useState(false)

    useEffect(
        () => { //add scrolled class to elements that should behave diffrently when window is scrolled
            var $navitem = $(".nav-item"); // add the scrolled class with jquery to all the nave links when scrolled
            var $navlink = $(".nav_link"); // add the scrolled class with jquery to all the nave links when scrolled
            $navlink.toggleClass('scrolled', $(document).scrollTop() > $navlink.height());
            $navitem.toggleClass('not_scrolled', $(document).scrollTop() < $navlink.height());
            $(function () {
                $(document).scroll(function () {
                    var $nav = $("#my_nav"); // change the Scrolled state when we scroll more than the navbar height
                    if ($(this).scrollTop() > $nav.height()) {
                        if (!Scrolled) { setScrolled(true) }
                    }
                    else {
                        if (Scrolled) { setScrolled(false) }
                    }
                    $navlink.toggleClass('scrolled', $(this).scrollTop() > $navlink.height());
                    $navitem.toggleClass('not_scrolled', $(this).scrollTop() < $navlink.height());
                });
            });


            // Close Navbar when clicked outside
            $(window).on('click', function (event) {
                // element over which click was made

                var clickOver = $(event.target)
                // console.log(`clickOver`, $('.navbar .navbar-toggler').attr('aria-expanded'))
                if ($('.navbar-collapse').hasClass("show") && clickOver.closest('.navbar').length === 0) {
                    // Click on navbar toggler button
                    $('.navbar-toggler').click();
                }
            });


        })



    return (
        <React.Fragment>
            <div className="d-flex justify-content-end ml-0 mr-0" style={{ height: "26px" }}>
                <div id="top_bar" className="header_font" >


                    <Link id='members_only_link' className="pulsating-circle" to="/MEMBERSHIP/MEMBERSONLY">
                        <div style={{ paddingRight: "16px", color: "black" }} >
                            Members only content
                        </div>
                    </Link>

                    <Link className="" to="/groups_programs">
                        <div style={{ paddingRight: "16px", color: "black" }} >
                            Working groups
                        </div>
                    </Link>


                    {!IsLoggedIn ?
                        <>
                            <div onClick={ToggleLoginModal} style={{ paddingRight: "16px", cursor: 'pointer' }}>
                                Login
                            </div>
                            <div onClick={ToggleSignUpModal} style={{ paddingRight: "6px", cursor: 'pointer' }}>
                                < >  Signup </>
                            </div>
                        </>
                        :
                        <div onClick={logout} style={{ paddingRight: "6px", cursor: 'pointer' }}>
                            < >  Logout </>
                        </div>

                    }
                </div>
            </div>
            <Container fluid id="nav_bar_container" >
                <div>
                    {/* // adding classes to navbar based on scrolled and path  */}
                    <Navbar
                        light
                        expand={`md`}
                        fixed="top"
                        style={{ alignItems: "stretch" }}
                        className={`
                         light  py-lg-0
                        ${Scrolled ? "scrolled" : ""} 
                        ${!Scrolled && !(props.location.pathname === "/") ? "dark_bg" : ""}
                        `}
                        id="my_nav"
                    >

                        <NavbarBrand id="nav_brand" href="/" className="p-0">
                            <img id="nav_img" style={{ height: "100%", width: "auto" }} src={!Scrolled && $(window).width() > 768 ? logo_white : logo_black} alt="oval" />
                        </NavbarBrand>

                        <NavbarToggler onClick={toggle} className="ml-auto" />

                        <Collapse isOpen={isOpen} navbar className="justify-content-end" >
                            <Nav className="ml-auto d-flex nav_list" navbar style={{}}>



                                <NavItem className={`${props.location.pathname !== "/" ? '' : 'nav-link-selected'} `}>
                                    <Link className="nav_link" to="/">
                                        Home
                                    </Link>
                                </NavItem>

                                {/* <NavItem className={`${props.location.pathname !== "/ABOUTUS" ? '' : 'nav-link-selected'} `}>

                                    <Link className="nav_link" to="/ABOUTUS">
                                        about
                                    </Link>
                                </NavItem> */}

                                <ExtendedNavItemComponent2
                                    location={props.location} main_nav={{ base_path: "/ABOUTUS", path: "/ABOUTUS/WHATWEDO", text: "ABOUT" }}
                                    sub_navs={[
                                        { path: "/ABOUTUS/WHATWEDO", text: "about" },
                                        { path: "/ABOUTUS/STAFF/BOARD", text: "Board of Directors" },
                                        { path: "/ABOUTUS/STAFF/ADVISORY", text: "Adivsory Board" },
                                        { path: "/ABOUTUS/STAFF/TEAM", text: "team" },
                                        { path: "/ABOUTUS/JOBS", text: "careers" },
                                        // { path: "/ABOUTUS/FAQ", text: "FAQ" }
                                    ]}
                                />

                                <ExtendedNavItemComponent2
                                    location={props.location} main_nav={{ base_path: "/MEMBERSHIP", path: "/MEMBERSHIP/BENIFITS", text: "MEMBERSHIP" }}
                                    sub_navs={[
                                        { path: "/MEMBERSHIP/BENIFITS", text: "benifits & levels" },
                                        // { path: "/MEMBERSHIP/LEVELS", text: "levels" },
                                        { path: "/MEMBERSHIP/MEMBERS", text: "members" },
                                        { path: "/MEMBERSHIP/PARTNERS", text: "partners" },
                                        { path: "/MEMBERSHIP/JOIN", text: "join the cebc" },
                                        { path: "/MEMBERSHIP/MEMBERSONLY", text: "Members only section" },
                                    ]}
                                />



                                <ExtendedNavItemComponent
                                    location={props.location} main_nav={{ path: "/EVENTS_NEWS", text: "EVENTS & NEWS" }}
                                    sub_navs={[{ path: "/All", text: "All events" }, { path: "/Upcoming", text: "Upcoming Events" }, { path: "/Past", text: "Past events" },
                                    { path: "/News", text: "News" },

                                    ]}
                                />
                                <NavItem className={`${props.location.pathname !== "/ACADEMY" ? '' : 'nav-link-selected'} `}>
                                    <Link className="nav_link" to="/ACADEMY">
                                        ACADEMY
                                    </Link>
                                </NavItem>

                                <NavItem className={`${props.location.pathname !== "/CONSULTANCY" ? '' : 'nav-link-selected'} `}>
                                    <Link className="nav_link" to="/CONSULTANCY">
                                        CONSULTANCY
                                    </Link>
                                </NavItem>




                                <ExtendedNavItemComponent
                                    location={props.location} main_nav={{ path: "/KNOWLEDGECENTER", text: "KNOWLEDGE CENTER" }}
                                    sub_navs={[
                                        { path: "/REPORTS", text: "publications" },
                                        { path: "/WEBINARS", text: "webinars" },
                                        { path: "/PODCASTS", text: "podcast" },
                                        { path: "/PRESENTATIONS", text: "presentations" },
                                        { path: "/PROJECTS", text: "projects" },
                                        { path: "/CASE_STUDIES", text: "case studies" },
                                        { path: "/BLOGS", text: "blogs" },
                                        // { path: "/PAPERS", text: "NEWSLETTER" },
                                        { path: "/NEWSLETTER", text: "NEWSLETTER" },
                                        { path: "/LINKS", text: "useful links" }
                                    ]}
                                />


                                {IsLoggedIn &&
                                    <>

                                        <NavItem >
                                            <div style={{
                                                width: "70px", height: "100%", borderRadius: "100%",
                                                display: 'flex', justifyContent: 'center', alignItems: 'center'
                                            }} >
                                                <img style={{ width: "50px", height: "50px", borderRadius: "100%", }}
                                                    src={User.image.url || '/user.png'} alt="profile"
                                                />
                                            </div>
                                        </NavItem>



                                    </>
                                }
                            </Nav>

                        </Collapse>

                    </Navbar>




                </div>

            </Container>


        </React.Fragment >

    );
}

export default withRouter(NavbarComponent);