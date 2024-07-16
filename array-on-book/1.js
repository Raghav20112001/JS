// Given a year, write a function to filter out books published to  the given samples?

let books = [
    { title: 'The Catcher in the Rye', author: 'J. D. Salinger', year: '1951' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: '1960' },
    { title: '1984', author: 'George Orwell', year: '1984' },
    { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', year: '1967' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: '1925' }
];

function filterBooksByYear(bookList, targetYear) {
    return bookList.filter(book => parseInt(book.year) >= targetYear);
}

const targetYear = 1960;
const filteredBooksResult = filterBooksByYear(books, targetYear);
console.log(filteredBooksResult);
