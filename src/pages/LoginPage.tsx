import React, { FormEvent, useState } from 'react';
import ForgotPasswordModal from '../components/ForgotPasswordModal/ForgotPasswordModal';
import './LoginPage.css';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';

const LoginPage: React.FC = () => {
	const { login } = useAuth();
	const navigate = useNavigate();

	const [isModalOpen, setModalOpen] = useState(false);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async (e: FormEvent) => {
		e.preventDefault();

		try {
			await login(username, password);
			navigate('/');
		} catch (error: unknown) {
			if (error instanceof Error) {
				alert(error.message);
			} else {
				alert('An unexpected error occurred.');
			}
		}
	};

	const onSubmitModalForm = (email: string) => {
		alert('Se envió la información al correo ingresado');
		setModalOpen(false);
	};

	return (
		<div className="login-container">
			<div className="login-image">
				<img
					src="/src/assets/login/login-img.webp"
					alt="Market image"
				/>
			</div>

			<div className="login-form">
				<h1>Hello Again 👋</h1>
				<p>Welcome back you've been missed!</p>

				<form onSubmit={handleLogin}>
					<input
						type="text"
						placeholder="Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
						aria-label="Username"
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						aria-label="Password"
					/>
					<div className="form-options">
						<button
							type="button"
							onClick={() => setModalOpen(true)}
							aria-label="Forgot Password"
						>
							Forgot password?
						</button>
					</div>
					<button
						type="submit"
						className="login-btn"
						disabled={!username || !password}
					>
						Log In
					</button>
				</form>
				<p className="signup-text">
					Don't have an account? <a href="#">Sign Up</a>
				</p>
			</div>

			<ForgotPasswordModal
				isOpen={isModalOpen}
				onClose={() => setModalOpen(false)}
				onSubmit={onSubmitModalForm}
				title="Forgot your password?"
				subtitle="Enter your email to reset it!"
				confirmButtonText="Confirm"
			/>
		</div>
	);
};

export default LoginPage;
