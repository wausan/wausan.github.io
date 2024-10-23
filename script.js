const checkbox = document.getElementById("darkModeCheckbox");
const body = document.body;

// Event listener to toggle dark mode based on checkbox
checkbox.addEventListener("change", () => {
    body.classList.toggle("dark-mode", checkbox.checked);
});
