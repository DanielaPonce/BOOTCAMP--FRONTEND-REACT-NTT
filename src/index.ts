// tratemos de que el index quede lo más simple posible para ello podemos crear archivos que tengan las funciones que están definidas en este archivo algunos son utils, otros son builders otros son paginaciones, y así.

// la paginación funciona de manera rara si primero se filtra por una categoría, a pesar de que no hay productos para paginar aparece en la parte inferior y permite incrementar el contador de páginas.
import { fetchAllCategories } from './api/category.api';
import { fetchAllProducts, fetchProductsByCategory } from './api/product.api';
import { Category } from './models/category.types';
import { Product } from './models/product.types';
import './styles/styles.css';

let products: Product[] = [];
let currentProducts: Product[] = [];
let currentPage = 0;
let cartCounter = 0;

const productsPerPage = 8;

const searchBarElement = document.getElementById('searchBar');
const categorySelectElement = document.getElementById('categoriesSelect');

/********* Inicio de Páginacion ********/
function getProductsByPage(page: number) {
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

document.getElementById('next-btn')?.addEventListener('click', goToNextPage);
document
	.getElementById('prev-btn')
	?.addEventListener('click', goToPreviousPage);

/********* Fin de Páginacion ********/

function createCategoriesOptionElement(category: Category) {
	const categoryOption = document.createElement('option');
	categoryOption.value = category.slug;
	categoryOption.text = category.name;
	return categoryOption;
}

function createProductCardElement(product: Product) {
	const productCardElement = document.createElement('div');
	productCardElement.className = 'product-card';

	const imgElement = document.createElement('img');
	imgElement.setAttribute('src', product.thumbnail);
	imgElement.setAttribute('alt', product.title);

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
	priceElement.textContent = `$${product.price}`;

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

function populateProductsContainerElement(products: Product[]) {
	const productContainerElement = document.getElementById('productContainer');

	if (productContainerElement == null) return;

	while (productContainerElement.firstChild) {
		productContainerElement.removeChild(productContainerElement.firstChild);
	}

	products.forEach((product) =>
		productContainerElement.appendChild(createProductCardElement(product))
	);
}

function populateProductsCategoriesSelect(categories: Category[]) {
	const categoriesSelectElement = document.getElementById('categoriesSelect');

	if (categoriesSelectElement == null) return;

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
	if (cartCounterElement == null) return;
	cartCounterElement.textContent = `${cartCounter}`;
}

function addProductToCart() {
	cartCounter++;
	updateCartCounterElement();
}

async function init() {
	showLoader();

	const [allProducts, allProductsCategories] = await Promise.all([
		fetchAllProducts(),
		fetchAllCategories()
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

	if (paginationNumberContainer == null) return;

	const paginationNumberEl = document.createElement('p');
	paginationNumberEl.id = 'numeber-page';
	paginationNumberEl.textContent = `${currentPage + 1}`;

	while (paginationNumberContainer.firstChild) {
		paginationNumberContainer.removeChild(
			paginationNumberContainer.firstChild
		);
	}

	paginationNumberContainer.appendChild(paginationNumberEl);
}

function searchProduct() {
	if (searchBarElement == null) return;

	searchBarElement.addEventListener('input', (event) => {
		const { value } = event.target as HTMLInputElement;

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
	if (categorySelectElement == null) return;

	categorySelectElement.addEventListener('change', async (event) => {
		const { value: selectedCategory } = event.target as HTMLSelectElement;

		showLoader();

		if (selectedCategory == 'all') {
			products = await fetchAllProducts();
		} else {
			products = await fetchProductsByCategory(selectedCategory);
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
	if (loader == null) return;
	loader.style.display = 'flex';
}

function hideLoader() {
	if (loader == null) return;
	loader.style.display = 'none';
}
