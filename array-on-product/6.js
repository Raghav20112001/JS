//Write a function that returns an object where each key is a category, and the value is the number of products in that category.

let products = [
    { id: 'p1', name: 'Product 1', category: 'Category Silver', price: 30000 },
    { id: 'p2', name: 'Product 2', category: 'Category Gold', price: 50000 },
    { id: 'p3', name: 'Product 3', category: 'Category Browns', price: 25000 },
    { id: 'p4', name: 'Product 4', category: 'Category Diamond', price: 60000 },
    { id: 'p5', name: 'Product 5', category: 'Category Iron', price: 5000 }
];

function countProductsByCategory(products) {
    return products.reduce((categoryCounts, product) => {
        if (categoryCounts[product.category]) {
            categoryCounts[product.category]++;
        } else {
            categoryCounts[product.category] = 1;
        }
        return categoryCounts;
    }, {}); // Initial value is an empty object
}

const productsByCategory = countProductsByCategory(products);

console.log("Number of products by category:");
console.log(productsByCategory);
