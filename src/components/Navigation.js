import React from "react"
import { Link } from "react-router-dom";
import "../CSS/navigation.css"
const Navigation = ({  }) => {

    const image = require('../images/logo.png')
    return (
      <nav className="nav-bar">

<img className="logo" src={image} />
        <ul className="nav-links" >
          <Link className="link"  to='/'> <li> Development</li> </Link>
          <Link className="link"  to='/declaration'> <li> Art/Design </li></Link>
          <Link className="link"  to='/explore'>   <li> Blog </li> </Link>
          <Link className="link"  to='/settings'> <li> About </li> </Link>
        </ul>
      </nav>
    )
  }
  export default Navigation 