// This function removes specified characters and makes the string lower case
function sanitizeString(str) {
  return str.replace(/[#.-]/g, '').toLowerCase();
}

// This event listener toggles the dropdown menu for the bars icon
document.getElementById('bars-icon').addEventListener('click', function(event) {
  event.preventDefault();
  event.stopPropagation(); // Stop the click from propagating
  var dropdown = document.querySelector('.dropdown-menu');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// This function closes the dropdown menu if clicked outside
window.onclick = function(event) {
  if (!event.target.matches('#bars-icon')) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block") {
        openDropdown.style.display = "none";
      }
    }
  }
};

// This event listener handles the search functionality
document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  var rawSearchQuery = document.getElementById('search-input').value;
  var searchQuery = sanitizeString(rawSearchQuery); // Sanitize the search query

  // Define and sanitize keywords for stamps and comics
  var stampsKeywords = ['us 290', 'us 223', 'us 210', 'us 73', 'us 88', 'us 219d', 'us 242', 'us 299', 'us 33', 'us 235', 'us 277a', 'us 37', 'us 426', 'us pr33', 'us 292', 'us 188']
    .map(keyword => sanitizeString(keyword));
  var comicsKeywords = [`the amazing spiderman 113`,`spiderman 113`, `the amazing spiderman 64`, `spiderman 64 `, `the amazing spiderman 31`, `spiderman 31 `, `the amazing spiderman 4`, `spiderman 4`, `the amazing spiderman 5`, `spiderman 5`, `the amazing spiderman 97`, `spiderman 97`, `the amazing spiderman 167`, `spiderman 167`, `the amazing spiderman 19`, `spiderman 19`, `the amazing spiderman 1`, `spiderman 1`, `the amazing spiderman 196`, `spiderman 196`, `the amazing spiderman 201`, `spiderman 201`,`the amazing spiderman 209`, `spiderman 209`,`the amazing spiderman 168`, `spiderman 168`, `the amazing spiderman 249`, `spiderman 249`, `the amazing spiderman 347`, `spiderman 347`, `the amazing spiderman 332`, `spiderman 332`]
    .map(keyword => sanitizeString(keyword));

  // Check if the search query includes any keyword from stamps or comics
  if (stampsKeywords.some(keyword => searchQuery.includes(keyword))) {
    window.location.href = 'stamps.html'; // Redirect to the stamps page
  } else if (comicsKeywords.some(keyword => searchQuery.includes(keyword))) {
    window.location.href = 'comics.html'; // Redirect to the comics page
  } else {
    window.location.href = 'notfound.html'; // Redirect to the not found page
  }
});