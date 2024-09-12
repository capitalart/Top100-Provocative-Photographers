// Get the theme toggle button
const themeToggleBtn = document.getElementById('theme-toggle');

// Check if a theme is saved in local storage and apply it on page load
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
} else {
    document.body.classList.remove('dark-mode');
}

// Add event listener for the theme toggle button
themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
    }
    localStorage.setItem('theme', theme);  // Save the current theme preference
});
