import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { CartProvider } from './context/CartContext';
import ProtectedRoute from './hoc/ProtectedRoute';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SummaryPage from './pages/SummaryPage';
import { RoutesConstants } from './utils/routes';
import { AuthProvider } from './context/AuthContext';
import PublicRoute from './hoc/PublicRoute';

const root = createRoot(document!.getElementById('app')!);
root.render(
	<BrowserRouter>
		<AuthProvider>
			<CartProvider>
				<Routes>
					<Route
						path={RoutesConstants.Login}
						element={
							<PublicRoute>
								<LoginPage />
							</PublicRoute>
						}
					/>

					<Route
						path={RoutesConstants.Home}
						element={
							<ProtectedRoute>
								<HomePage />
							</ProtectedRoute>
						}
					/>
					<Route
						path={RoutesConstants.Summary}
						element={
							<ProtectedRoute>
								<SummaryPage />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</CartProvider>
		</AuthProvider>
	</BrowserRouter>
);
