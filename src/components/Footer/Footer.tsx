const Footer = () => {
	return (
		<footer>
			<p>Síguenos en nuestras redes sociales</p>
			<div className="social-icons">
				<img src="/assets/fb-icon.svg" alt="facebook icon" />
				<img src="/assets/instagram-icon.svg" alt="instagram icon" />
				<img src="/assets/twitter-icon.svg" alt="twitter icon" />
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
