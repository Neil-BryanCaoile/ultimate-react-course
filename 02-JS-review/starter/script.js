/* 
  Essential Javascript for React
   -Destructuring Object{} and Array[]
   -Rest/Spread Operator 
   -Template Literals
*/

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
}

// *********************************************************************************************************
// TOPIC: OBJECT {} Destructuring
const book = getBook(2); // book obj
//    ~I destructure book object getting all of its contents, the contents will become variable..
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;
console.log(title);
console.log(author);
console.log(pages);
console.log(publicationDate);
console.log(genres); //this is an array.
console.log(hasMovieAdaptation);

// *********************************************************************************************************
// TOPIC: ARRAY [] Destructuring
//    ~ Same way I destructured object but using [] for Arrays
const [primaryGenre, secondaryGenre] = genres; //destructure Array
console.log(primaryGenre, secondaryGenre); //print

// *********************************************************************************************************
// TOPIC: REST(...) operrator
//   ~ rest operator can only be put in the end of destructuring array
const [primaryGenre_, secondaryGenre_, ...otherGenres] = genres;
console.log(otherGenres); //Is an array of leftover items
console.log(primaryGenre, secondaryGenre, otherGenres);

// TOPIC:  SPREA
const updateBook = {};

// TOPIC: Ternaries of if/else Statements
const pagesRange =
  pages > 1000 ? `over a thousand: (${pages})` : `less than 1000: (${pages})`;
console.log(`The book has ${pagesRange} pages.`);
/**
- React often requires defining values based on conditions, especially when if-else statements are not suitable.
- The ternary operator in JavaScript has three parts: condition, value if true, and value if false.
- The condition is followed by a question mark, the true value, and a colon separating the true and false values.
- The ternary operator returns a value based on the condition evaluation: the second operand if true, and the third operand if false.
- The result of the ternary operator can be assigned to a variable and used in further operations or displayed.
- Template literals can be used with the ternary operator to create dynamic strings based on conditions.
- The ternary operator is valuable because it returns a value, unlike if-else statements which do not.
- Understanding and using the ternary operator is crucial in React development for conditional variable assignment and dynamic string creation.
- The ternary operator provides a concise and efficient way to handle conditional operations in JavaScript and React.
 */

// TOPIC: ArrowFunctions
function getYear(str) {
  return str.split("-")[0];
}
(str) => str.split("")[0];
console.log(getYear(publicationDate));
