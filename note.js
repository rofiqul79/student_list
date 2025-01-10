// JavaScript to toggle between dropdown and "Type your session" input field
const sessionSelect = document.getElementById('session');
const customSessionInput = document.getElementById('custom-session');

// Toggle dropdown and custom session input field
sessionSelect.addEventListener('change', function() {
  if (sessionSelect.value === 'type-session') {
    customSessionInput.style.display = 'block'; // Show the input field for custom session
    customSessionInput.focus(); // Focus on the input field
  } else {
    customSessionInput.style.display = 'none'; // Hide the input field
  }
});

// Student list icon and slide menu functionality
const studentListIcon = document.getElementById('student-list-icon');
const slideMenu = document.getElementById('slide-menu');
const closeBtn = document.getElementById('close-btn');

// Open slide menu
studentListIcon.addEventListener('click', function() {
  slideMenu.classList.add('open');
});

// Close slide menu
closeBtn.addEventListener('click', function() {
  slideMenu.classList.remove('open');
});

// Function to format DOB input (DD-MM-YYYY)
function formatDob() {
  const input = document.getElementById('dob');
  let value = input.value;

  // Remove all non-numeric characters
  value = value.replace(/\D/g, '');

  // Format the value as DD-MM-YYYY
  if (value.length >= 3 && value.length <= 4) {
    value = value.slice(0, 2) + '-' + value.slice(2);
  } else if (value.length >= 5) {
    value = value.slice(0, 2) + '-' + value.slice(2, 4) + '-' + value.slice(4, 8);
  }

  input.value = value;
}
