import React from 'react'
import "./Login.css";

const Login = () => {
    const handelLogin = (e) => {
        e.preventDefault()
        console.log('subimt')
    }
  return (
		<div className='login'>
			<form onSubmit={handelLogin}>
				<input type='email' placeholder='Email Address' />
				<input
					className='input-password'
					type='password'
					placeholder='Password'
				/>
				<button className='submit-button' type='submit'>
					LOGIN
				</button>
			</form>
			<a className='forgot-password' href='w'>
				Forgot Password?
			</a>
		</div>
	);
}

export default Login