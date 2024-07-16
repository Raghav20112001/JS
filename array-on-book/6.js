// write a function that returns an object where each key is an author's name and the value is the number of books that author has in the array?

let books = [
    { title: 'The Catcher in the Rye', author: 'J. D. Salinger', year: '1951' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: '1960' },
    { title: '1984', author: 'George Orwell', year: '1984' },
    { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', year: '1967' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: '1925' }
];
function countBooksByAuthor(books) {
    let authorCount = {};
    for (let book of books) {
      if (authorCount[book.author]) {
        authorCount[book.author]++;
      } else {
        authorCount[book.author] = 1;
      }
    }
    return authorCount;
}
    console.log(countBooksByAuthor(books));