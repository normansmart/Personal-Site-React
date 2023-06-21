import React from "react";
import { compareAsc, format } from 'date-fns'

function UpdateBlock ({name , description, url , updatedAt}){




return(
    <div className="update-tab">
    {/* <p> {updatedAt} </p> */}
    <h2 style={{fontSize: "16px" , textIndent: "20px" }}> {name} </h2>
 
    <p style={{width: "85%" , marginLeft: "7%"}}> {description} </p>
   
    </div>
)

}

export default UpdateBlock