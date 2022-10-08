import React from 'react';
import './App.css';
import InnerHome from './components/Home/UserHome/InnerHome/InnerHome';
import OuterHome from './components/Home/UserHome/OuterHome/OuterHome';
import UserNav from './components/Navbar/UserNav/UserNav';
import AdminNav from './components/Navbar/AdminNav/AdminNav';
import Register from './components/Log/Register/Register';
import Login from './components/Log/LogIn/Login';
import {Route, Routes ,useNavigate} from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();
  return (
    <div className='App'> 
    {/* <Login/> */}

    <Register/>
   
     {/* <UserNav/>   */}
     {/* <OuterHome/> */}

     <Routes>
     <Route exact path='/' element={<Register/>}/>
  <Route exact path='/innerHome' element={<InnerHome/>}/>
  <Route  exact  path='/login' element={<Login />}/>
</Routes>

</div>

  )
}

