import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

function DevProject({ orbit, project, image, link, show }) {

  console.log(orbit, link, show)
  return (

    <div id={orbit} >

      <Link to={link}>
        <img className={project} src={image} onMouseOver={(e)=> show(e)} />
      </Link>

    </div>

  )

}


export default DevProject;