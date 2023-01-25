import React from "react";
import logoanimation from "../multimedia/logoanimacion.svg"

export const Loader = () => {

    
    return (

        <div className="loader">
            <img src={logoanimation}
            alt="" />
            <h1>
                Preparing something amazing...
            </h1>
        </div>
    )
}