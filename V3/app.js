document.addEventListener('DOMContentLoaded', () => {
    // Récupère les éléments du DOM
    const searchInput = document.getElementById('search');
    const inStockCheckbox = document.getElementById('in-stock');
    
    // Initialise la vue et le contrôleur
    const productView = new ProductView();
    const productController = new ProductController(productView);
/*
    const products = await fetchProducts();
    productController.products = products;

*/ 
    // Fonction pour mettre à jour la liste des produits
    const updateProductList = () => {
        productController.updateProductList(searchInput.value, inStockCheckbox.checked);
    };

    // Ajoute des écouteurs d'événements pour les entrées de recherche et le checkbox
    searchInput.addEventListener('input', updateProductList);
    inStockCheckbox.addEventListener('change', updateProductList);

    // Rendu initial de la liste des produits
    updateProductList();
});