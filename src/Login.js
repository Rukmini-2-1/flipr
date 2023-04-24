import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"
import {auth, google, facebook, twitter, github} from './config/fire'
import {signInWithPopup, signOut} from 'firebase/auth'
import {Link, Route, Routes } from "react-router-dom";

function Login() {
  const adcd="https://zeb-consulting.com/files/styles/content_layout_default/shared/media/images/2020-09/200924_Podcast_Sound_of_Finance_1920x1080_dl_e3_0.jpg.webp?itok=CPsBMUP9";
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState(null)
  
  const LoginFalse = () => (
    <div className="icon d-flex">
    <img height='40px' width='40px' onClick={() => login(google)} src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" />
      <img height='40px' width='40px' onClick={() => login(facebook)} src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-facebook-social-media-icon-png-image_6315968.png" />
      <img height='40px' width='40px' onClick={() => login(twitter)} src="https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png" />
    </div>
  )
  
function LoginTrue(){
  return(
<>
      <h1>Welcome!</h1>
      <img src={user.photoURL} style={{width:120}}/>
      <p>Welcome {user.displayName}! Your account {user.email} has been successfully logged in at {user.metadata.lastSignInTime}</p>
      <button style={{width:150}} onClick={logout}>
        Logout
      </button>
      </>
  );
}
  
  const login = async(provider) => {
    const result = await signInWithPopup(auth, provider) 
    setUser(result.user)
    setIsLogin(true)
    console.log(result)
  }

  const logout = async() => {
    const result = await signOut(auth)
    setUser(null)
    setIsLogin(false)
    console.log(result)
  }
  

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Only Letters and min length is 8 Characters and Max 22 Characters"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };
  const linkStyle = {
    paddingRight: "1px",
    color: 'blue',
    fontSize:'small',
    fontWeight:'500',
  };

  return (
    <div className="Log" style={{backgroundImage:"url('https://wallpapers.com/images/high/podcast-background-1920-x-1080-klhjrbzbc8cd4uu0.webp')",backgroundSize:'cover'}}>
      <div className="container">
        <div className="nj row d-flex justify-content-center">
        <center><p className="textclrL">LOGIN</p></center>  
          <div className="col-md-12">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group  mt-1 mb-3">
                <label className="textclr" for="EmailInput">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
                <small id="emailHelp" className="text-danger form-text">
                  {emailError}
                </small>
              </div>
              <div className="form-group  mt-3 mb-3">
                <label className="textclr" for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div>
              <div className="form-group form-check m-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label textclr">Remember me</label>
                <div className="re d-flex">
                <p>Don't have an account?</p>
                <Link to="/signup" style={linkStyle}>Register now</Link>
                </div>
              </div>
              <center>

                <Link to="/home"><button type="submit" className="btn m-2">
                Login
              </button>
              </Link>
              </center>
              <div class="hide-md-sm">
          <center><p>Or Login using:</p></center>
          <div className="k"></div>
        </div>
        
              {isLogin && user ? window.location="/home":<LoginFalse/>}
              <br/>
            </form>
          </div>
        </div>
      </div>
     
    </div>
  );
}
export default Login;
