import React from "react"
import { Link } from "react-router-dom";
import "../CSS/navigation.css"



const Navigation = ({ }) => {


  // let [songImage, setSongImage] = useState([])

  //    // 3. Create out useEffect function
  // useEffect(() => {
  //   fetch("https://coderadio-admin-v2.freecodecamp.org/api/nowplaying_static/coderadio.json")
  //   .then(response => response.json())
  //   .then(item =>setSongImage(item.now_playing.song.art))
  //     .catch(error => console.error('Error:', error))
  // },[]);



  const image = require('../images/logo.png')


  return (
    <nav className="nav-bar">
     
      <ul className="nav-links" >
        <Link className="link" to='/'> <li> Projects</li> </Link>
        <Link className="link" to='https://www.cassie.codes/'> <li> design </li></Link>
        <Link className="link" to='/settings'> <li> About </li> </Link>
      </ul>
    </nav>
  )
}
export default Navigation 