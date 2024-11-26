import { FC, PropsWithChildren } from 'react';

interface ButtonProps {
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	disabled?: boolean;
	className?: string;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
	type = 'button',
	onClick,
	disabled = false,
	children,
	className = ''
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`btn ${className} ${disabled ? 'btn-disabled' : ''}`}
		>
			{children}
		</button>
	);
};

export default Button;
