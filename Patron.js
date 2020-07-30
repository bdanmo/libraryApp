class Patron {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.currentBook = null;
    this.balance = 0;
  }

  /**
   * Assigns a book to patron's current book property
   * @param {Book} book - an instance of the Book class to be added
   */
  checkOut(book) {
    this.currentBook = book;
    book.checkedOut = true;
    book.patron = this;
  }

  /**
   * Removes a book from patron's current book property
   * @param {Book} book - an instance of the Book class to be removed
   */
  returnBook(book) {
    this.currentBook = null;
    book.checkedOut = false;
    book.patron = null;
  }
}
