const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js', // Archivo de entrada
	output: {
		filename: 'bundle.js', // Nombre del archivo de salida
		path: path.resolve(__dirname, 'dist'), // Carpeta de salida
		clean: true
	},
	mode: 'development', // Cambiar a 'production' para producción
	devServer: {
		static: {
			directory: path.join(__dirname, 'src') // Carpeta a servir
		},
		compress: true, // Activa la compresión gzip
		port: 8080 // Cambia el puerto si lo deseas
	},
	module: {
		rules: [
			{
				test: /\.css$/i, // Coincide con archivos .css
				use: ['style-loader', 'css-loader'] // Usa style-loader y css-loader
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/i, // Archivos de imágenes
				type: 'assets' // Mueve los assets al directorio de salida
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html', // Ruta del archivo HTML en 'src'
			filename: 'index.html' // Nombre del archivo generado en 'dist'
		})
	]
};
