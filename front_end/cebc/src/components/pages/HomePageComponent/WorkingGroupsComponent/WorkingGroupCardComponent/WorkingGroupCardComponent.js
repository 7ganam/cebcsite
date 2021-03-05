import React from 'react'
import place_holder_img from "./placeholder.jpg"
import classes from "./WorkingGroupCardComponent.module.css"
function WorkingGroupCardComponent(props) {
    return (
        <div className={classes.card__group}>
            <a href="#">
                <span className={classes.card__image} style={{ backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL}${props.image.url})` }}>
                    <img src={place_holder_img} alt="working_group_image" />
                </span>
                <span className={classes.card__content}>
                    <h3>{props.title}</h3>
                </span>
            </a>
        </div>
    )
}

export default WorkingGroupCardComponent
