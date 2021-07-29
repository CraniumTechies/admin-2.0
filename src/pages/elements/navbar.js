import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
   
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <div id="rainbow-progress-bar"></div>
       {/*Left navbar links */}
       <ul className="navbar-nav">
         <li className="nav-item">
         </li>
         <li className="nav-item d-none d-sm-inline-block">
         </li>
       </ul>
   
        {/*Right navbar links*/}
       <ul className="navbar-nav ml-auto">
       </ul>
        {/*Notifications Dropdown Menu*/}
         <li className="nav-item dropdown">
             <i className="far fa-bell"></i>
             <span className="badge badge-warning navbar-badge">0</span>
           <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
             <span className="dropdown-item dropdown-header"> 0 Notifications</span>
             <div className="dropdown-divider"></div>
             <div className="dropdown-divider"></div>
             <div className="dropdown-divider"></div>
             <div className="dropdown-divider"></div>
           </div>
         </li>
         <ul/>
     </nav>
    )
}

export default Navbar

