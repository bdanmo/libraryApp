class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.patron = null;
    this.dueDate = null;
    this._checkedOut = false;
  }

  static newDueDate() {
    const date = new Date();
    date.setDate(date.getDate() + 14);
    return date;
  }

  set checkedOut(bool) {
    this._checkedOut = bool;

    if (bool) {
      this.dueDate = Book.newDueDate();
    } else {
      this.dueDate = null;
    }
  }

  get checkedOut() {
    return this._checkedOut;
  }

  daysOverdue() {
    const now = new Date();
    now.setDate(now.getDate() + 76);
    if (this.dueDate && this.dueDate < now) {
      const daysOverdue = parseInt((now - this.dueDate) / 86400000);
      return daysOverdue;
    } else {
      return 0;
    }
  }
}
