import {Book} from "./Book.js";
import {EBook} from "./EBook.js";

const book1 = new Book("Harry Potter and the philosopher's stone", "J. K. Rowling", 1997);
const book2 = new Book("Harry Potter and the Chamber of Secrets", "J. K. Rowling", 1998);
const book3 = new Book("Harry Potter and the Prisoner of Azkaban", "J. K. Rowling", 1999);
const book4 = new Book("Harry Potter and the Goblet of Fire", "J. K. Rowling", 2000);
const book5 = new Book("Harry Potter and the Order of the Phoenix", "J. K. Rowling", 2003);

book1.printInfo();
book2.printInfo();
book3.printInfo();
book4.printInfo();
book5.printInfo();
console.log("---");

const ebook1 = new EBook("Clean Code", "Robert C. Martin", 2008, "PDF");
ebook1.printInfo();
console.log("---");

ebook1.fileFormat = "EPUB";
console.log(`Updated format: ${ebook1.fileFormat}`);
console.log("---");

const booksArray = [book1, book2, book3, ebook1];
const oldestBook = Book.findOldestBook(booksArray);
console.log("The oldest book is: :");
oldestBook.printInfo();
console.log("---");

const ebookFromBook = EBook.fromBook(book2, "MOBI");
console.log("New created eBook from Book is:");
ebookFromBook.printInfo();
