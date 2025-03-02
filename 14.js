// books.js Module - Defines and exports an array of Book instances
export function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Adding method to Book prototype
Book.prototype.getSummary = function () {
    return `${this.title} by ${this.author}, published in ${this.year}`;
};

// Exporting an array of books
export const books = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925),
    new Book("To Kill a Mockingbird", "Harper Lee", 1960),
    new Book("1984", "George Orwell", 1949)
];