import React from "react";

function Card({
    title = "",
    description = "",
    footer = "",
    children,
    clickHandler = function() {},
    id,
    noclick=false
}) {
    return (
        <div className={noclick ? "Card" : "Card Card-hover"} onClick={clickHandler} id={id}>
            <h3 className="Card-title">{title}</h3>
            <p className="Card-description">{description}</p>
            <div>{children}</div>
            <small className="Card-footer">{footer}</small>
        </div>
    );
}

export default Card;
