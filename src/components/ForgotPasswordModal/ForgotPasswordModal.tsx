import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { RegexPatterns } from '../../utils/regexPatterns';
import './ForgotPasswordModal.css';

interface ForgotPasswordModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (email: string) => void;
	title: string;
	subtitle: string;
	confirmButtonText: string;
}

const ForgotPasswordModal: FC<ForgotPasswordModalProps> = ({
	isOpen,
	onClose,
	onSubmit,
	title,
	subtitle,
	confirmButtonText
}) => {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		resetValues();
	}, [isOpen]);

	const handleClose = () => {
		onClose();
		resetValues();
	};

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);

		if (RegexPatterns.Email.test(e.target.value)) {
			setError('');
		}
	};

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!RegexPatterns.Email.test(email)) {
			setError('Please enter a valid email adress.');
			return;
		}

		setError('');
		onSubmit(email);
	};

	const resetValues = () => {
		setEmail('');
		setError('');
	};

	if (!isOpen) {
		return null;
	}

	return (
		<div
			className="modal-overlay"
			onClick={onClose}
			role="dialog"
			aria-labelledby="modal-title"
			aria-describedby="modal-subtitle"
		>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<button
					className="close-modal-btn"
					onClick={handleClose}
					aria-label="Close modal"
				>
					✖
				</button>
				<img
					className="icon-img"
					src="/src/assets/icons/lock.svg"
					alt="Lock image"
				/>
				<h2 id="modal-title">{title}</h2>
				<p id="modal-subtitle">{subtitle}</p>
				<form onSubmit={handleFormSubmit}>
					<input
						type="email"
						name="email"
						value={email}
						onChange={handleEmailChange}
						placeholder="Enter your email"
						className="modal-input"
						required
						aria-label="Email input"
					/>
					{error && <span className="error-message">{error}</span>}
					<div className="buttons-content">
						<button type="submit" className="modal-btn">
							{confirmButtonText}
						</button>
						<button
							type="button"
							className="cancel-modal-btn"
							onClick={handleClose}
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ForgotPasswordModal;
