import React from "react";
import DevProject from "./DevProject";
import CenterSun from "../images/sun.gif"

function DevWork({ projects , show }) {
    console.log(projects)

    const sunGif = require('../images/sun.gif')
    const devProjects = projects.map(
        item => {

            return (
                <DevProject orbit={item.orbit} project={item.project} image={item.imagePath} link={item.link} show={show} />
            )
        }
    )

    return (
        <div className="dev-container">
            <div class="ring" id="inner-circle4">
                <img className="sun-gif" src={sunGif} /> 
            </div>
            {devProjects}
        </div>
    )

}

export default DevWork