import './Paginator.css';

type PaginatorProps = {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
};

const Paginator: React.FC<PaginatorProps> = ({
	currentPage,
	totalPages,
	onPageChange
}) => {
	return (
		<div className="paginator-container">
			<button
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				&lt;
			</button>
			<div id="paginator-content__number">
				Page {currentPage} of {totalPages}
			</div>
			<button
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				&gt;
			</button>
		</div>
	);
};

export default Paginator;
