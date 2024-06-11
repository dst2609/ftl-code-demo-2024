// Selecting an HTML element
const paragraphElement = document.querySelector('p');

// Console logging the selected element
console.log(paragraphElement);

// Update the text in the paragraph element
paragraphElement.textContent = "some new text";

// Set the background color with dot notation
console.log(paragraphElement.style);
paragraphElement.style.backgroundColor = "green";


// Set the background color to something else with bracket notation
paragraphElement.style["backgroundColor"] = "blue";

console.log(paragraphElement.style.notARealProperty);
console.log(paragraphElement.style["notARealProperty"]);


