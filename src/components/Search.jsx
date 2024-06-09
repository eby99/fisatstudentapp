import React, { useState } from 'react'
import Navbar from './Navbar'

const Search = () => {
    const [data, setData] = useState(
        {
                "_id":""
              
        }
)
const inputHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value})
}
const readValue = () => {
        console.log(data)
}
  return (
    <div>
                        <Navbar/>
                        <br></br> <br></br> <br></br> <br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                <div className="row g-3">
                   <center><div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="label form-label">Search Student</label>
                        <br></br>
                        <input type="text" className="input form-control" name='_id' value={data._id} onChange={inputHandler} />
                    </div> <br></br>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button  className="btn btn-warning blockx" onClick={readValue}>SEARCH</button>
                       
                    </div></center> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search