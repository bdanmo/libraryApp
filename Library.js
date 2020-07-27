class Library {
  constructor(books = [], patrons = []) {
    this.books = books;
    this.patrons = patrons;
    this.dailyFine = 0.1;
  }

  addBook(book) {
    this.books.push(book);
  }

  addPatron(patron) {
    this.patrons.push(patron)
  }

  chargeFines() {

  }
}