const [prevButtton, nextButton] = document.querySelectorAll('.arrow');
const navCircles = document.querySelectorAll('.nav-circle');
const imageList = document.querySelectorAll('.image');

let currentImage = 0;

function updateImage(previousImage) {
  imageList[previousImage].classList.toggle('visible');
  imageList[currentImage].classList.toggle('visible');
}

function updateNavCircles(previousImage) {
  document
    .querySelector(`.nav-circle[data-key="${previousImage}"]`)
    .classList.toggle('active');
  document
    .querySelector(`.nav-circle[data-key="${currentImage}"]`)
    .classList.toggle('active');
}

function autoScroll() {
  const previousImage = currentImage;
  if (currentImage + 1 > 4) currentImage = -1;
  currentImage += 1;
  updateImage(previousImage);
  updateNavCircles(previousImage);
}

let autoScrollInterval = setInterval(autoScroll, 5000);

prevButtton.addEventListener('click', () => {
  clearInterval(autoScrollInterval);
  const previousImage = currentImage;
  if (currentImage - 1 < 0) currentImage = 5;
  currentImage -= 1;
  updateImage(previousImage);
  updateNavCircles(previousImage);
  autoScrollInterval = setInterval(autoScroll, 5000);
});

nextButton.addEventListener('click', () => {
  clearInterval(autoScrollInterval);
  const previousImage = currentImage;
  if (currentImage + 1 > 4) currentImage = -1;
  currentImage += 1;
  updateImage(previousImage);
  updateNavCircles(previousImage);
  autoScrollInterval = setInterval(autoScroll, 5000);
});

navCircles.forEach((circle) => {
  circle.addEventListener('click', () => {
    clearInterval(autoScrollInterval);
    const previousImage = currentImage;
    const { key } = circle.dataset;
    currentImage = +key;
    updateImage(previousImage);
    updateNavCircles(previousImage);
    autoScrollInterval = setInterval(autoScroll, 5000);
  });
});
