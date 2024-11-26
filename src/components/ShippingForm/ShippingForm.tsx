import { FC, useState } from 'react';
import { useDistricts } from '../../hooks/useDistricts';
import { useCart } from '../../hooks/useCart';
import { useNavigate } from 'react-router';
import { RoutesConstants } from '../../utils/routes';
import Button from '../Button/Button';

interface FormState {
	firstName: string;
	lastName: string;
	district: string;
	address: string;
	reference: string;
	phoneNumber: string;
}

const ShippingForm: FC = () => {
	const navigate = useNavigate();

	const { clearCart } = useCart();
	const districts = useDistricts();

	const [formState, setFormState] = useState<FormState>({
		firstName: '',
		lastName: '',
		district: '',
		address: '',
		reference: '',
		phoneNumber: ''
	});

	// por qu'e no crear un type fuera?
	const [errors, setErrors] = useState<{ [key in keyof FormState]?: string }>(
		{}
	);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormState({ ...formState, [name]: value });

		if (errors[name as keyof FormState]) {
			setErrors({ ...errors, [name]: undefined });
		}
	};

	const validate = (): boolean => {
		const newErrors: { [key in keyof FormState]?: string } = {};

		// que hace el regex? debe estar en enum para mayor claridad
		if (!formState.firstName.trim() || /\d/.test(formState.firstName)) {
			newErrors.firstName = 'Debe ingresar un valor válido';
		}

		// que hace el regex? debe estar en enum para mayor claridad
		if (!formState.lastName.trim() || /\d/.test(formState.lastName)) {
			newErrors.lastName = 'Debe ingresar un valor válido';
		}

		if (!formState.district.trim()) {
			newErrors.district = 'Campo obligatorio';
		}

		if (!formState.address.trim()) {
			newErrors.address = 'Campo obligatorio';
		}

		if (!formState.reference.trim()) {
			newErrors.reference = 'Campo obligatorio';
		}

		// que hace el regex? debe estar en enum para mayor claridad
		if (!formState.phoneNumber.trim()) {
			newErrors.phoneNumber = 'Campo obligatorio';
		} else if (!/^\d{9}$/.test(formState.phoneNumber)) {
			newErrors.phoneNumber = 'Debe ser un número de 9 dígitos';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (validate()) {
			console.log(formState);
			alert('¡Su pedido se registró con éxito!');
			clearCart();
			navigate(RoutesConstants.home);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="shipping-form">
			<h2>Información de Envío</h2>

			<div className="form-group">
				<label htmlFor="firstName">Nombres</label>
				<input
					type="text"
					id="firstName"
					name="firstName"
					value={formState.firstName}
					onChange={handleInputChange}
					placeholder="Ingresa tus nombres"
				/>
				{errors.firstName && (
					<span className="error-message">{errors.firstName}</span>
				)}
			</div>

			<div className="form-group">
				<label htmlFor="lastName">Apellidos</label>
				<input
					type="text"
					id="lastName"
					name="lastName"
					value={formState.lastName}
					onChange={handleInputChange}
					placeholder="Ingresa tus apellidos"
				/>
				{errors.lastName && (
					<span className="error-message">{errors.lastName}</span>
				)}
			</div>

			<div className="form-group">
				<label htmlFor="district">Distrito</label>
				<select
					id="district"
					name="district"
					value={formState.district}
					onChange={handleInputChange}
				>
					<option value="">Selecciona tu distrito</option>
					{districts.map((district) => (
						<option key={district.id} value={district.name}>
							{district.name}
						</option>
					))}
				</select>
				{errors.district && (
					<span className="error-message">{errors.district}</span>
				)}
			</div>

			<div className="form-group">
				<label htmlFor="address">Dirección</label>
				<input
					type="text"
					id="address"
					name="address"
					value={formState.address}
					onChange={handleInputChange}
					placeholder="Ingresa tu dirección"
				/>
				{errors.address && (
					<span className="error-message">{errors.address}</span>
				)}
			</div>

			<div className="form-group">
				<label htmlFor="reference">Referencia</label>
				<input
					type="text"
					id="reference"
					name="reference"
					value={formState.reference}
					onChange={handleInputChange}
					placeholder="Referencia de tu dirección"
				/>
				{errors.reference && (
					<span className="error-message">{errors.reference}</span>
				)}
			</div>

			<div className="form-group">
				<label htmlFor="phoneNumber">Celular</label>
				<input
					type="text"
					id="phoneNumber"
					name="phoneNumber"
					value={formState.phoneNumber}
					onChange={handleInputChange}
					placeholder="Ingresa tu número de celular"
				/>
				{errors.phoneNumber && (
					<span className="error-message">{errors.phoneNumber}</span>
				)}
			</div>

			<Button type="submit" className="submit-button">
				Comprar
			</Button>
		</form>
	);
};

export default ShippingForm;
