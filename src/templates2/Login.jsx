import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@logos/logo_yard_sale.svg';
import '@styles/Login.scss';

export const Login = () => {
	const form = useRef(null);

	const handleSubmit = () => {
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password'),
		};
		console.log(data);
	};

	return (
		<div className="Login">
			<div className="Login-container">
				<Image src={logo} alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input 
            type="text" 
            name="email" 
            placeholder="platzi@example.com" 
            className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input 
            type="password" 
            name="password" 
            placeholder="*********" 
            className="input input-password" />
					<button 
						type='button' 
            className="primary-button login-button"
						onClick={handleSubmit}
					>
						Log in
					</button>
					<Link href="/">Forgot my password</Link>
				</form>
				<button className="secondary-button signup-button">
					Sign up
				</button>
			</div>
		</div>
	);
};


