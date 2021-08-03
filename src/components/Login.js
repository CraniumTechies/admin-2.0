import React, {Component} from 'react';
import axios from "axios";
import '../styling/adminlte.min.css';
import swal from 'sweetalert';
import Home from './Home';
import { Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

class Login extends Component {

    state={
        email:'',
        password:''
    };

    onChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    submit = e =>{
        e.preventDefault();
        axios.post('http://localhost:3000/api/auth/signin', {
            usernameOrEmail: this.state.email,
            password:this.state.password
        }).then(res => {
            localStorage.setItem('cool-jwt',res.data.accessToken);
            this.props.history.push("/secured")
        }).catch(error =>{
            alert('There was an internal server error. We will try to log you in again in a few, Please be patient.')
        })
    };

    render() {
        return (
            <BrowserRouter>
            <div className="hold-transition login-page">
            <div id="rainbow-progress-bar"></div>
            <div className="login-box">
            <div className="login-logo">
            <a href=""><b>Admin</b>Pallazo</a>
            </div>
            {/*/.login-logo*/} 
            <div className="card">
            <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>

            <form  id="login_form" onSubmit={this.submit}>
            <div>
            <div className="input-group mb-3">
            <input type="text"  name="email" htmlFor="email" className="form-control" id="usernameOrEmail" placeholder="Username Or Email" onChange={this.onChange} value={this.state.email}/>
            <div className="input-group-append">
            <div className="input-group-text">
            <span className="fas fa-envelope"></span>
            </div>
            </div>
            </div>
            <div className="error mb-3" id="userNameOrEmailError"></div>
            </div>
            <div>
            <div className="input-group mb-3">
            <input type="password" className="form-control" id="password" placeholder="Password" htmlFor="Password" name="password" onChange={this.onChange} value={this.state.password}/>
            <div className="input-group-append">
            <div className="input-group-text">
            <span className="fas fa-lock"></span>
            </div>
            </div>
            </div>
            <div className="error mb-3" id="passwordError"></div>
            </div>
            <div className="row">
            <div className="col-8">
            <div className="icheck-primary">
            <input type="checkbox" id="remember"></input>
            <label for="remember">Remember Me</label>
            </div>
            </div>
              {/*/.col*/}
            <div className="col-4">
            <input className="btn btn-primary btn-block" id="signin_btn" type="submit" value="Login"/>
           </div>
          {/*/.col*/}
           </div>
           </form>

      <p className="mb-1">
        <a href="">I forgot my password</a>
      </p>
    </div>
    {/* /.login-card-body*/}
  </div>
</div>



</div>


             {/*  <form id="login_form" onSubmit={this.submit}>
                    <label htmlFor="">Email</label>
                    <input type="text"  name="email" className="form-control" id="usernameOrEmail" onChange={this.onChange} value={this.state.email}/>
                    <label htmlFor="">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={this.onChange} value={this.state.password}/>
                    <input className="btn btn-primary btn-block" id="signin_btn" type="submit" value="Login"/>
                </form>*/}
            </BrowserRouter>
        );
    }
}

export default Login;