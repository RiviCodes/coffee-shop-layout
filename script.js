const mainButton = document.querySelector('#explore-button');

// Hover OVER the button
mainButton.addEventListener('mouseenter', () => {
  console.log('Mouse enter')
});

// Hover OUTSIDE the button
mainButton.addEventListener('mouseleave', () => {
  console.log('Mouse leave')
});

