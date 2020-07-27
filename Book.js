class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.patron = null;
    this.dueDate = null;
    this._checkedOut = false;
  }
  
  set checkedOut (bool) {
    this._checkedOut = bool;
  
    if (bool) {
      this.dueDate = Book.newDueDate();
    } else {
      this.dueDate = null;
    }
  }
  
  get checkedOut () {
    return this._checkedOut;
  }
  
  static newDueDate() {
    const date = new Date();
    date.setDate(date.getDate() + 14);
    return date;
  }
}