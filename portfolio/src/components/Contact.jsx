import React from "react";

export function Contact (props) {
    return (

        <form action="" onSubmit="">
            <h2>
                say Hello
            </h2>
            <span>
                full name
            </span>
            <input type="text" className="inputform" name="fullName"
            required/>
            <span>
                mail
            </span>
            <input type="text" className="inputform" name="phone"
            required/>
            <span>
                full name
            </span>
            <input type="text" className="inputform" name="mail"
            required/>

        </form>
    )
}