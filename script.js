document.addEventListener("DOMContentLoaded", function () {
  // Calculate GitHub journey duration
  const githubStartDate = new Date("2023-07-31");
  const today = new Date();
  const diffTime = Math.abs(today - githubStartDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("github-duration").innerText = `${diffDays} days`;

  // Display current date
  const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
  document.getElementById("current-date").innerText = today.toLocaleDateString(undefined, options);
});
