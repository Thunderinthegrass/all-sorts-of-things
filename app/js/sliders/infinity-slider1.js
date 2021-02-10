let images = document.querySelectorAll('.infinity-slider .img-wrapper');

let current = 0;

function slider() {
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add('opacity0');
  }
  images[current].classList.remove('opacity0');
  if (current+1 == images.length) {
    current = 0;
  }
  else{
    current++;
  }
  console.log(current);
}

document.querySelector('.infinity-slider').onclick = slider;

let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');

let z = 0;

arrowRight.addEventListener('click', function() {
  // console.log(current);
  for (let i = current; i < images.length; i++) {
    // console.log(current);
    // console.log(i);
    images[i].classList.add('opacity0');
  }

  // if(z == 3 && current != 0) {
  //   current = current + 1;
  //   z = 1;
  // }

  images[current].classList.remove('opacity0');
  if (current+1 == images.length) {
    current = 0;
  }
  else{
    current++;
  }
  // console.log(current);
  console.log(z);
  z = 1;
})


arrowLeft.addEventListener('click', function() {
  // console.log(current);
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add('opacity0');
  }

  if((z == 1 || z == 0) && images.length - 1) {
    current = current - 1;
    z = 2;
  }

  if (current == 0) {
    current = images.length - 1;
  }
  else{
    current--;
  }
  // images[current].classList.remove('opacity0');
  // console.log(current);
  console.log(z);
})