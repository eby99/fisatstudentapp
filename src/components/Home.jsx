import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <center> <img  src="https://i.ytimg.com/vi/mDGjdjTR30k/maxresdefault.jpg" class="d-block" ></img></center>
    </div>
    <div class="carousel-item">
     
     <center>  <img src="https://careermudhra.com/wp-content/uploads/federal-institute-of-science-and-technology-fisat-ernakulam-jpg.webp" class="d-block"></img></center>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

</div>

    </div>
  )
}

export default Home