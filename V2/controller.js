class ProductController {
    constructor(view) {
        this.view = view;
        this.products = products;
    }

    searchProducts(query, inStockOnly) {
        return this.products.filter(({ name, stocked }) => 
            name.toLowerCase().startsWith(query.toLowerCase()) && (!inStockOnly || stocked)
        );
    }

    updateProductList(query, inStockOnly) {
        this.view.renderProducts(this.searchProducts(query, inStockOnly));
    }
}