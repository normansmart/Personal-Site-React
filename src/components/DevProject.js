import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
function DevProject({ orbit, project, image, link }) {

  console.log(orbit, link)
  return (

    <div id={orbit}  >

      <Link to={link}>
        <img className={project} src={image} />
      </Link>

    </div>

  )

}


export default DevProject;