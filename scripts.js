const lightTheme = document.querySelector('.fa-circle-half-stroke')

lightTheme.addEventListener('click', () => {
  lightTheme.classList.toggle('active');

  const darkBackground = document.querySelectorAll('body');
  const darkText = document.querySelectorAll('h1, h2, a, p');
  const whiteBackground = document.querySelectorAll('body');
  const whiteText = document.querySelectorAll('h1, h2, p');

  if (lightTheme.classList.contains('active')) {
    lightTheme.style.color = '#161616';
    toWhiteBackground(whiteBackground);
    toDarkText(darkText);
  } else {
    lightTheme.style.color = '#F9F9F9';
    toDarkBackground(darkBackground);
    toWhiteText(whiteText);
  }

})

function toDarkBackground(items) {
  items.forEach((item) => {
    item.style.backgroundColor = '#161616';
  })
}
function toDarkText(items) {
  items.forEach((item) => {
    item.style.color = '#161616';
  })
}
function toWhiteBackground(items) {
  items.forEach((item) => {
    item.style.backgroundColor = '#F9F9F9';
  })
}
function toWhiteText(items) {
  items.forEach((item) => {
    item.style.color = '#F9F9F9';
  })
}