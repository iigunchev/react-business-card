import React from "react";
import email from "/Users/iigunchev/Documents/dev/React/react-business-card/my-app/src/images/email.svg"
import linkedin from "/Users/iigunchev/Documents/dev/React/react-business-card/my-app/src/images/linkedin.svg"

export default function InfoElement() {
    return (
        <div className="container">
            <img className="avatarImg" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="Mark Pollan"/>
            <h2 className="name">Mark Pollan</h2>
            <h4 className="title">Crypto Trader</h4>
            <h6 className="website"><a href="#">tradewithmark.com</a></h6>
            <div className="infoBtns">
                <button className="emailBtn"><img className="buttonLogo" src={email} alt="Email"/>Email</button>
                <button className="linkedinBtn"><img className="buttonLogo" src={linkedin} alt="Linkedin"/>LinkedIn</button>
            </div>
        </div>
    )
}