import React from "react";

export const WillowButton = ({children, modifier, ...props}) => {
    const buttonClass = modifier ? `willow-button--${modifier}` : "willow-button";

    return (
        <button className={buttonClass} {...props}>{children}</button>
    );
}