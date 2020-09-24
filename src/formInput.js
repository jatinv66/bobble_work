import React from 'react';

export default class formInput extends React.Component {
	render() {
		return (
			<div>
			<form onSubmit={this.handleSubmit} noValidation>
            <div className="firstName">
              <input 
                type="text" 
                className="" 
                placeholder="First Name" 
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="lastName">
              <input 
                type="text" 
                className="" 
                placeholder="Last Name" 
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="email">
              <input 
                type="text" 
                className="" 
                placeholder="Email" 
                name="email"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <input 
                type="password" 
                className="" 
                placeholder="Password" 
                name="password"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div>
            <h5 className="title_signup">By clicking Sign Up, you agree to our <a>Terms of Use</a> and our <a>Privacy Policy</a></h5>
            </div>
            <div>
            <a className="submit-btn" href="#">SIGN UP</a>
            </div>
          </form>
          </div>
		);
	}
}
