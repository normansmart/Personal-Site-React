import React from "react";
import DevWork from "./DevWork";
import "../CSS/projectBlock.css"

function ProjectBlock ({show}){

   const regimen = require('../images/regimen.png')
   const jwyld = require('../images/jwyld.png')
   const bunkbud = require('../images/bunkbud.png')
   const val = require('../images/vale.png')

   const devProjectList = [{ imagePath: regimen, orbit: "regimen", project: "regimen-project" , link: "/regimen" },
   { imagePath: jwyld, orbit: "jwyld", project: "jwyld-project" , link: "/" },
   { imagePath: bunkbud, orbit: "bunkbud", project: "bunkbud-project" , link: "/bunkbud" },
   { imagePath: val, orbit: "val", project: "val-project" , link: "/val" }]


return(
   
   <div className="project-container"> 
   <DevWork projects={devProjectList} show={show} />
   </div>

)

}

export default ProjectBlock