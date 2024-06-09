import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary ">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/FISAT_LOGO.png/1326px-FISAT_LOGO.png"  width="70" height="70" class="d-inline-block align-text-center"></img>
      <b> FISAT</b>
    </Link>
    <br></br>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
    
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Add">Add</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Search">Search</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/View">View</Link>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar