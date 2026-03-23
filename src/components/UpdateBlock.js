import React from "react";
import { Link } from "react-router-dom";

function UpdateBlock({ name, description, url, updatedAt, id, state, color, background, image }) {

    const date = new Date(updatedAt)
    const formattedDate = date.toLocaleString();

    return (
       <Link className="update-link" to={url}>
        <div className="update-tab" id={id} style={{ visibility: state ? "visible" : "hidden", backgroundColor: background, color: color }}>
    
                    <h3 style={{ fontSize: "24px" }}> {name} </h3>
                  
                  <img className="display-tab-image" src={image} alt="project"  />
                <p> {description} </p>
                <p style={{ bottom: "0%" }}>  </p>
         
        </div>
   </Link>
    )

}

export default UpdateBlock