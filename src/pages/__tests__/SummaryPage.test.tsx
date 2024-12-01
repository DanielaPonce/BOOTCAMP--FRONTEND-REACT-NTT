import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import SummaryPage from '../SummaryPage';

jest.mock('../../components/Header/Header', () => ({
	__esModule: true,
	default: jest.fn(() => <header>Header</header>)
}));

jest.mock('../../components/Footer/Footer', () => ({
	__esModule: true,
	default: jest.fn(() => <footer>Footer</footer>)
}));

jest.mock('../../components/Cart/CartTable', () => ({
	__esModule: true,
	default: jest.fn(() => <div>CartTable</div>)
}));

jest.mock('../../components/Cart/CartSummary', () => ({
	__esModule: true,
	default: jest.fn(() => <div>CartSummary</div>)
}));

jest.mock('../../components/ShippingForm/ShippingForm', () => ({
	__esModule: true,
	default: jest.fn(() => <form>ShippingForm</form>)
}));

describe('SummaryPage Component', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('renders Header, Footer, and main components', () => {
		render(<SummaryPage />);

		expect(Header).toHaveBeenCalledTimes(1);
		expect(Footer).toHaveBeenCalledTimes(1);

		expect(screen.getByText('CartTable')).toBeInTheDocument();
		expect(screen.getByText('CartSummary')).toBeInTheDocument();
		expect(screen.getByText('ShippingForm')).toBeInTheDocument();
	});

	test('matches snapshot', () => {
		const { asFragment } = render(<SummaryPage />);
		expect(asFragment()).toMatchSnapshot();
	});
});
