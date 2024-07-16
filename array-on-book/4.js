// Write a function to return the titles of books by a given author?

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

