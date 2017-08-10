import React from "react";

import "./phone.scss";

export default function(){
    return (
        <div className="phone-container">
            <ul>
                <li className="phone">
                    <label>You can always give us a call</label>
                    <span className="telephone">+972 3 578 6660</span>
                </li>
                <li className="fax">
                    <label>or fax us</label>
                    <span className="faxNumber">+972 3 578 6665</span>
                </li>
            </ul>
        </div>
    )
}
