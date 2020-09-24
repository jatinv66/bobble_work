import React from 'react';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log(response);
}

export default class FBlogin extends React.Component {


	render() {
		return (
			<div>
			  	<FacebookLogin
			      appId="1088597931155576"
			      autoLoad={true}
			      textButton="Sign up with Facebook"
			      tag="a"
			      fields="name,email,picture"
			      callback={responseFacebook}
			      cssClass="my-facebook-button-class"
			      icon="fa-facebook"
			      cssClass="btn-login-facebook"
			    />
			    </div>
			);
	}
}
