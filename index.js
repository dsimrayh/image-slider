const [prevButtton, nextButton] = document.querySelectorAll('.arrow');
const navCircles = document.querySelectorAll('.nav-circle');
const image = document.querySelector('#image');

let currentImage = 1;
const imageList = {
  1: './images/image_001.jpg',
  2: './images/image_002.jpg',
  3: './images/image_003.jpg',
  4: './images/image_004.jpg',
  5: './images/image_005.jpg',
};

function updateNavCircles(previousImage) {
  document
    .querySelector(`.nav-circle[data-key="${previousImage}"]`)
    .classList.toggle('active');
  document
    .querySelector(`.nav-circle[data-key="${currentImage}"]`)
    .classList.toggle('active');
}

prevButtton.addEventListener('click', () => {
  const previousImage = currentImage;
  if (currentImage - 1 < 1) currentImage = 6;
  currentImage -= 1;
  image.src = imageList[currentImage];
  updateNavCircles(previousImage);
});

nextButton.addEventListener('click', () => {
  const previousImage = currentImage;
  if (currentImage + 1 > 5) currentImage = 0;
  currentImage += 1;
  image.src = imageList[currentImage];
  updateNavCircles(previousImage);
});

navCircles.forEach((circle) => {
  circle.addEventListener('click', () => {
    const previousImage = currentImage;
    const { key } = circle.dataset;
    currentImage = +key;
    image.src = imageList[key];
    updateNavCircles(previousImage);
  });
});
