function createCalcFunction(n) {
  return function() {
    document.querySelector('.out').innerHTML = 10 * n;
  }
}
let z = createCalcFunction(10);
console.log(z);
z();

function multNum(n) {
  return function(num) {
    return n * num;
  }
}

const mult = multNum(5);
document.querySelector('.out-1').innerHTML = mult(50);

function urlGenerator(domain) {
  return function(url) {
    return `https://${url}.${domain}`;
  }
}
const getUrl = urlGenerator('com');
document.querySelector('.out-2').innerHTML = getUrl('nasachevskyroman');
