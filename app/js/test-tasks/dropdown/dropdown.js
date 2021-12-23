"use strict";
function dropDown() {
  const inp = document.querySelector('.dropdown__inp');
  const items = document.querySelector('.dropdown__items');
  const item = document.querySelectorAll('.dropdown__item');

  inp.addEventListener('click', () => {
    items.classList.add('active');
    items.classList.add('op1');
  })

  item.forEach((elem) => {
    elem.addEventListener('click', () => {
      items.classList.toggle('active');
      items.classList.toggle('op1');
      inp.value = elem.innerHTML;
    })
  })

  function searchHide() {
    document.addEventListener('click', (e) => {
      console.log(e.target);
      if (e.target != inp) {
        items.classList.remove('active');
        items.classList.remove('op1');
      }
    })
  }
  searchHide();

}
dropDown();