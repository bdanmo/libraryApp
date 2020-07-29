class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.patron = null;
    this.dueDate = null;
    this._checkedOut = false;
  }

  /**
   * Creates a new book due date
   * @return {Date} date - a new date object representing a due date 14 days from when the method was called
   */
  static newDueDate() {
    const date = new Date();
    date.setDate(date.getDate() - 21);
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

  get isOverdue() {
    const now = new Date();
    if (this.dueDate && this.dueDate < now) {
      return true;
    } else {
      return false;
    }
  }

  get daysOverdue() {
    const now = new Date();

    if (this.dueDate && this.dueDate < now) {
      const daysOverdue = Math.floor((now - this.dueDate) / 86400000);
      return daysOverdue;
    } else {
      return 0;
    }
  }
}
