import React, { useState } from 'react'
import Navbar from './Navbar'

const Add = () => {
        const [data, setData] = useState(
                {
                        "_id":"",
                        "firstname":"",
                        "lastname":"",
                        "college":"",
                        "dob":"",
                        "course":"",
                        "mobile":"",
                        "email":"",
                        "address":"",
                        "__v": 0
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
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                 <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     
                      <label htmlFor="" className="label form-label">ID</label>
                        <input type="text" className="input form-control" name='_id' value={data._id} onChange={inputHandler}/>
                    </div>
                    <br></br>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6 col-xxl-6">
                     
                     <label htmlFor="" className="label form-label">First Name</label>
                       <input type="text" className="input form-control" name='firstname' value={data.firstname} onChange={inputHandler}/>
                   </div>
                   <br></br>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6 col-xxl-6">
                          <label htmlFor="" className="label form-label">Last Name</label>
                          <input type="text" className="input form-control" name='lastname' value={data.lastname} onChange={inputHandler}/>
                    </div>
                    <br></br>
                    
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">College</label>
                            <input type="text" className="input form-control" name='college' value={data.college} onChange={inputHandler}/>
                    </div>
                    <br></br>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">DOB</label>
                            <input type="date" name="dob" id="" className="form-control" value={data.dob} onChange={inputHandler}/>
                    </div>
                    <br></br>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Course</label>
                            <select name="course" id="" className="form-control" value={data.course} onChange={inputHandler}>
                              <option value="MCA">MCA</option>
                              <option value="MBA">MBA</option>
                              <option value="Btech">Btech</option>
                            </select>
                    </div>
                    <br></br>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Mobile</label>
                            <input type="text" className="input form-control" name='mobile' value={data.mobile} onChange={inputHandler} />

                    </div>
                    <br></br>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="label form-label">Email</label>
                            <input type="text" className="input form-control" name='email' value={data.email} onChange={inputHandler} />

                    </div>
                    <br></br>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl-6 col-xxl-6">
                              <label htmlFor="" className="label form-label">Address</label>
                              <textarea name="address" id="" className="form-control" value={data.address} onChange={inputHandler}></textarea>

                    </div>
                    <br></br>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success block" onClick={readValue}>ADD</button>
                    </div>
                    <br></br>
                    
                </div>
            </div>
            </div>
            </div>

    </div>
  )
}

export default Add