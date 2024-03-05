// Function to update skill level slider
function updateSkill(sliderId, value) {
    const slider = document.getElementById(sliderId);
    slider.value = value;
}

// Ask user to input skill levels
const htmlSkill = prompt("Please enter your HTML skill level (0-100):");
const cssSkill = prompt("Please enter your CSS skill level (0-100):");
const jsSkill = prompt("Please enter your JavaScript skill level (0-100):");

// Update skill sliders on the page
updateSkill("html-slider", htmlSkill);
updateSkill("css-slider", cssSkill);
updateSkill("js-slider", jsSkill);



console.log('funguju!');
