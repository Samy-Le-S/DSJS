class ProductView {
    constructor() {
        // Récupère l'élément du DOM où les produits seront affichés
        this.productList = document.getElementById('product-list');
    }

    // Méthode pour afficher les produits
    renderProducts(products) {
        // Vide la liste des produits
        this.productList.innerHTML = '';
        
        // Parcourt chaque produit et crée une ligne de tableau pour chacun
        products.forEach(({ name, price, stocked }) => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            const priceCell = document.createElement('td');

            // Remplit les cellules avec les informations du produit
            nameCell.textContent = name;
            nameCell.classList.add('name-column');
            priceCell.textContent = price;

            // Ajoute une classe spéciale si le produit n'est pas en stock
            if (!stocked) {
                nameCell.classList.add('not-in-stock');
                priceCell.classList.add('not-in-stock');
            }

            // Ajoute les cellules à la ligne, puis la ligne au tableau
            row.appendChild(nameCell);
            row.appendChild(priceCell);
            this.productList.appendChild(row);
        });
    }
}