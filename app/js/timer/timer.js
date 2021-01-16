let ms = 0;
let s = 0;
let m = 0;
let h = 0;

let milSeconds = document.querySelector('.mil-seconds');
let seconds = document.querySelector('.seconds');
let minutes = document.querySelector('.minutes');
let hours = document.querySelector('.hours');
let btn = document.querySelector('.btn');
let stop = document.querySelector('.stop');

//запуск таймера
btn.onclick = timer;

function timer() {
  btn.classList.toggle('active');

  if (stop.classList.contains('active')) {
    stop.classList.remove('active');
  }

  let start = setInterval(function () {
    ms++;
    milSeconds.innerHTML = ms;
    seconds.innerHTML = s;
    minutes.innerHTML = m;
    hours.innerHTML = h;

    // подставляем нули, если число меньше 10
    if (ms < 10) {
      milSeconds.innerHTML = '0' + ms;
    }
    if (s < 10) {
      seconds.innerHTML = '0' + s;
    }
    if (m < 10) {
      minutes.innerHTML = '0' + m;
    }
    if (h < 10) {
      hours.innerHTML = '0' + h;
    }


    //бег цифр
    if (ms == 99) {
      ms = -1;
      s++;
    }
    if (s == 60) {
      s = 0;
      m++;
    }
    if (m == 60) {
      m = 0;
      h++;
    }
  }, 10);

  //остановка таймера
  stop.onclick = timerStop;

  function timerStop() {
    stop.classList.toggle('active');

    if (btn.classList.contains('active')) {
      btn.classList.remove('active');
    }

    clearInterval(start);
  }

  //сброс таймера
  let discharge = document.querySelector('.discharge');

  discharge.addEventListener('click', timerDischarge);

  function timerDischarge() {
    clearInterval(start);

    milSeconds.innerHTML = '00';
    seconds.innerHTML = '00';
    minutes.innerHTML = '00';
    hours.innerHTML = '00';

    ms = 0
    s = 0;
    m = 0;
    h = 0;

    btn.classList.remove('active');
    stop.classList.remove('active');
  }
}


//ширина контейнера 
const timerCont = document.querySelector('.timer');
const timerItem = document.querySelectorAll('.timer__item');

let timerItemsWidth = 0;
let paddingWidth = 0;

for (let i = 0; i < timerItem.length; i++) {
  let timerItemWidth = timerItem[i].offsetWidth;//получаем ширину .timer__item
  console.log('ширина item ' + timerItemWidth);
  timerItemsWidth += timerItemWidth;//складываем ширину всех .timer__item

  paddingWidth = (timerItemWidth / 4) * (timerItem.length - 1);
}
console.log('общая ширина паддингов ' + paddingWidth);

console.log('общая ширина items ' + timerItemsWidth);
timerCont.style.width = `${timerItemsWidth + paddingWidth}px`; //общая ширина всех item и их паддингов, при добавлении нового item добавляется и паддинг, свойство justify-content: space-between расставляет их в нужном порядке