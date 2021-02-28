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
            </Link>
        </div>)
        )
        return sub_items;
    }


    return (


        <NavItem NavItem className={props.location.pathname.startsWith(main_nav.path) ? 'nav-link-selected' : ''} >
            <Link className="nav_link" to={main_nav.path}>
                {main_nav.text}
            </Link>
            <div
                style={{ display: props.location.pathname.startsWith(main_nav.path) ? 'flex' : '' }}
                light
                expand={`md`}
                fixed="top"
                className="my-sub-nav"
            >


                {!!sub_navs &&
                    render_sub_items()
                }
            </div>
        </NavItem >
    )
}

export default ExtendedNavItemComponent
