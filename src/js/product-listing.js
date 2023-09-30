import ProductData from "./ProductData.mjs";
import ProductListing from "./ProductList.mjs";
import { getParam, capitalizeWords } from "./utils.mjs";

const category = getParam('category');

const displayCategory = capitalizeWords(category);
const categoryDisplayElement = document.querySelector('.products-category');
categoryDisplayElement.textContent = `Top Products: ${displayCategory}`;
document.title = `Top Products: ${displayCategory}`;

const dataSource = new ProductData();
const listElement = document.querySelector(".product-list");

const prodList = new ProductListing(category, dataSource, listElement);
prodList.init();