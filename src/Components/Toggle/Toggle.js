import React from 'react'
import "./Toggle.css"

function Toggle({ toggled, onClick }) {
    return (
        <div onClick={onClick} className={`toggle ${toggled ? "night" : ""}`}>
            <div className="notch">
                <div className="crate s"/>
                <div className="crate e"/>
            </div>
            <div className="shape sm f"/>
            <div className="shape sm"/>
            <div className="shape md"/>
            <div className="shape lg"/>
        </div>
    )
}

export default Toggle
  