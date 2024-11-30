import './Footer.css'

const Footer = () => {
	return (
		<footer>
			<p>Síguenos en nuestras redes sociales</p>
			<div className="social-icons">
				<img src="/src//assets/icons/fb-icon.svg" alt="facebook icon" />
				<img
					src="/src/assets/icons/instagram-icon.svg"
					alt="instagram icon"
				/>
				<img
					src="/src/assets/icons/twitter-icon.svg"
					alt="twitter icon"
				/>
			</div>
			<p>© 2024 My Market. Todos los derechos reservados.</p>
			<p>
				<a href="#">Política de privacidad</a> |
				<a href="#">Términos de uso</a> | <a href="#">Contacto</a>
			</p>
		</footer>
	);
};

export default Footer;
