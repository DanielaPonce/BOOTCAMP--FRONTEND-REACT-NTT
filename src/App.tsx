// cuando estamos ne la pagina resumen y le dio otro click al carrito se agrega otro path resumen -> /summary/summary
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';
import SummaryPage from './pages/SummaryPage';
import { RoutesConstants } from './utils/routes';

const root = createRoot(document!.getElementById('app')!);
root.render(
	<BrowserRouter>
		<CartProvider>
			<Routes>
				<Route index element={<HomePage />} />
				<Route
					path={RoutesConstants.summary}
					element={<SummaryPage />}
				/>
			</Routes>
		</CartProvider>
	</BrowserRouter>
);
