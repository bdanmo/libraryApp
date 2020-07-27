class Patron {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.currentBook = null;
  }
  
  checkOut (book) {
    this.currentBook = book;
    book.checkedOut = true;
    book.patron = this;
  }

  returnBook (book) {
    this.currentBook = null;
    book.checkedOut = false;
    book.patron = null;
  }
}