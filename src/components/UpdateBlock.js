import React from "react";
import { Link } from "react-router-dom";

function UpdateBlock({ name, description, url, updatedAt, id, state, color, background, image , font , stack }) {

  return (
    <Link className="update-link" to={url}>
      <div className="update-tab" id={id} style={{ visibility: state ? "visible" : "hidden", backgroundColor: background, color: color , fontFamily: font }}>

        <h3 style={{ fontSize: "28px" , borderBottom: '5px solid'  }}> {name} </h3>

        <img className="display-tab-image" src={image} alt="project" />
        <p> {description} 
          <br></br> 
         <span style={{ fontWeight: "bold" , borderBottom: '2px solid'}}>  Read More </span>
        </p>
        
        <p style={{ bottom: "0%" , fontWeight: "700", fontSize: "17px" , marginLeft: "5%" }}> {stack} </p>

      </div>
    </Link>
  )

}

export default UpdateBlock