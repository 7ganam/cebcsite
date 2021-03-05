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


    return (


        <NavItem NavItem className={props.location.pathname.startsWith(main_nav.path) ? 'nav-link-selected' : ''}
            style={{ display: 'relative' }}
        >
            <Link className="nav_link" to={main_nav.path}>
                {main_nav.text}
                <i class="fas ml-2 fa-chevron-circle-down"></i>
            </Link>
            <div
                style={{

                    height: props.location.pathname.startsWith(main_nav.path) ? 'auto' : '',
                }}
                light
                expand={`md`}
                fixed="top"
                className="my-sub-nav"
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
