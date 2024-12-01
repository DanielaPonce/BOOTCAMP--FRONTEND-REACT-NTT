import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';
import SummaryPage from './pages/SummaryPage';
import { RoutesConstants } from './utils/routes';

jest.mock('./pages/HomePage', () => ({
	__esModule: true,
	default: jest.fn(() => {
		const { Link } = require('react-router');
		return (
			<div>
				HomePage
				<Link to={RoutesConstants.Summary}>Go to Summary</Link>
			</div>
		);
	})
}));

jest.mock('./pages/SummaryPage', () => ({
	__esModule: true,
	default: jest.fn(() => {
		const { Link } = require('react-router');
		return (
			<div>
				SummaryPage
				<Link to="/">Go to Home</Link>
			</div>
		);
	})
}));

describe('App Component', () => {
	const renderWithRouter = (initialEntries: string[]) => {
		render(
			<MemoryRouter initialEntries={initialEntries}>
				<CartProvider>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route
							path={RoutesConstants.Summary}
							element={<SummaryPage />}
						/>
					</Routes>
				</CartProvider>
			</MemoryRouter>
		);
	};

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('renders HomePage by default', () => {
		renderWithRouter(['/']);
		expect(screen.getByText('HomePage')).toBeInTheDocument();
		expect(screen.queryByText('SummaryPage')).not.toBeInTheDocument();
	});

	test('renders SummaryPage when navigating to /summary', () => {
		renderWithRouter([RoutesConstants.Summary]);
		expect(screen.getByText('SummaryPage')).toBeInTheDocument();
		expect(screen.queryByText('HomePage')).not.toBeInTheDocument();
	});

	test('navigates between HomePage and SummaryPage using links', async () => {
		const user = userEvent.setup();

		renderWithRouter(['/']);
		expect(screen.getByText('HomePage')).toBeInTheDocument();

		await user.click(screen.getByText('Go to Summary'));
		expect(screen.getByText('SummaryPage')).toBeInTheDocument();
		expect(screen.queryByText('HomePage')).not.toBeInTheDocument();

		await user.click(screen.getByText('Go to Home'));
		expect(screen.getByText('HomePage')).toBeInTheDocument();
		expect(screen.queryByText('SummaryPage')).not.toBeInTheDocument();
	});

	test('matches snapshot for HomePage', () => {
		const { asFragment } = render(
			<MemoryRouter initialEntries={['/']}>
				<CartProvider>
					<HomePage />
				</CartProvider>
			</MemoryRouter>
		);
		expect(asFragment()).toMatchSnapshot();
	});

	test('matches snapshot for SummaryPage', () => {
		const { asFragment } = render(
			<MemoryRouter initialEntries={[RoutesConstants.Summary]}>
				<CartProvider>
					<SummaryPage />
				</CartProvider>
			</MemoryRouter>
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
