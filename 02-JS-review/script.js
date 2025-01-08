const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
} /*

/*
//desrtructuring
const books = getBooks();
const book = getBook(3);
book;
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(title, author, pages, publicationDate, genres, hasMovieAdaptation);

const [primaryGenre, secondaryGenre] = genres;
console.log(primaryGenre, secondaryGenre);

//rest
const [primaryGenre1, secondaryGenre1, ...otherGenres] = genres;
console.log(primaryGenre1, secondaryGenre1, otherGenres);

//spread
const allGenres = [...genres, "epic fantasy"];
console.log(allGenres);

const updatedBook = {
  ...book,
  //add new property
  moviePublicationDate: "2001-12-19",
  //override existing property
  pages: 1220,
};

updatedBook;

// //traditional function
// function getYear(str) {
//   return str.split("-")[0];
// }
//arrow functions
const getYear = (str) => str.split("-")[0]; //arrow function expression
console.log(getYear(publicationDate));

//template literals
const summary = `${title}, a ${pages}-page long book, was written by ${author} in ${getYear(
  publicationDate
)}.`;
summary;

//ternary operator
const doesHaveMovie = hasMovieAdaptation ? "YES" : "NO";
doesHaveMovie;

const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand"; //conditon ? true action : false action
pagesRange;

console.log(`The book ${title} has ${pagesRange} pages.`);

//short circuiting
//&&
//||
//??
console.log(true && "hello");
console.log(false && "hello");
console.log(hasMovieAdaptation && "This book has a movie");

//falsy
//undefined
//null
//0
console.log("jonas" && "Hello");
console.log(0 && "Hello");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
console.log(spanishTranslation);

console.log(book.reviews.librarything?.reviewsCount);
const countWrong = book.reviews.librarything?.reviewsCount || "no data";
countWrong;

//works for falsy values
const countRight = book.reviews.librarything?.reviewsCount ?? "no data";
countRight;

function getTotalReviews(book) {
  const { goodreads, librarything } = book.reviews;
  return (goodreads?.reviewsCount ?? 0) + (librarything?.reviewsCount ?? 0);
}

console.log(getTotalReviews(book));
*/
/*
const books = getBooks();

function getTotalReviews(book) {
  const { goodreads, librarything } = book.reviews;
  return (goodreads?.reviewsCount ?? 0) + (librarything?.reviewsCount ?? 0);
}

// array map method => returns a new array from original array
//1st example
const x = [1, 2, 3, 4, 5].map((x) => x * 2);
console.log(x);

//2nd example
const titles = books.map((book) => book.title);
console.log(titles);

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  pages: book.pages,
  reviewCount: getTotalReviews(book),
}));

console.log(essentialData);

//filter method => returns a new array from original array by filtering the data
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation); //if condition true, add to new array
console.log(longBooks);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

console.log(adventureBooks);

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0); //sum = accumulator, 0 is sum initial value
pagesAllBooks;

//sort method => mutates the original array, so usually we use slice to make a copy of the origrinal arrya
const sortedBooks = books.slice().sort((a, b) => a.pages - b.pages); //a - b => ascending, b - a => descending
books;
sortedBooks;

// 1) add book object to array
const newBook = {
  id: 6,
  title: "Harry Porter and the Chamber of Secrets",
  publicationDate: "1998-07-30",
  author: "J. K. Rowling",
};

// 1a) add book object to array - spread and add new item at the end
const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2) remove book object from array, filter to exclude the item to be remvoved
const booksAfterRemove = booksAfterAdd.filter((book) => book.id !== 6);
booksAfterRemove;

// 3) update book object in array
const booksAfterUpdate = booksAfterRemove.map((book) =>
  book.id === 5
    ? { ...book, title: "Harry Potter and the Prisoner of Azkaban", pages: 935 }
    : book
);
booksAfterUpdate;
*/

//Promises
//fetch("https://jsonplaceholder.typicode.com/todos")
//  .then((res) => res.json())
//  .then((data) => console.log(data));

//console.log("ricky");

//async/await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  //console.log(data);
  return data;
}

const todos = getTodos();
console.log(todos);
console.log("ricky");
