// si el contenido no es variable o condicionado, o usa servicios un snapshot basta no es necesario agregarle tantos expect
import React from 'react';
import { render, screen } from '@testing-library/react';
import { jest } from '@jest/globals';
import CartSummary from '../CartSummary';
import { useCart } from '../../../hooks/useCart';

jest.mock('../../../hooks/useCart');

describe('CartSummary Component', () => {
	const mockTotal = 123.45;

	beforeEach(() => {
		(useCart as jest.Mock).mockReturnValue({ total: mockTotal });
	});

	test('renders correctly', () => {
		render(<CartSummary />);

		const totalText = screen.getByText(
			`Total a pagar: S/ ${mockTotal.toFixed(2)}`
		);
		expect(totalText).toBeInTheDocument();
	});

	test('formats the total with two decimal places', () => {
		const customTotal = 987.6;
		(useCart as jest.Mock).mockReturnValue({ total: customTotal });

		render(<CartSummary />);

		const formattedTotal = screen.getByText(
			`Total a pagar: S/ ${customTotal.toFixed(2)}`
		);
		expect(formattedTotal).toBeInTheDocument();
		// es lo mismo que la l'inea 34
		expect(formattedTotal).toHaveTextContent('S/ 987.60');
	});

	test('handles a total of 0 correctly', () => {
		(useCart as jest.Mock).mockReturnValue({ total: 0 });

		render(<CartSummary />);

		const zeroTotal = screen.getByText('Total a pagar: S/ 0.00');
		expect(zeroTotal).toBeInTheDocument();
	});

	test('handles negative totals', () => {
		(useCart as jest.Mock).mockReturnValue({ total: -50.5 });

		render(<CartSummary />);

		const negativeTotal = screen.getByText('Total a pagar: S/ -50.50');
		expect(negativeTotal).toBeInTheDocument();
	});

	test('matches snapshot', () => {
		const { asFragment } = render(<CartSummary />);
		expect(asFragment()).toMatchSnapshot();
	});
});
