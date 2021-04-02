import React, { useState, useEffect } from 'react';
import { NavbarBrand, Collapse, Navbar, NavbarToggler, Nav, NavItem, Container } from 'reactstrap';
import { withRouter } from 'react-router-dom';


import { Link } from "react-router-dom";
import "./NavbarComponent.css"


import logo_white from './logo_white.png'
import logo_black from './logo_black.png'
import ExtendedNavItemComponent, { ExtendedNavItemComponent2 } from "./ExtendedNavItemComponent/ExtendedNavItemComponent"


import "./NavbarComponent.css"
import "hover.css";
const $ = require("jquery");


const NavbarComponent = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    let [Scrolled, setScrolled] = useState(false)

    useEffect(() => { //add scrolled class to elements that should behave diffrently when window is scrolled
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
    })



    return (
        <React.Fragment>
            <div className="d-flex justify-content-end ml-0 mr-0" style={{ height: "26px" }}>
                <div id="top_bar" className="header_font" >

                    <Link className="" to="/groups_programs">
                        <div style={{ paddingRight: "16px" }} >
                            cebc working groups
                        </div>
                    </Link>

                    <div style={{ paddingRight: "6px" }} >
                        log in
                    </div>
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
                                    sub_navs={[{ path: "/ABOUTUS/WHATWEDO", text: "what we do" }, { path: "/ABOUTUS/STAFF", text: "leadership" }, { path: "/ABOUTUS/FAQ", text: "FAQ" }]}
                                />

                                <ExtendedNavItemComponent2
                                    location={props.location} main_nav={{ base_path: "/MEMBERSHIP", path: "/MEMBERSHIP/BENIFITS", text: "MEMBERSHIP" }}
                                    sub_navs={[
                                        { path: "/MEMBERSHIP/BENIFITS", text: "benifits" },
                                        { path: "/MEMBERSHIP/LEVELS", text: "levels" },
                                        { path: "/MEMBERSHIP/MEMBERS", text: "members" },
                                        { path: "/MEMBERSHIP/PARTNERS", text: "partners" },
                                    ]}
                                />



                                <ExtendedNavItemComponent
                                    location={props.location} main_nav={{ path: "/EVENTS_NEWS", text: "EVENTS & NEWS" }}
                                    sub_navs={[{ path: "/All", text: "All events" }, { path: "/Upcoming", text: "Upcoming Events" }, { path: "/Past", text: "Past events" }, { path: "/News", text: "News" }
                                    ]}
                                />



                                <ExtendedNavItemComponent
                                    location={props.location} main_nav={{ path: "/KNOWLEDGECENTER", text: "KNOWLEDGE CENTER" }}
                                    sub_navs={[{ path: "/WEBINARS", text: "webinars" }, { path: "/PROJECTS", text: "projects" }, { path: "/REPORTS", text: "reports" }, { path: "/PRESENTATIONS", text: "presentations" }, { path: "/CASE_STUDIES", text: "case studies" }, { path: "/BLOGS", text: "blog" }, { path: "/PAPERS", text: "white paper" }, { path: "/PODCASTS", text: "podcasts" }, { path: "/LINKS", text: "useful links" }]}
                                />



                                <NavItem className={props.location.pathname !== "/khu" ? '' : 'nav-link-selected'}>
                                    <Link className="nav_link" to="/">
                                        contact us
                                    </Link>
                                </NavItem>
                            </Nav>

                        </Collapse>

                    </Navbar>




                </div>

            </Container>


        </React.Fragment >

    );
}

export default withRouter(NavbarComponent);