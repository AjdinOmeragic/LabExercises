const button = document.getElementById("myButton");
const message = document.getElementById("message");

// onmouseover - Change button color when hovered
button.onmouseover = function () {
  button.style.backgroundColor = "green";
  message.innerText = "Mouse is over the button!";
};

// onmouseout - Reset button color when mouse leaves
button.onmouseout = function () {
  button.style.backgroundColor = "blue";
  message.innerText = "Mouse left the button!";
};

// onclick - Change text when button is clicked
button.onclick = function () {
  message.innerText = "Button clicked!";
  button.style.backgroundColor = "red"; // Change color on click
};
