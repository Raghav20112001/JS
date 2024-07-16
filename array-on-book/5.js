// write a function that returns the title of the books by a given author?


let books = [
    { title: 'The Catcher in the Rye', author: 'J. D. Salinger', year: '1951' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: '1960' },
    { title: '1984', author: 'George Orwell', year: '1984' },
    { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', year: '1967' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: '1925' }
];
function getEarliestPublishedTitles(books) {
    let earliestYear = Math.min(...books.map(book => parseInt(book.year)));
    return books
        .filter(book => parseInt(book.year) === earliestYear)
        .map(book => book.title);
}

console.log(getEarliestPublishedTitles(books)); 

