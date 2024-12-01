import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button Component', () => {
	test('renders correctly with default props', () => {
		const text = 'Add to cart';
		render(<Button>{text}</Button>);
		const button = screen.getByRole('button');
		expect(button).toBeInTheDocument();
		expect(button).toHaveTextContent(text);
		expect(button).toHaveClass('btn');
		expect(button).not.toBeDisabled();
	});

	test('applies the className prop correctly', () => {
		render(<Button className="custom-class">Add to cart</Button>);
		const button = screen.getByRole('button');
		expect(button).toHaveClass('custom-class');
	});

	test('renders with the correct type attribute', () => {
		render(<Button type="submit">Submit</Button>);
		const button = screen.getByRole('button');
		expect(button).toHaveAttribute('type', 'submit');
	});

	test('disables the button when the disabled prop is true', () => {
		render(<Button disabled={true}>Disabled</Button>);
		const button = screen.getByRole('button');
		expect(button).toBeDisabled();
		expect(button).toHaveClass('btn-disabled');
	});

	test('calls onClick when the button is clicked', () => {
		const handleClick = jest.fn();
		render(<Button onClick={handleClick}>Click Me</Button>);
		const button = screen.getByRole('button');
		fireEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	test('does not call onClick when the button is disabled', () => {
		const handleClick = jest.fn();
		render(
			<Button onClick={handleClick} disabled={true}>
				Add to cart
			</Button>
		);
		const button = screen.getByRole('button');
		fireEvent.click(button);
		expect(handleClick).not.toHaveBeenCalled();
	});

	test('renders children correctly', () => {
		render(
			<Button>
				<span data-testid="child">Child Content</span>
			</Button>
		);
		const child = screen.getByTestId('child');
		expect(child).toBeInTheDocument();
		expect(child).toHaveTextContent('Child Content');
	});

	test('matches snapshot', () => {
		const { asFragment } = render(
			<Button className="custom-class" disabled={true}>
				Snapshot Button
			</Button>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
