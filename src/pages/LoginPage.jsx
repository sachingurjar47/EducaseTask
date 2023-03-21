import React, { useState } from 'react'
import './LoginPage.css';
import Login from '../components/Login'
import Signup from '../components/Signup'

const LoginPage = () => {

    const [login, setlogin] = useState('login',);
    const handleLogin = (payload) => {
        setlogin(payload)
        console.log('clicke1')
        
    }
    const handleSignup = (payload) => { 
        setlogin(payload)
        console.log('clicke')

    }
    return (
			<div>
				<header className='App-header'>
					<img
						src='https://cdn.cdnlogo.com/logos/r/63/react.svg'
						className='App-logo'
						alt='logo'
					/>
					<p className='Random-text'>
						SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT
					</p>
				</header>
				<div className='login-signup-select'>
					<button
						style={{
							borderBottom: `${
								login === "login" ? "2.74px solid #E70B89" : ""
							}`,
						}}
						onClick={() => {
							handleLogin("login");
						}}
					>
						Login
					</button>
					<button
						onClick={() => {
							handleSignup("signup");
						}}
					>
						Signup
					</button>
				</div>
				{login === "login" ? <Login /> : <Signup />}
				<div className='login-with-container'>
					<a className='login-with-link' href='w'>
						or login with
					</a>

					<div className='login-with-icons'>
						<a href='www.google.com'>
							<img
								src='https://img.icons8.com/color/48/null/google-logo.png'
								alt='google'
							/>
						</a>
						<a href='www.facebook.com'>
							<img
								src='https://cdn.cdnlogo.com/logos/f/84/facebook.svg'
								alt='fb'
							/>
						</a>
						<a href='www.twitter.com'>
							<img
								src='https://img.icons8.com/color/48/null/twitter--v1.png'
								alt='twitter'
							/>
						</a>
					</div>

					<p className='create-new'>
						Don’t have an account? <a href='Create new now'>Create new now!</a>
					</p>
					<p className='terms-conditions'>
						By signing up, you are agree with our{" "}
						<a href='terms&Conditions'>Terms & Conditions</a>
					</p>
				</div>
			</div>
		);
}

export default LoginPage