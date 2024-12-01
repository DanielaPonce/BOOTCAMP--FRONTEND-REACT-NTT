import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { jest } from '@jest/globals';
import { useNavigate } from 'react-router';
import ShippingForm from '../ShippingForm';
import { RoutesConstants } from '../../../utils/routes';
import { useCart } from '../../../hooks/useCart';
import { useDistricts } from '../../../hooks/useDistricts';

jest.mock('../../../hooks/useCart.ts');
jest.mock('../../../hooks/useDistricts');
jest.mock('react-router', () => ({
	useNavigate: jest.fn()
}));

describe('ShippingForm Component', () => {
	const mockClearCart = jest.fn();
	const mockNavigate = jest.fn();
	const mockDistricts = [
		{ id: 1, name: 'San Isidro' },
		{ id: 2, name: 'Miraflores' }
	];

	beforeEach(() => {
		(useCart as jest.Mock).mockReturnValue({ clearCart: mockClearCart });
		(useDistricts as jest.Mock).mockReturnValue(mockDistricts);
		(useNavigate as jest.Mock).mockReturnValue(mockNavigate);
		mockClearCart.mockClear();
		mockNavigate.mockClear();
	});

	beforeAll(() => {
		jest.spyOn(window, 'alert').mockImplementation(() => {});
	});

	test('renders all form elements', () => {
		render(<ShippingForm />);

		expect(screen.getByLabelText('Nombres')).toBeInTheDocument();
		expect(screen.getByLabelText('Apellidos')).toBeInTheDocument();
		expect(screen.getByLabelText('Distrito')).toBeInTheDocument();
		expect(screen.getByLabelText('Dirección')).toBeInTheDocument();
		expect(screen.getByLabelText('Referencia')).toBeInTheDocument();
		expect(screen.getByLabelText('Celular')).toBeInTheDocument();

		expect(
			screen.getByRole('button', { name: /comprar/i })
		).toBeInTheDocument();
	});

	test('displays validation errors for required fields', () => {
		render(<ShippingForm />);

		const button = screen.getByRole('button', { name: /comprar/i });

		fireEvent.click(button);

		expect(
			screen.getAllByText('Debe ingresar un valor válido').length
		).toBeGreaterThan(0);
		expect(screen.getAllByText('Campo obligatorio').length).toBe(4);
	});

	test('updates form state on input change', () => {
		render(<ShippingForm />);

		const firstNameInput = screen.getByLabelText('Nombres');
		fireEvent.change(firstNameInput, { target: { value: 'Carlos' } });

		expect(firstNameInput).toHaveValue('Carlos');
	});

	test('validates incorrect phone number format', () => {
		render(<ShippingForm />);

		const phoneInput = screen.getByLabelText('Celular');
		fireEvent.change(phoneInput, { target: { value: '12345' } });

		const button = screen.getByRole('button', { name: /comprar/i });
		fireEvent.click(button);

		expect(
			screen.getByText('Debe ser un número de 9 dígitos')
		).toBeInTheDocument();
	});

	test('submits form with valid data', () => {
		render(<ShippingForm />);

		fireEvent.change(screen.getByLabelText('Nombres'), {
			target: { value: 'Carlos' }
		});
		fireEvent.change(screen.getByLabelText('Apellidos'), {
			target: { value: 'Pérez' }
		});
		fireEvent.change(screen.getByLabelText('Distrito'), {
			target: { value: 'San Isidro' }
		});
		fireEvent.change(screen.getByLabelText('Dirección'), {
			target: { value: 'Av. Principal 123' }
		});
		fireEvent.change(screen.getByLabelText('Referencia'), {
			target: { value: 'Cerca al parque' }
		});
		fireEvent.change(screen.getByLabelText('Celular'), {
			target: { value: '987654321' }
		});

		const button = screen.getByRole('button', { name: /comprar/i });
		fireEvent.click(button);

		expect(
			screen.queryAllByText('Debe ingresar un valor válido').length
		).toBe(0);
		expect(screen.queryAllByText('Campo obligatorio').length).toBe(0);

		expect(window.alert).toHaveBeenCalledWith(
			'¡Su pedido se registró con éxito!'
		);

		expect(mockClearCart).toHaveBeenCalledTimes(1);
		expect(mockNavigate).toHaveBeenCalledWith(RoutesConstants.Home);
	});

	test('does not submit form with invalid data', () => {
		render(<ShippingForm />);

		fireEvent.change(screen.getByLabelText('Nombres'), {
			target: { value: '' }
		});
		const button = screen.getByRole('button', { name: /comprar/i });
		fireEvent.click(button);

		expect(mockClearCart).not.toHaveBeenCalled();
		expect(mockNavigate).not.toHaveBeenCalled();
	});

	test('matches snapshot', () => {
		const { asFragment } = render(<ShippingForm />);
		expect(asFragment()).toMatchSnapshot();
	});
});
