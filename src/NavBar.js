import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <>
    <ul>
        <li> <Link className='home' to={"/"}>Home</Link> </li>
        <li> <Link className='other' to={"/Upload"}>Upload File</Link> </li>
    </ul>
    </>
  )
}

export default NavBar