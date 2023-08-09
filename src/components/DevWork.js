import React from "react";
import DevProject from "./DevProject";

function DevWork({ projects }) {
  console.log(projects)

    const devProjects = projects.map(
        item => {
         
            return(
                <DevProject orbit={item.orbit} project={item.project} image={item.imagePath} />
            )
        }
    )

    return (
        <div className="dev-container">





<div class="ring" id="inner-circle4">

</div>
        {devProjects}

        </div>
    )

}

export default DevWork