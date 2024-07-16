//Write a function to return all products in a specific category.

let products = [
    { id: 'p1', name: 'Product 1', category: 'Category Silver' },
    { id: 'p2', name: 'Product 2', category: 'Category Gold' },
    { id: 'p3', name: 'Product 3', category: 'Category Browns' },
    { id: 'p4', name: 'Product 4', category: 'Category Diamond' },
    { id: 'p5', name: 'Product 5', category: 'Category Iron' }
];
function getProductsByCategory(products, category) {
    return products.filter(product => product.category === category);
}

const categoryToFind = 'Category Silver';
//const categoryToFind = 'Category Silver', 'Category Gold', 'Category Diamond'; -------For Multiple Categories
const productsInCategory = getProductsByCategory(products, categoryToFind);

console.log(`Products in category "${categoryToFind}":`);
console.log(productsInCategory);