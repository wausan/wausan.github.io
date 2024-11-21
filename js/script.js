$(document).ready(function(){

 $('#menu').click(function(){
 $(this).toggleClass('fa-times');
 $('header').toggleClass('toggle');
 });

 $(window).on('scroll load', function(){

  $('#menu').removeClass('fa-times');
  $('header').removeClass('toggle');

 });

});

const darkModeToggle = document.getElementById('dark-mode-toggle');

// Check user preference on page load
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
if (isDarkMode) {
  document.body.classList.add('dark-mode');
  darkModeToggle.textContent = 'Light Mode';
}

// Add event listener to the toggle button
darkModeToggle.addEventListener('click', () => {
  const darkModeEnabled = document.body.classList.toggle('dark-mode');

  // Save user preference
  if (darkModeEnabled) {
    localStorage.setItem('darkMode', 'enabled');
    darkModeToggle.textContent = 'Light Mode';
  } else {
    localStorage.setItem('darkMode', 'disabled');
    darkModeToggle.textContent = 'Dark Mode';
  }
});

const apiKey = 'YOUR_API_KEY'; // Replace with your TMDb API key
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&sort_by=popularity.desc&page=1';
const movieList = document.getElementById('movie-list');
const loadMoreButton = document.getElementById('load-more');
let currentPage = 1;

// Function to fetch and display movies
function fetchMovies(page) {
  fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=${page}`)
    .then(response => response.json())
    .then(data => {
      data.results.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
          <h3>${movie.title}</h3>
          <p>${movie.release_date}</p>
        `;
        movieList.appendChild(movieCard);
      });
    })
    .catch(error => console.error('Error fetching movie data:', error));
}

// Load more movies when the button is clicked
loadMoreButton.addEventListener('click', () => {
  currentPage++;
  fetchMovies(currentPage);
});

// Initial movie fetch
fetchMovies(currentPage);
