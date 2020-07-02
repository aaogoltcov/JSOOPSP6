'use strict';

// Tas 1 & 2
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    };

    fix() {
        this.state = this.state * 1.5;
        return this.state;
    };

    set state(state) {
        if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        };
        return this._state;
    };

    get state() {
        return this._state;
    };
};

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type = 'magazine') {
    super(name, releaseDate, pagesCount, state);
    this.type = type;
  };

};

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type = 'book') {
    super(name, releaseDate, pagesCount, state);
    this.author = author;
    this.type = type;
  };

};

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type = 'novel') {
    super(author, name, releaseDate, pagesCount, state);
    this.type = type;
  };
};

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type = 'fantastic') {
    super(author, name, releaseDate, pagesCount, state);
    this.type = type;
  };
};

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type = 'detective') {
    super(author, name, releaseDate, pagesCount, state);
    this.type = type;
  };
};

class Library {
  constructor(name, books = []) {
    this.name = String(name);
    this.books = books;
  };

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    };
  };

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] == value) {
        return this.books[i];
      };
    };
    return null;
  };

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name == bookName) {
        let book_for_given = this.books[i]
        this.books.splice(i, 1)[0];
        return book_for_given;
      };
    };
    return null;
  };

};

// Task 3
class StudentLog {
    constructor(name, scores = []) {
      this.name = name;
      this.scores = scores;
    };

    getName() {
        return this.name;
    };

    static checkSubject(subject, list) {
      for (let i in list) {
        if (Object.keys(list[i])[0] == subject) {
          return true;
        };
      };
      return false;
    }

    static checkScore(grade, subject) {
      if (parseInt(grade) > 5 || parseInt(grade) < 1 || typeof(grade) == 'string') {
        console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
        return true;
      } else {
        return false;
      };
    };

    addGrade(grade, subject) {
      if (StudentLog.checkSubject(subject, this.scores) == true) {
        for (let i in this.scores) {
          if (Object.keys(this.scores[i])[0] == subject) {
            if (StudentLog.checkScore(grade, subject) == true) {
              return Object.values(this.scores[i])[0].length;
            } else {
              Object.values(this.scores[i])[0].push(grade);
              return Object.values(this.scores[i])[0].length;
            };
            };
          };
      } else {
        if (StudentLog.checkScore(grade, subject) == true) {
          return 0;
        } else {
          this.scores.push({[subject]: [grade]});
          return 1;
        };
      };
    };

    getAverageBySubject(subject) {
      if (StudentLog.checkSubject(subject, this.scores) == true) {
        for (let i in this.scores) {
          if (Object.keys(this.scores[i])[0] == subject) {
            return (Object.values(this.scores[i])[0].reduce((previousValue, currentValue) => currentValue += previousValue) / Object.values(this.scores[i])[0].length);
          };
        };
      } else {
        return 0;
      };
    };

    getTotalAverage() {
      let sumScores = 0;
      let sumLengths = 0;
      console.log(this.scores);
      if (this.scores.length == 0) {
        return 0;
      } else {
        for (let i in this.scores) {
            sumScores += Object.values(this.scores[i])[0].reduce((previousValue, currentValue) => currentValue += previousValue);
            sumLengths += Object.values(this.scores[i])[0].length;
        };
      return sumScores / sumLengths;
      };
    };

};