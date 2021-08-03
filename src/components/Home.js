import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from '../pages/elements/navbar';
const Home = () =>{
    return(
        <div>
            <Navbar/>
            <h1>This Where The Dashboard Will Be The Dashboar Home</h1>
            <button>Log Out</button>
        </div>
    )
};

export default Home;