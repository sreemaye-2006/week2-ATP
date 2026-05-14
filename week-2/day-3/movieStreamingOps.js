/**
 * Movie Streaming Platform
 * You are working on a movie recommendation system.
 */

// Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. filter() only "Sci-Fi" movies
const s1 = movies.filter(movie => movie.genre === "Sci-Fi");
console.log("Sci-Fi Movies:", s1);

// 2. map() to return a formatted string: "Inception (8.8)"
const s2 = movies.map(movie => `${movie.title} (${movie.rating})`);
console.log("Formatted Movies:", s2);

// 3. reduce() to find average movie rating
const s3 = movies.reduce((total, movie) => {
  return total + movie.rating;
}, 0) / movies.length;
console.log("Average Rating:", s3);

// 4. find() movie "Joker"
const s4 = movies.find(movie => movie.title === "Joker");
console.log("Details of Joker:", s4);

// 5. findIndex() of "Avengers"
const s5 = movies.findIndex(movie => movie.title === "Avengers");
console.log("Index of Avengers:", s5);
