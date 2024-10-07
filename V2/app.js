document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const inStockCheckbox = document.getElementById('in-stock');
    const productView = new ProductView();
    const productController = new ProductController(productView);

    const updateProductList = () => {
        productController.updateProductList(searchInput.value, inStockCheckbox.checked);
    };

    searchInput.addEventListener('input', updateProductList);
    inStockCheckbox.addEventListener('change', updateProductList);

    updateProductList();
});