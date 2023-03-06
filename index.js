const [prevButtton, nextButton] = document.querySelectorAll('.arrow');
const navCircles = document.querySelectorAll('.nav-circle');
const image = document.querySelector('#image');

prevButtton.addEventListener('click', () => {
  console.log('previous image');
});

nextButton.addEventListener('click', () => {
  console.log('next image');
});

navCircles.forEach((circle) => {
  circle.addEventListener('click', () => {
    console.log('nav-circle');
  });
});

image.addEventListener('click', () => {
  console.log('image');
});
