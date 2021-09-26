let offset = 0;
let rect = document.querySelector('.rect');
let btn = document.querySelector('.btn');
let rectWidth = rect.offsetWidth;
function move() {
    offset += 1;
    rect.style.transform = `translateY(${offset}px)`
    if (offset > 800) {
      return true;
    }
    setTimeout(move, 10);
}
btn.addEventListener('click', move);

function fact(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return n * fact(n - 1);
}

console.log(fact(5));
