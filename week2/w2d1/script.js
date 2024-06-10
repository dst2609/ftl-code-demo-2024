// Select the button elements
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

// Define the function to be executed when button 1 is clicked
function showMessage1() {
  const messageElement = document.getElementById("message");
  messageElement.innerText = "Help me";
}

// Define the function to be executed when button 2 is clicked
let showMessage2 = () => {
  const messageElement = document.getElementById("message");
  messageElement.innerText = "Aooga";
};

// Register the event listeners for the buttons
button1.addEventListener("click", showMessage1);
button2.addEventListener("click", showMessage2);
