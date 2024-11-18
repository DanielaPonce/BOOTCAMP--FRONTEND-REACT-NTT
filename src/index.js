import './styles.css';

let products = [];
let currentProducts = [];
let currentPage = 0;
let cartCounter = 0;

const productsPerPage = 8;

const searchBarElement = document.getElementById('searchBar');
const categorySelectElement = document.getElementById('categoriesSelect');

async function loadAllProductsCategories() {
	const response = await fetch('https://dummyjson.com/products/categories');
	const fetchedCategories = await response.json();
	return fetchedCategories;
}

async function loadAllProducts() {
	const response = await fetch(`https://dummyjson.com/products`);
	const { products: fetchedProducts } = await response.json();
	return fetchedProducts;
}

async function loadProductsByCategory(category) {
	const response = await fetch(
		`https://dummyjson.com/products/category/${category}`
	);
	const { products: fetchedProducts } = await response.json();
	return fetchedProducts;
}

/********* Inicio de Páginacion ********/
function getProductsByPage(page) {
	const startIndex = page * productsPerPage;
	const endIndex = startIndex + productsPerPage;
	currentProducts = products.slice(startIndex, endIndex);

	if (currentProducts.length > 0) {
		populateProductsContainerElement(currentProducts);
	}
}

function goToNextPage() {
	currentPage++;
	getProductsByPage(currentPage);
	setPagination();
}

function goToPreviousPage() {
	if (currentPage <= 0) return;
	currentPage--;
	getProductsByPage(currentPage);
	setPagination();
}

document.getElementById('next-btn').addEventListener('click', goToNextPage);
document.getElementById('prev-btn').addEventListener('click', goToPreviousPage);

/********* Fin de Páginacion ********/

function createCategoriesOptionElement(category) {
	const categoryOption = document.createElement('option');
	categoryOption.value = category.slug;
	categoryOption.text = category.name;
	return categoryOption;
}

function createProductCardElement(product) {
	const productCardElement = document.createElement('div');
	productCardElement.className = 'product-card';

	const imgElement = document.createElement('img');
	imgElement.setAttribute('src', product.thumbnail);
	imgElement.setAttribute('alt', product.tags[1]);

	const detailsElement = document.createElement('div');
	detailsElement.className = 'product-details';

	const titleElement = document.createElement('h3');
	titleElement.textContent = product.title;

	const descriptionElement = document.createElement('p');
	descriptionElement.textContent = product.description;

	const categoryElement = document.createElement('span');
	categoryElement.className = 'category';
	categoryElement.textContent = product.category;

	const priceElement = document.createElement('div');
	priceElement.className = 'price';
	priceElement.textContent = product.price;

	const addToCarButton = document.createElement('button');
	addToCarButton.textContent = 'Agregar al carrito';

	addToCarButton.addEventListener('click', () => addProductToCart());

	productCardElement.appendChild(imgElement);
	productCardElement.appendChild(detailsElement);

	detailsElement.appendChild(titleElement);
	detailsElement.appendChild(descriptionElement);
	detailsElement.appendChild(categoryElement);
	detailsElement.appendChild(priceElement);
	detailsElement.appendChild(addToCarButton);

	return productCardElement;
}

function populateProductsContainerElement(products) {
	const productContainerElement = document.getElementById('productContainer');

	while (productContainerElement.firstChild) {
		productContainerElement.removeChild(productContainerElement.firstChild);
	}

	products.forEach((product) =>
		productContainerElement.appendChild(createProductCardElement(product))
	);
}

function populateProductsCategoriesSelect(categories) {
	const categoriesSelectElement = document.getElementById('categoriesSelect');

	while (categoriesSelectElement.firstChild) {
		categoriesSelectElement.removeChild(categoriesSelectElement.firstChild);
	}

	const defaultSelectedOption = document.createElement('option');
	defaultSelectedOption.value = 'all';
	defaultSelectedOption.text = 'Todas las categorías';
	defaultSelectedOption.selected = true;

	categoriesSelectElement.appendChild(defaultSelectedOption);

	categories.forEach((category) => {
		categoriesSelectElement.appendChild(
			createCategoriesOptionElement(category)
		);
	});
}

function updateCartCounterElement() {
	const cartCounterElement = document.getElementById('cardCounter');
	cartCounterElement.textContent = cartCounter;
}

function addProductToCart() {
	cartCounter++;
	updateCartCounterElement();
}

async function init() {
	showLoader();

	const [allProducts, allProductsCategories] = await Promise.all([
		loadAllProducts(),
		loadAllProductsCategories()
	]);

	products = allProducts;

	setPagination();
	getProductsByPage(currentPage);
	populateProductsCategoriesSelect(allProductsCategories);
	populateProductsContainerElement(currentProducts);
	updateCartCounterElement();
	hideLoader();
}

document.addEventListener('DOMContentLoaded', async () => {
	init();
	searchProduct();
	handleCategorySelect();
});

function setPagination() {
	const paginationNumberContainer = document.getElementById(
		'paginator-content__number'
	);

	const paginationNumberEl = document.createElement('p');
	paginationNumberEl.id = 'numeber-page';
	paginationNumberEl.textContent = currentPage + 1;

	while (paginationNumberContainer.firstChild) {
		paginationNumberContainer.removeChild(
			paginationNumberContainer.firstChild
		);
	}

	paginationNumberContainer.appendChild(paginationNumberEl);
}

function searchProduct() {
	searchBarElement.addEventListener('input', (event) => {
		const { value } = event.target;

		if (value.length == 0) {
			populateProductsContainerElement(currentProducts);
			return;
		}

		let formattedSearchString = value.trim().toLowerCase();

		let filteredProducts = products.filter((product) =>
			product.title.toLowerCase().includes(formattedSearchString)
		);

		populateProductsContainerElement(filteredProducts);
	});
}

function handleCategorySelect() {
	categorySelectElement.addEventListener('change', async (event) => {
		const { value: selectedCategory } = event.target;

		showLoader();

		if (selectedCategory == 'all') {
			products = await loadAllProducts('');
		} else {
			products = await loadProductsByCategory(selectedCategory);
		}

		currentPage = 0;

		getProductsByPage(currentPage);
		setPagination();

		hideLoader();
	});
}

//  Funcionalidad para el loader
const loader = document.getElementById('loader');

function showLoader() {
	loader.style.display = 'flex';
}

function hideLoader() {
	loader.style.display = 'none';
}
