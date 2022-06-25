function myFunc(callback) {
  const a = [4, 5, 6];
  const b = [8, 9, 25];
  let element = document.querySelector('.out-1');
  callback(element, b);
}

function out(elem, arr) {
  elem.innerHTML = arr.join('-');
}

function out2(elem, arr) {
  elem.innerHTML = arr.join(' и ');
}

myFunc(out2);

// =====================================

function getBeers(callback2) {
  fetch('https://api.sampleapis.com/beers/ale')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      callback2(data);
    })
}

function showBeers(d) {
  d.forEach(item => document.querySelector('.out-2').innerHTML += item.name + '; ');
}

function showBeers2(d) {
  d.forEach(item => document.querySelector('.out-3').innerHTML += item.id + '; ');
}

getBeers(showBeers2);
