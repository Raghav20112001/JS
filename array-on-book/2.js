// Write a function to return an array of the authors of all books published in a specific year?

let books = [
    { title: 'The Catcher in the Rye', author: 'J. D. Salinger', year: '1951' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: '1960' },
    { title: '1984', author: 'George Orwell', year: '1984' },
    { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', year: '1967' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: '1925' }
];

function getAuthorsByYear(bookList, targetYear) {
    const filteredBooks = bookList.filter(book => book.year === targetYear);
    const authors = filteredBooks.map(book => book.author);

    return authors;
}
const targetYear = '1984'; 
const authorsInYear = getAuthorsByYear(books, targetYear);
console.log(authorsInYear); 
