import React from "react";
import twitter from "/Users/iigunchev/Documents/dev/React/react-business-card/my-app/src/images/twitter.svg"
import facebook from "/Users/iigunchev/Documents/dev/React/react-business-card/my-app/src/images/facebook.svg"
import instagram from "/Users/iigunchev/Documents/dev/React/react-business-card/my-app/src/images/instagram.svg"
import github from "/Users/iigunchev/Documents/dev/React/react-business-card/my-app/src/images/github.svg"

export default function FooterElement() {
    return (
        <div className="footerContainer">
            <img className="footerLogo" src={twitter} alt="Twitter"/>
            <img className="footerLogo" src={facebook} alt="Facebook"/>
            <img className="footerLogo" src={instagram} alt="Instagram"/>
            <img className="footerLogo" src={github} alt="Github"/>
        </div>
    )
}