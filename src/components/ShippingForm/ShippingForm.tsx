import React from 'react';

const ShippingForm: React.FC = () => {
	return (
		<form className="shipping-form">
			<h2>Información de Envío</h2>
			<input type="text" placeholder="Nombres" required />
			<input type="text" placeholder="Apellidos" required />
			<select required>
				<option value="">Selecciona tu distrito</option>
				{/* Opciones de distrito */}
			</select>
			<input type="text" placeholder="Dirección" required />
			<input type="text" placeholder="Referencia" />
			<input type="text" placeholder="Celular" required />
			<button type="submit" className="buy-button">
				Comprar
			</button>
		</form>
	);
};

export default ShippingForm;
