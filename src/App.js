import React from 'react';
import './App.css';
import FBlogin from './FBlogin';
import Googlelogin from './Googlelogin';
import pic from "./bobble.jpg";
export default class App extends React.Component {

  render() {
    return (
      <>
      <div>
        <img className="logo" src={pic} alt="logo"/>
      </div>
      <div className="wrapper">
        <div className="form-wrapper">
          <span className="title_signup">SIGN UP</span>
          <span className="title_create_account">Create your account</span>
          <span className="title_lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
          <div className="align-div">
              <Googlelogin/>
              <FBlogin/>
          </div>
          <h4 className="title_lorem">or</h4> 
          <form>
            <div className="firstName">
              <input 
                type="text" 
                className="" 
                placeholder="First Name" 
                name="firstName"
                noValidate
              />
            </div>
            <div className="lastName">
              <input 
                type="text" 
                className="" 
                placeholder="Last Name" 
                name="lastName"
                noValidate
              />
            </div>
            <div className="email">
              <input 
                type="text" 
                className="" 
                placeholder="Email" 
                name="email"
                noValidate
              />
            </div>
            <div className="password">
              <input 
                type="password" 
                className="" 
                placeholder="Password" 
                name="password"
                noValidate
              />
            </div>
            <div>
              <h5 className="title_signup">By clicking Sign Up, you agree to our <a href="#">Terms of Use</a> and our <a  href="#">Privacy Policy</a></h5>
            </div>
            <div>
              <a className="submit-btn" href="#">SIGN UP</a>
            </div>
          </form>
        </div>
      </div>
      </>
    );
  }
}
