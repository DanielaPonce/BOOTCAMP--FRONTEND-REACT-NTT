import CartSummary from '../components/Cart/CartSummary';
import CartTable from '../components/Cart/CartTable';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ShippingForm from '../components/ShippingForm/ShippingForm';

const SummaryPage = () => {
	return (
		<>
			<Header />
			<div className="body-content">
				<CartTable />
				<CartSummary />
				<ShippingForm />
			</div>
			<Footer />
		</>
	);
};

export default SummaryPage;
