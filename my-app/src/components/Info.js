import React from "react";

export default function InfoElement() {
    return (
        <div className="container">
            <img className="avatarImg" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="Mark Pollan"/>
            <h2 className="name">Mark Pollan</h2>
            <h4 className="title">Crypto Trader</h4>
            <h6 className="website">tradewithmark.com</h6>
            <div className="infoBtns">
                <button className="emailBtn">Email</button>
                <button className="linkedinBtn">LinkedIn</button>
            </div>
        </div>
    )
}