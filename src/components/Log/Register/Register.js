import React, { useEffect } from 'react';
import './Register.css';
import Login from '../LogIn/Login';
import { useState } from 'react';
import { BrowserRouter,Navigate,Route, Routes, useNavigate } from 'react-router-dom';
import InnerHome from '../../Home/UserHome/InnerHome/InnerHome';
import OuterHome from '../../Home/UserHome/OuterHome/OuterHome';

export default function Register() {
  // const navigate = Navigate();
  const  navigate = useNavigate();
  
  const[firstname,setfirstname]= useState('');
  const[lastname,setlastname]= useState('');
  const[username,setusername]= useState('');
  const[gender,setgender]= useState('');
  const[email,setemail]= useState('');
  const[password,setpassword]= useState('');
  
  
  
  
  function saveUser(e) {
  e.preventDefault();
  let data = {firstname , lastname , username , gender , email , password};
  fetch("http://localhost:3001/registerApi",{
    method:'POST',
    mode:'cors',
    headers:{
      'Accept':'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
    
    
  }).then((result)=>{
    console.log("result:",result);
    navigate('/login');
  })

  

}


  
  
  return (

    
    
    
    <div className='Register'>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div
                className="card shadow-2-strong card-registration"
                style={{ borderRadius: 15 }}
              >
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>


                  <form    onSubmit={saveUser}>


                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="firstName"
                            className="form-control form-control-lg"
                            placeholder='First Name'
                            name='firstname'
                            value={firstname}
                            onChange={(e)=>{setfirstname(e.target.value)}}
                          />

                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="lastName"
                            className="form-control form-control-lg"
                            placeholder='lastName'
                            name='lastname'
                            value={lastname}
                            onChange={(e)=>{setlastname(e.target.value)}}
                          />

                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">

                          <input
                            type="Text"
                            className="form-control form-control-lg"
                            id="username"
                            placeholder='UserName'
                            name='username'
                            value={username}
                            onChange={(e)=>{setusername(e.target.value)}}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6 className="mb-2 pb-1">Gender: </h6>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"

                            id="femaleGender"
                            value="female"
                            name='gender'
                            onChange={(e)=>{setgender(e.target.value)}}
                          />
                          <label className="form-check-label" htmlFor="femaleGender">
                            Female
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="maleGender"
                            value="male"
                            onChange={(e)=>{setgender(e.target.value)}}
                          />
                          <label className="form-check-label" htmlFor="maleGender">
                            Male
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="otherGender"
                            value="other"
                            onChange={(e)=>{setgender(e.target.value)}}

                          />
                          <label className="form-check-label" htmlFor="otherGender">
                            Other
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="email"
                            id="emailAddress"
                            className="form-control form-control-lg"
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={(e)=>{setemail(e.target.value)}}
                          />


                        </div>
                      </div>
                      <div className="col-md-6 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            type="Password"
                            id="password"
                            className="form-control form-control-lg"
                            placeholder='Password'
                            name='password'
                            value={password}
                            onChange={(e)=>{setpassword(e.target.value)}}
                          />

                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">


                      </div>
                    </div>
                    <div className="mt-4 pt-2">
                      <input className="btn btn-primary btn-lg"
                        type="submit"
                        />


                        
                        
                      
 
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
    
  )
  

}
