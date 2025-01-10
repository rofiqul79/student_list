// JavaScript to toggle between dropdown and "Type your session" input field
const sessionSelect = document.getElementById('session');
const customSessionInput = document.getElementById('custom-session');

sessionSelect.addEventListener('change', function() {
  if (sessionSelect.value === 'type-session') {
    customSessionInput.style.display = 'block'; // Show the input field for custom session
    sessionSelect.style.display = 'none'; // Hide the dropdown
    customSessionInput.focus(); // Focus on the input field to bring up the keyboard immediately
  } else {
    customSessionInput.style.display = 'none'; // Hide the input field
    sessionSelect.style.display = 'block'; // Show the dropdown again
  }
});
const studentListIcon = document.getElementById('student-list-icon');
const slideMenu = document.getElementById('slide-menu');
const closeBtn = document.getElementById('close-btn');



// Function to format DOB input (DD-MM-YYYY)
function formatDob() {
  var input = document.getElementById('dob');
  var value = input.value;

  // Remove all non-numeric characters
  value = value.replace(/\D/g, '');

  // Format the value as DD-MM-YYYY
  if (value.length >= 2) {
    value = value.substring(0, 2) + '-' + value.substring(2);
  }
  if (value.length >= 5) {
    value = value.substring(0, 5) + '-' + value.substring(5, 9);
  }

  // Set the formatted value back to the input field
  input.value = value;
}
