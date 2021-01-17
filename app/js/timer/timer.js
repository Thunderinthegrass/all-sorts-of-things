let timerItem = document.querySelectorAll('.timer__item');
let arrowBtnUp = document.querySelectorAll('.arrow-btn-up');
let arrowBtnDown = document.querySelectorAll('.arrow-btn-down');

for (let i = 0; i < timerItem.length; i++) {

  timerItem[i].value = '00';

  // timerItem[i].addEventListener('focus', ()=>{
  //     timerItem[i].value = '';
  // })

  function plusZero() {//добавляет ноль, если число в ячейке меньше 10
    if (timerItem[i].value < 10) {
      timerItem[i].value = '0' + +timerItem[i].value;
    }
  }

  //увеличение/уменьшение числа в ячейке по нажатию стрелок вверх-вниз
  arrowBtnUp[i].addEventListener('click', () => {
    timerItem[i].value = +timerItem[i].value + 1;
    plusZero();

    if (timerItem[2].value == 60) {//сброс миллисекунд на 0, если они равны 100
      
      timerItem[2].value = '00';
    }
  })

  arrowBtnDown[i].addEventListener('click', () => {
    if (timerItem[i].value > 0) {
      timerItem[i].value = +timerItem[i].value - 1;
      plusZero();
    }
  })


  //увеличение числа в ячейке по удержанию кнопки вверх
  arrowBtnUp[i].onmousedown = function () {
    let timeoutArrowUp = setTimeout(function () {
      let timerUp = setInterval(function () {
        timerItem[i].value = +timerItem[i].value + 1;

        plusZero();

        if (timerItem[3].value == 100) {//сброс миллисекунд на 0, если они равны 100
          clearInterval(timerUp);
          timerItem[3].value = '00';
        }

        if (timerItem[2].value == 60) {//сброс миллисекунд на 0, если они равны 100
          clearInterval(timerUp);
          timerItem[2].value = '00';
        }
        
      }, 70)

      arrowBtnUp[i].onmouseup = function () {
        clearInterval(timerUp);

        plusZero();
      }

    }, 300)

    arrowBtnUp[i].onmouseup = function () {
      clearTimeout(timeoutArrowUp);

      plusZero();
    }
  }

  // уменьшение числа в ячейке по удержанию кнопки вниз

  arrowBtnDown[i].onmousedown = function () {
    let timeoutArrowDown = setTimeout(function () {//задержка после того, как кнопка нажата
      let timerDown = setInterval(function () {//интервал увеличения числа при нажатой кнопке
        if (timerItem[i].value > 0) {
          timerItem[i].value = +timerItem[i].value - 1;
        }

        plusZero();
      }, 70)

      arrowBtnDown[i].onmouseup = function () {
        clearInterval(timerDown);//останавливаем интервал после mouseup

        plusZero();
      }

    }, 300)

    arrowBtnDown[i].onmouseup = function () {
      clearTimeout(timeoutArrowDown);//останавливаем таймаут, если mouseup произошло раньше, чем кончилась задержка таймаута

      plusZero();
    }
  }


  // arrowBtnUp[i].addEventListener('mouseup', ()=>{
  //   clearTimeout(timeoutArrow);
  // })
}

let start = document.querySelector('.timer-start-btn');
let stop = document.querySelector('.stop');
let dis = document.querySelector('.discharge');





let ms = +document.querySelector('.mil-seconds').value;
// ms = +ms + 1;

document.querySelector('.mil-seconds').value = +ms;


start.addEventListener('click', () => {//запуск убывания миллисекунд
  let ms = +document.querySelector('.mil-seconds').value;
  let msDown = setInterval(function () {
    document.querySelector('.mil-seconds').value = ms;
    console.log(ms);
    console.log(typeof ms);
    if (ms > 0) {
      ms--;
    }
    else {
      clearInterval(msDown);
      plusZero();
    }

  }, 10)

  if (ms == 0) {
    clearInterval(msDown);
    sDown();
  }

})

let s = +document.querySelector('.seconds').value;
function sDown() {//запуск убывания секунд
  let s = +document.querySelector('.seconds').value;
  let sDown = setInterval(function () {
    document.querySelector('.seconds').value = s;
    console.log(s);
    console.log(typeof s);
    if (s > 0) {
      s--;
    }
    else {
      clearInterval(sDown);
      plusZero();
    }

  }, 1000)

  if (s == 0) {
    clearInterval(sDown);
  }

}

plusZero();


// let s = document.querySelector('.seconds');
let m = document.querySelector('.minutes');
let h = document.querySelector('.hours');
