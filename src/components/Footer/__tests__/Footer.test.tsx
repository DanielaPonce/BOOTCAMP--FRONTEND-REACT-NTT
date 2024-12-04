import { render } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
	test('matches snapshot', () => {
		const { container } = render(<Footer />);
		expect(container).toMatchSnapshot();
	});
});
