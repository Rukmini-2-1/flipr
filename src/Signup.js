import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css"

const Signup = () => {
    const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

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

  return (
    <div className="Log" style={{backgroundImage:"url('https://wallpapers.com/images/high/podcast-background-1920-x-1080-klhjrbzbc8cd4uu0.webp')",backgroundSize:'cover'}}>
      <div className="container">
        <div className="row d-flex justify-content-center nj">
        <center><p className="textclrL">REGISTRATION</p></center>  
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
                <label className="textclr" for="exampleInputPassword1">Re-enter Password</label>
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
              <div className="form-group  mt-3 mb-3">
                <label className="textclr" for="exampleInputPassword2">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
                <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small>
              </div>
              <center>
                <button type="submit" className="btn m-2">
                Register
              </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;
