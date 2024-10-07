class ProductView {
    constructor() {
        this.productList = document.getElementById('product-list');
    }

    renderProducts(products) {
        this.productList.innerHTML = '';
        products.forEach(({ name, price, stocked }) => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const priceCell = document.createElement('td');

            nameCell.textContent = name;
            nameCell.classList.add('name-column');
            priceCell.textContent = price;

            if (!stocked) {
                nameCell.classList.add('not-in-stock');
                priceCell.classList.add('not-in-stock');
            }

            row.appendChild(nameCell);
            row.appendChild(priceCell);
            this.productList.appendChild(row);
        });
    }
}