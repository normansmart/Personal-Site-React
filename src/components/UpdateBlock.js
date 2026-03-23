import React from "react";
import { Link } from "react-router-dom";

function UpdateBlock({ name, description, url, updatedAt, id, state }) {

    const date = new Date(updatedAt)
    const formattedDate = date.toLocaleString();

    return (

        <div className="update-tab" id={id} style={{ visibility: state ? "visible" : "hidden" }}>
            <Link className="update-link" to={url}>
                <h3 style={{ fontSize: "18px" }}> {name} </h3>

                <p> {description} </p>
                <p style={{ bottom: "0%" }}> Last Updated: {formattedDate} </p>
            </Link>
        </div>

    )

}

export default UpdateBlock