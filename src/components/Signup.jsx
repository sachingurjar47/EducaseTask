import React from "react";
import "./Login.css";

const Login = () => {
	const handelSignup = (e) => {
		e.preventDefault();
		console.log("subimt");
	};
	return (
		<div className='login'>
			<form onSubmit={handelSignup}>
				<input type='text' placeholder='Full Name' />
				<input
					type='email'
					className='input-email'
					placeholder='Email Address'
				/>
				<input
					className='input-password'
					type='password'
					placeholder='Password'
				/>
				<button className='submit-button' type='submit'>
					SIGN UP
				</button>
			</form>
		</div>
	);
};

export default Login;
