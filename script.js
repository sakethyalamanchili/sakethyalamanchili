// Calculate GitHub Journey Duration
function updateGitHubDuration() {
  const githubStartDate = new Date('2023-07-31');
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate - githubStartDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById('github-duration').innerText = `Started on July 31st, 2023 - ${diffDays} days since joining GitHub`;
}

// Display Current Date, Time, and Day
function updateCurrentDate() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  document.getElementById('current-date').innerText = currentDate.toLocaleDateString('en-US', options);
}

// Update the date and time every second
setInterval(updateCurrentDate, 1000);

// Update GitHub journey duration
updateGitHubDuration();
