import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
	test('matches snapshot', () => {
		const { asFragment } = render(<Footer />);
		expect(asFragment()).toMatchSnapshot();
	});
});
