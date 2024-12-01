import { render, screen } from '@testing-library/react';
import Spinner from '../Spinner';

describe('Spinner Component', () => {
	test('matches snapshot', () => {
		const { asFragment } = render(<Spinner />);
		expect(asFragment()).toMatchSnapshot();
	});
});
