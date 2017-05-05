import React from "react";

export const WillowModal = ({heading, visible, children, actions}) => {
    return (
        <section className="willow-modal" role="alertdialog" data-modal-close={!visible}>
            <div className="willow-modal__container">
                <h1 className="willow-modal__heading">{heading}</h1>
                <div className="willow-modal__content">
                    <div className="willow-styling-context">{children}</div>
                </div>
                <ul className="willow-modal__actions">
                    {actions.map((action) => {
                        return <li className="willow-modal__action">{action}</li>
                    })}
                </ul>
            </div>
        </section>
    );
}