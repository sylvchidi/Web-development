// Select the element (h1) using its ID
const heading = document.getElementById('main-heading');

function changeText() {
  heading.textContent = 'Text Changed! JavaScript is awesome!';
}

function changeColor() {
  heading.style.color = 'red';
  heading.style.backgroundColor = 'yellow';
}

function toggleVisibility() {
  if (heading.style.display === 'none') {
    heading.style.display = 'block';
  } else {
    heading.style.display = 'none';
  }
}
