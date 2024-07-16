//Given a maximum price, write a function that returns all the products under that price.

let products = [
    { id: 'p1', name: 'Product 1', category: 'Category Silver', price: 30000 },
    { id: 'p2', name: 'Product 2', category: 'Category Gold', price: 50000 },
    { id: 'p3', name: 'Product 3', category: 'Category Browns', price: 25000 },
    { id: 'p4', name: 'Product 4', category: 'Category Diamond', price: 60000 },
    { id: 'p5', name: 'Product 5', category: 'Category Iron', price: 5000 }
];
function getProductsUnderPrice(products, maxPrice) {
    return products.filter(product => product.price < maxPrice);
}

const maxPrice = 30000;
const productsUnderMaxPrice = getProductsUnderPrice(products, maxPrice);

console.log(`Products under price ${maxPrice}:`);
console.log(productsUnderMaxPrice);
