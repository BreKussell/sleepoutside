import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
    return `
    <li class="product-card">
        <a href="../product_pages/index.html?product=${product.Id}">
        <img src="${product.Images.PrimaryMedium}" alt="Image of ${product.Name}">
        <h3 class="card__brand">${product.Brand.Name}</h3>
        <h2 class="card__name">${product.Name}</h2>
        <p class="product-card__price">${product.ListPrice}</p>
        </a>
    </li>
    `
}

export default class ProductListing {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }
    async init() {
        const list = await this.dataSource.getData(this.category);
        this.renderList(list);
    }
    renderList(products) {
        renderListWithTemplate(productCardTemplate, this.listElement, this.excludeProducts(products));
    }
    excludeProducts(products) {
        const excludedProducts = ['989CG', '880RT'];
        let displayProducts = [];
        products.forEach(item => {
            if (!excludedProducts.includes(item.Id)) {
                displayProducts.push(item);
            }
        });

        return displayProducts
    }
}
