import React from 'react';
import { NavItem } from 'reactstrap';
import { Link } from "react-router-dom";

import "./ExtendedNavItemComponent.css"


function ExtendedNavItemComponent(props) {

    const main_nav = props.main_nav;
    const sub_navs = props.sub_navs;



    const render_sub_items = () => {

        const sub_items = sub_navs.map((sub_item, index) =>




        (<div className={props.location.pathname !== `${main_nav.path}${sub_item.path}` ? 'sub-nav-item' : 'sub-nav-item-selected'} style={{ height: "100%" }}  >
            <Link className={props.location.pathname !== `${main_nav.path}${sub_item.path}` ? 'sub_nav_link' : 'sub-nav-link-selected'} to={`${main_nav.path}${sub_item.path}`}>
                {sub_item.text}
                {/* <i class="icon solid major fas fa-lightbulb"></i> */}


            </Link>

        </div>)
        )
        return sub_items;
    }


    var win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0],
        x = win.innerWidth || docElem.clientWidth || body.clientWidth,
        y = win.innerHeight || docElem.clientHeight || body.clientHeight;

    const sub_nav_ref = React.createRef();
    const show_sub_nav = () => {
        if (x < 768) {
            sub_nav_ref.current.classList.toggle("drop")
        }
    }

    return (


        <NavItem NavItem className={props.location.pathname.startsWith(main_nav.path) ? 'nav-link-selected' : ''}
            style={{ display: 'relative' }}

        >
            <Link onClick={show_sub_nav} className="nav_link" to={main_nav.path}>
                {main_nav.text}
                <i class="fas ml-2 fa-chevron-circle-down"></i>
            </Link>
            <div
                style={{

                    transform: props.location.pathname.startsWith(main_nav.path) && x >= 768 ? 'scaleY(1)' : '',
                }}
                light
                expand={`md`}
                fixed="top"
                className="my-sub-nav"
                ref={sub_nav_ref}
            >


                {!!sub_navs &&
                    render_sub_items()
                }

            </div>
            {/* <span class="nav__sub-toggle js-sub-toggle">test</span> */}
        </NavItem >
    )
}




function ExtendedNavItemComponent2(props) {

    const main_nav = props.main_nav;
    const sub_navs = props.sub_navs;



    const render_sub_items = () => {

        const sub_items = sub_navs.map((sub_item, index) => {

            // console.log(`sub_item.path`, sub_item.path)
            // console.log(`main_nav.path`, main_nav.path)
            // console.log(`props.location.pathnam`, props.location.pathname)
            // console.log(`-----------------------------`)

            console.log(`props.location.pathnam`, props.location.pathname)


            return (
                <div className={props.location.pathname !== `${sub_item.path}` ? 'sub-nav-item' : 'sub-nav-item-selected'} style={{ height: "100%" }}  >

                    <Link className={props.location.pathname !== `${sub_item.path}` ? 'sub_nav_link' : 'sub-nav-link-selected'} to={`${sub_item.path}`}>
                        {sub_item.text}
                    </Link>

                </div>)
        }
        )
        return sub_items;
    }


    var win = window,
        doc = document,
        docElem = doc.documentElement,
        body = doc.getElementsByTagName('body')[0],
        x = win.innerWidth || docElem.clientWidth || body.clientWidth,
        y = win.innerHeight || docElem.clientHeight || body.clientHeight;

    const sub_nav_ref = React.createRef();
    const show_sub_nav = () => {
        if (x < 768) {
            sub_nav_ref.current.classList.toggle("drop")
        }
    }


    return (

        <NavItem NavItem className={props.location.pathname.startsWith(main_nav.base_path) ? 'nav-link-selected' : ''}
            style={{ display: 'relative' }}

        >
            <Link onClick={show_sub_nav} className="nav_link" to={main_nav.path}>
                {main_nav.text}
                <i class="fas ml-2 fa-chevron-circle-down"></i>
            </Link>
            <div
                style={{

                    transform: props.location.pathname.startsWith(main_nav.base_path) && x >= 768 ? 'scaleY(1)' : '',
                }}
                light
                expand={`md`}
                fixed="top"
                className="my-sub-nav"
                ref={sub_nav_ref}
            >


                {!!sub_navs &&
                    render_sub_items()
                }

            </div>
            {/* <span class="nav__sub-toggle js-sub-toggle">test</span> */}
        </NavItem >
    )
}
export default ExtendedNavItemComponent
export { ExtendedNavItemComponent2 }

