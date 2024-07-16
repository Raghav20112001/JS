//Write a function that sorts the books array based on the year of publication, from oldest to newest?

let books = [
    { title: 'The Catcher in the Rye', author: 'J. D. Salinger', year: '1951' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: '1960' },
    { title: '1984', author: 'George Orwell', year: '1984' },
    { title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', year: '1967' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: '1925' }
];

function sortByYearAscending(bookList) {
    bookList.sort((a, b) => {
        const yearA = parseInt(a.year);
        const yearB = parseInt(b.year);
        
        if (yearA < yearB) {
            return -1; 
        }
        if (yearA > yearB) {
            return 1; 
        }
        return 0; 
    });

    return bookList;
}

const sortedBooks = sortByYearAscending(books);
console.log(sortedBooks);
