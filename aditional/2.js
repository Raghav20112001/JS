// Describe a situation where you would use the map function on an array of objects. Write a function that demonstrates this usage.


let books = [
    { title: 'The Catcher in the Rye', author: 'J. D. Salinger', year: '1951' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: '1960' },
    { title: '1984', author: 'George Orwell', year: '1984' },
    { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', year: '1967' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: '1925' }
];
function getTitlesByAuthor(books, author) {
    return books
        .filter(book => book.author === author)
        .map(book => book.title);
}
console.log(getTitlesByAuthor(books, 'George Orwell')); 
console.log(getTitlesByAuthor(books, 'Harper Lee'));