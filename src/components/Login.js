//internal assets
import React, {Component} from 'react';
import "../App.css"
import Img1 from "../assets/SI.Ill.png"
import CBtn1 from "../assets/Circle Button.png"
import CBtn2 from "../assets/Circle Button 2.png"
import CBtn3 from "../assets/Circle Button 3.png"
import CBtn4 from "../assets/Circle Button 4.png"
import CloseB from "../assets/Close Button.png"

//external assets
import axios from "axios";
import styled from 'styled-components';
import { Link } from 'react-router-dom';


//react styles
const Wrapper = styled.div`
width:80rem;
height: 40rem;
position: fixed;
background-color: #AEC1BA;
`
const LoginForm =  styled.form`
background-color: white;
width: 50rem;
height: 30rem;
position:absolute;
margin-left: 14rem;
margin-top: 3rem;
`
const CloseBtn = styled.img`
width: 3rem;
height: 3rem;
position: absolute;
margin-left: 46em;
margin-top: 1em;
cursor: pointer;
`
const Heading=styled.h1`
font-size: 3rem;
color: black;
position: absolute;
margin-left: 7.5rem;
margin-top: 1em;
`
const DescTwo = styled.p`
position: absolute;
font-size: 1rem;
font-weight: 600;
color: black;
margin-left: 7.5rem;
margin-top: 7em;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

`
const Card = styled.div`
width: 20em;
height: 20em;
position: absolute;
margin-left: 5rem;
margin-top: 9rem;
position: absolute;
`
const InputFields= styled.input`
background-color:#EDEDED;
margin-top: 1rem;
margin-left: 2.5rem;
padding: 1%;
border: none;
height: 40px;
width: 15rem;
float: left;
&:focus{
    border: none;
}
`
const SignInBtn = styled.input`
background-color: #14CC00;
color: white;
border: none;
border-radius: 5px;
width: 15rem;
height: 45px;
margin-top: 3rem;
margin-left: 2.5rem;
float: left;
cursor: pointer;
`
const RadioWrapper = styled.section`
width: 15rem;
height: fit-content;
padding: 0;
position: absolute;
margin-top: 8em;
margin-left: 2.5rem;
`
const RadioInput = styled.input.attrs({type:'checkbox'})`
position: absolute;
margin-top: 1px;
margin-left: -2rem;
border: solid 1px #14CC00;
height: 20px;
width: 20px;
background-color: #eee;

&~::checked{
    color: #14CC00;
}
` 
const Desc = styled.p`
font-size: 1rem;
color: black;
padding: 0;
margin-left: 4rem;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
const DescThree = styled.p`
color: black;
font-size: 1rem;
margin-left: 7em;
margin-top: 13.5em;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
position: absolute;
`
const SocialsWrapper = styled.section`
width: 15rem;
position: absolute;
margin-top: 15em;
margin-left: 4rem;
`
const Illustration = styled.img`
position: fixed;
size: cover;
margin-left: 27em;
margin-top: 4em;
height: 23em;
width: 14em;
`
//logic
class Login extends Component{
   
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
        axios.post('http://localhost:3000/api/auth/signin',{
            usernameOrEmail: this.state.email,
            password:this.state.password
        }).then(res =>{
            localStorage.setItem('cool-jwt',res.data.acessToken);
            this.props.history.push("/secured")
        }).catch(error =>{
            console.log(error)
        })

    };
    render() {   
        return(
            <Wrapper>
                <LoginForm onSubmit={this.submit}>
                    <CloseBtn src={CloseB} alt="" />
                    <Heading>Sign In</Heading>
                    <DescTwo>
                        New User? 
                        <Link 
                        to="/register"
                        className='create'
                        >
                        Create Account
                        </Link>
                    </DescTwo>
                    <Card>
                    <label 
                    htmlFor="email"
                    >
                    </label>
                    <InputFields
                    placeholder='username/email' 
                    type="text" 
                    name="email" 
                    onChange={this.onChange} 
                    value={this.state.email} 
                    />
                    <label 
                    htmlFor=""
                    >
                    </label>
                    <InputFields 
                    placeholder='password'
                    type="password" 
                    name="password" 
                    onChange={this.onChange} 
                    value={this.state.password}/>
                    <SignInBtn 
                    type="submit" 
                    value="Sign In"
                    />
                    <RadioWrapper>
                        <Desc><RadioInput type='radio'/> Keep me signed in</Desc>
                    </RadioWrapper>
                    <hr className="b"/>
                    <DescThree>or sign in with</DescThree>
                    <SocialsWrapper>
                        <Link
                        to="/google_auth"
                        >
                        <img 
                        src={CBtn1} 
                        alt="google"/>
                        </Link>
                        <Link
                        to="/facebook_auth"
                        >
                        <img 
                        src={CBtn2} 
                        alt="facebook"/>
                        </Link>
                        <Link 
                        to="linkedin_auth">
                        <img 
                        src={CBtn3} 
                        alt="LinkedIn" />
                        </Link>
                        <Link
                        to="twitter_auth"
                        >
                        <img 
                        src={CBtn4} 
                        alt="Twitter"/>
                        </Link>
                    </SocialsWrapper>
                    </Card>
                    <Illustration src={Img1} alt="_illustration_" />
                </LoginForm>
            </Wrapper>
        );
    }
    }


export default Login;