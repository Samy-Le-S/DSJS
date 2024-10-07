class Product {
    constructor(category, price, stocked, name) {
        this.category = category;
        this.price = price;
        this.stocked = stocked;
        this.name = name;
    }
}

const products = [
    new Product("Fruits", "$1", true, "Apple"),
    new Product("Vegetables", "$1", true, "Peas"),
    new Product("Fruits", "$1", true, "Dragonfruit"),
    new Product("Fruits", "$2", false, "Passionfruit"),
    new Product("Vegetables", "$2", true, "Spinach"),
    new Product("Vegetables", "$4", true, "Pumpkin"),
];