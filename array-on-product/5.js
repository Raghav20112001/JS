//Write a function to find the most expensive product.

let products = [
    { id: 'p1', name: 'Product 1', category: 'Category Silver', price: 30000 },
    { id: 'p2', name: 'Product 2', category: 'Category Gold', price: 50000 },
    { id: 'p3', name: 'Product 3', category: 'Category Browns', price: 25000 },
    { id: 'p4', name: 'Product 4', category: 'Category Diamond', price: 60000 },
    { id: 'p5', name: 'Product 5', category: 'Category Iron', price: 5000 }
  ];
  function findMostExpensiveProduct(products) {
    return products.reduce((max, product) =>
     product.price > max.price ? product : max, products[0]);
  }
  const mostExpensiveProduct = findMostExpensiveProduct(products);
  
  console.log(mostExpensiveProduct);
