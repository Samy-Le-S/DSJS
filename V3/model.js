// Classe représentant un produit
class Product {
    constructor(category, price, stocked, name) {
        this.category = category;
        this.price = price;
        this.stocked = stocked;
        this.name = name;
    }
}

// bdd produits
const products = [
    new Product("Fruits", "$1", true, "Apple"),
    new Product("Vegetables", "$1", true, "Peas"),
    new Product("Fruits", "$1", true, "Dragonfruit"),
    new Product("Fruits", "$2", false, "Passionfruit"),
    new Product("Vegetables", "$2", true, "Spinach"),
    new Product("Vegetables", "$4", true, "Pumpkin"),
];

// il aurrait fallu fetch les produits, mais je n'arrive pas a corriger mon erreur, quand je fetch les produits ne sortent pas (pareil dans app.js)

/*async function fetchProducts() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data.map(product => new Product(product.category, product.price, product.stocked, product.name));
}*/