class Library {
  constructor(books = [], patrons = []) {
    this.books = books;
    this.patrons = patrons;
    this.dailyFine = 0.1;
  }

  /**
   * Adds a book to the Library intance's books collection
   * @param {Book} book - an instance of the Book class
   */
  addBook(book) {
    this.books.push(book);
  }

  /**
   * Adds a patron to the Library instance's patrons collection
   * @param {Patron} patron - an instance of the Patron class
   */
  addPatron(patron) {
    this.patrons.push(patron);
  }

  /**
   * Charges fines to patrons who have overdue books
   * @author Brendan Moran
   */
  chargeFines() {
    this.patrons.forEach((patron) => {
      let book = patron.currentBook;
      if (book.isOverdue) {
        patron.balance +=
          Math.ceil(this.dailyFine * book.daysOverdue * 100) / 100;
        book.dueDate = new Date();
      }
    });
  }
}
