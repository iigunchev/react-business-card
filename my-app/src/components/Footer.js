import React from "react";
import twitter from "/Users/iigunchev/Documents/dev/React/react-business-card/my-app/src/images/twitter.svg"
import facebook from "/Users/iigunchev/Documents/dev/React/react-business-card/my-app/src/images/facebook.svg"
import instagram from "/Users/iigunchev/Documents/dev/React/react-business-card/my-app/src/images/instagram.svg"
import github from "/Users/iigunchev/Documents/dev/React/react-business-card/my-app/src/images/github.svg"

export default function FooterElement() {
    return (
        <div className="footerContainer">
            <a href="#"><img className="footerLogo" src={twitter} alt="Twitter"/></a>
            <a href="#"><img className="footerLogo" src={facebook} alt="Facebook"/></a>
            <a href="#"><img className="footerLogo" src={instagram} alt="Instagram"/></a>
            <a href="#"><img className="footerLogo" src={github} alt="Github"/></a>
        </div>
    )
}