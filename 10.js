function createBook(title, author) {
    return {
        title,
        author,
        details() {
            console.log(`Title: ${this.title}, Author: ${this.author}`);
        }
    };
}

function createLibrary() {
    const books = [];

    return {
        addBook(book) {
            books.push(book);
            console.log(`Added: ${book.title}`);
        },

        removeBook(title) {
            const index = books.findIndex(book => book.title === title);
            if (index !== -1) {
                console.log(`Removed: ${books[index].title}`);
                books.splice(index, 1);
            } else {
                console.log(`Book titled "${title}" not found.`);
            }
        },

        listBooks() {
            if (books.length === 0) {
                console.log("No books available in the library.");
            } else {
                console.log("Library Collection:");
                books.forEach(book => book.details());
            }
        }
    };
}

// Example:
const library = createLibrary();

const book1 = createBook("To Kill a Mockingbird", "Harper Lee");
const book2 = createBook("1984", "George Orwell");
const book3 = createBook("The Great Gatsby", "F. Scott Fitzgerald");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.listBooks();
// Output:
// Library Collection:
// Title: To Kill a Mockingbird, Author: Harper Lee
// Title: 1984, Author: George Orwell
// Title: The Great Gatsby, Author: F. Scott Fitzgerald

library.removeBook("1984");

library.listBooks();
// Output:
// Library Collection:
// Title: To Kill a Mockingbird, Author: Harper Lee
// Title: The Great Gatsby, Author: F. Scott Fitzgerald

library.removeBook("Moby Dick");
// Output: Book titled "Moby Dick" not found.