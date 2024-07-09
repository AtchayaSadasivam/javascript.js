// Using variables to represent a book

var bookTitle;
var bookAuthor;

bookTitle = "The Hobbit";
bookAuthor = "J. R. R. Tolkien";

console.log(bookTitle + " by " + bookAuthor);

var SecondbookTitle;
var SecondbookAuthor;
SecondbookTitle = "Brave New World";
SecondbookAuthor = "Aldous Huxley";
console.log(SecondbookTitle + " by " + SecondbookAuthor);

var thirdbookTitle;
var thirdbookAuthor;
thirdbookTitle = "Invisible Monsters";
thirdbookAuthor = "Chuck Palahniuk";
console.log(thirdbookTitle + " by " + thirdbookAuthor);

var books = [
    { title: "The Hobbit", author: "J. R. R. Tolkien" },
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "Moby-Dick", author: "Herman Melville" },
    { title: "War and Peace", author: "Leo Tolstoy" },
    { title: "Ulysses", author: "James Joyce" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "The Lord of the Rings", author: "J. R. R. Tolkien" }
];

for (var i = 0; i < books.length; i++) {
    console.log(books[i].title + " by " + books[i].author);
}




/* Further Adventures
 *
 * 1) Declare variables for a second book
 *    and assign them values.
 *
 * 2) Add code to log its details to the console.
 *
 * 3) Repeat steps 1 and 2 for a third book.
 *
 * 4) Consider the code needed for 10 books.
 *    For 100 books.
 *
 */