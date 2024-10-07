class ProductController {
    constructor(view) {
        // Initialise la vue et la liste des produits
        this.view = view;
        this.products = products;
    }

    // Méthode pour rechercher des produits en fonction de la requête et du stock
    searchProducts(query, inStockOnly) {
        return this.products.filter(({ name, stocked }) => 
            name.toLowerCase().startsWith(query.toLowerCase()) && (!inStockOnly || stocked)
        );
    }

    // Méthode pour mettre à jour la liste des produits affichés
    updateProductList(query, inStockOnly) {
        this.view.renderProducts(this.searchProducts(query, inStockOnly));
    }
}