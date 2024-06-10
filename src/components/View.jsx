import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const View = () => {
    const[data, changeData] = useState([])
    const fetchData = () =>{
        axios.get("https://courseapplogix.onrender.com/getdata").then(
            (response) => {
                console.log(response.data)
                changeData(response.data)
            }
        ).catch((error) => {
            console.error("Error fetching data:", error);
          
            alert("Failed to fetch data. Please try again later.");
        }).finally(() => {
            console.log("Fetch attempt finished.");
           
        });
    }
        useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>
        <br></br> <br></br> <br></br> <br></br>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                        <div className="row g-3">
                        <table class="table">
                <thead>
                  <tr>
                    {/* <th scope="col">ID</th> */}
                    <th scope="col">First Name</th>
                    <th scope="col">Second Name</th>
                    <th scope="col">College</th>
                    <th scope="col">DOB</th>
                    <th scope="col">Course</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                  </tr>
                </thead>
                <tbody>
                            {data.map(
                                (value, index) => {
                                    return <tr>
                                        {/* <th scope="row">{value._id}</th> */}
                                        <td>{value.firstname}</td>
                                        <td>{value.lastname}</td>
                                        <td>{value.college}</td>
                                        <td>{value.dob}</td>
                                        <td>{value.course}</td>
                                        <td>{value.mobile}</td>
                                        <td>{value.email}</td>
                                        <td>{value.address}</td>
                                    </tr>
                                }

                                )
                            }
     </tbody>
     </table>
    </div>
    </div>
    </div>
    </div>
    </div>

  )
}

export default View