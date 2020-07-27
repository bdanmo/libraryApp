class Library {
  constructor (books = [], patrons = []) {
    this.books = books;
    this.patrons = patrons;
  }
  
  addBook(book) {
    this.books.push(book);
  }

  addPatron(patron) {
    this.patrons.push(patron)
  }
}
