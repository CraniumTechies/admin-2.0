import React, { Component } from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import AuthenticatedComponent from './components/AuthenticatedComponent';
import Protected from "./components/Protected";
import Footer from './pages/elements/footer';
import Title from './pages/elements/title';
class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <Title/>
            <Switch>
                <Route path="/login"  component={Login}/>
                <Route path="/" exact component={Home}/>
                <AuthenticatedComponent>
                    <Route path="/secured" component={Protected}/>
                </AuthenticatedComponent>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
  }
}

export default App;
