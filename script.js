//your JS code here. If required.
// Select the dropdown and button elements
let colorSelect = document.getElementById("colorSelect");
let removeButton = document.querySelector('input[type="button"]');

// Add an event listener to the button
removeButton.addEventListener("click", function() {
    // Get the selected index
    let selectedIndex = colorSelect.selectedIndex;
    
    // Check if an option is selected
    if (selectedIndex !== -1) {
        // Remove the selected option
        colorSelect.remove(selectedIndex);
    }
});
