// 1
function m1(m, n) {
  let cont1 = document.querySelector('.matrix-container-1');

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {

      if (i == 1) {
        cont1.innerHTML += 10 * j + ' ';
      }
      else {
        cont1.innerHTML += 10 + ' ';
      }
    }
    cont1.innerHTML += `<br>`;
  }
}
m1(5, 10);

//2
function m2(m, n) {
  let cont2 = document.querySelector('.matrix-container-2');

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      cont2.innerHTML += j;
      // arr = arr + '<br>';
    }
    cont2.innerHTML += '<br>';
  }
}
m2(5, 7);
