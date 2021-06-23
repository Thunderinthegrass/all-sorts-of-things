// // звуки совы---------------------
let btn = document.querySelector('.btn');
let owl = document.querySelector('.owl');
let owl1 = document.querySelector('.owl1');
let owl2 = document.querySelector('.owl2');
// let owlCub = document.querySelector('.owl-cub');
// let owlCub1 = document.querySelector('.owl-cub1');
let krik = false;
let krikInterval = 1000;
let interval = 0;
let sound1 = owl;
let sound2 = owl1

// let sounds = [owl, owl1, owl2, owlCub, owlCub1];
// let sound = sounds[Math.floor(Math.random() * sounds.length)];

function randomSound() {
  let sounds = [owl, owl1, owl2,];
  let sound = sounds[Math.floor(Math.random() * sounds.length)];
  sound.volume = Math.random() * 1;
  console.log(sound.volume);
  sound.play();
}

function intSound() {
  setInterval(randomSound, 2000);
}


function rand(min, max){
return (max-min)*Math.random()+min;
}

let del = rand(2000, 20);

let z = 100000;
// document.querySelector('.btn').onclick = setInterval(randomSound, rand(10000, 50));

document.querySelector('.btn').onclick = function () {
  btn.classList.toggle('active');
  if (btn.classList.contains('active')) {
    setInterval(randomSound, z);
  }
}

let btn2 = document.querySelector('.btn-2').onclick = function() {
  clearInterval(del);
}