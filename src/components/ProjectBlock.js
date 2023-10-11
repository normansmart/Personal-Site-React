import React from "react";
import DevWork from "./DevWork";
import "../CSS/projectBlock.css"

function ProjectBlock ({}){

   const regimen = require('../images/regimen.png')
   const jwyld = require('../images/jwyld.png')
   const bunkbud = require('../images/bunkbud.png')
   const val = require('../images/vale.png')

   const devProjectList = [{ imagePath: regimen, orbit: "regimen", project: "regimen-project" },
   { imagePath: jwyld, orbit: "jwyld", project: "jwyld-project" },
   { imagePath: bunkbud, orbit: "bunkbud", project: "bunkbud-project" },
   { imagePath: val, orbit: "val", project: "val-project" }]


return(
   <div className="project-container"> 

   <DevWork projects={devProjectList} />
   
   </div>

)

}

export default ProjectBlock