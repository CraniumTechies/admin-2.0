import React, {Component} from 'react'
import './adminlte.min.css';
import swal from 'sweetalert';
import axios from "axios";

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
          console.log(error)
          swal({
            title: "Oops!",
            text: "Internal Server error",
            icon: "warning",
            button: "Create Account",
          });
      })
  };

  render() {
      return (
          <div className="card">
              <form onSubmit={this.submit}>
                  <label htmlFor="email">Email</label>
                  <input placeholder="email/Username" type="text" name="email" onChange={this.onChange} value={this.state.email}/>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" placeholder="your password" onChange={this.onChange} value={this.state.password}/>
                  <input type="submit" value="Login"/>
              </form>
          </div>
      );
  }
}


export default Login;
