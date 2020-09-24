import React from 'react';
import GoogleLogin from 'react-google-login';
const responseGoogle = (response) => {
  console.log(response);
}

export default class Googlelogin extends React.Component {

	render() {
		return (
			<div>
			  <GoogleLogin
			    clientId="706523265653-knf7ehssnijt2242hqv06ik7oku65tnp.apps.googleusercontent.com"
			    onSuccess={responseGoogle}
			    onFailure={responseGoogle}
			    cookiePolicy={'single_host_origin'}
			    tag="a"
			    buttonText="Sign up with Google"
			    className="btn-login-google"
			  />
			  </div>
		);
	}
}
