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


