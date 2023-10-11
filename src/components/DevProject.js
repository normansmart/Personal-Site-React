import React from 'react';

function DevProject({orbit, project , image}) {

console.log(orbit)
  return (

    <div id= {orbit}  >

     <img className= {project} src= {image} />

    </div>

  )

}


export default DevProject;