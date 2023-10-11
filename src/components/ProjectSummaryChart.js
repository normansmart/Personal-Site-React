import React from "react";
import "../CSS/components/projectinfo.css" 

function ProjectSummaryChart({ 
    tool1 , tool2 , tool3 ,
    date , dateTotal , 
    prototypeLink , buttonColour , color , buttonTextColor ,
    repositoryName , githubLink
}) {
    return (
        <div class="project-info-container">
            
            <div class="project-info" style={{color: color }}>

                <div class="infobox">
                    <h3> TOOLKIT </h3>
                    <p class="infobox-info"> {tool1} </p>
                    <p class="infobox-info"> {tool2} </p>
                    <p class="infobox-info"> {tool3} </p>
                </div>
                <div class="infobox">
                    <h3> DURATION </h3>
                    <p class="infobox-info"> {date} </p>
                    <p class="infobox-info"> {dateTotal} </p>
                </div>
                <div class="infobox">
                    <h3> GITHUB </h3>
                    <a href={{githubLink}} target="_blank"> <p class="infobox-info"> Repository: <br></br>{repositoryName }  </p> </a>
                </div>
                <div class="infobox">
                    <h3> PROTOTYPE </h3>
                    <a href={prototypeLink}
                        target="_blank">
                        <button style={{backgroundColor: buttonColour , color: buttonTextColor}} class="prototype"> Prototype </button>
                    </a>
                </div>

            </div>

        </div>
    )

}

export default ProjectSummaryChart