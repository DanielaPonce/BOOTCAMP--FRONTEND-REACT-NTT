const path = require('path');

module.exports = {
	entry: './src/index.js', // Archivo de entrada
	devtool: 'inline-source-map',
	output: {
		filename: 'bundle.js', // Nombre del archivo de salida
		path: path.resolve(__dirname, 'dist') // Carpeta de salida
	},
	mode: 'development', // Cambiar a 'production' para producción
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist') // Carpeta a servir
		},
		compress: true, // Activa la compresión gzip
		port: 8080 // Cambia el puerto si lo deseas
	},
	module: {
		rules: [
			{
				test: /\.css$/, // Aplica esta regla a los archivos .css
				use: ['style-loader', 'css-loader'] // Usa estos loaders
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/i, // Archivos de imágenes
				type: 'assets' // Mueve los assets al directorio de salida
			}
		]
	}
};
