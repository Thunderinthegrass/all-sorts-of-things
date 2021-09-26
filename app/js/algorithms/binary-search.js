const arr =  [1,2,3,4,5,6,7,8,9,10,11,12];

// linear search
function searchElement(arr, elem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) {
      return i;
    }
  }
  return -1;
}
console.log(searchElement(arr, 2));

//binary search
function binarySearch(arr, elem) {
  let left = -1;
  let right = arr.length;//8

  while ((right - left) > 1) {
    const mid = Math.floor((left + right) / 2);//3

    if (arr[mid] === elem) {
      return mid;
    }
    if (arr[mid] > elem) {
      right = mid;
    }
    else {
      left = mid;
    }
  }
  return -1;
}
document.querySelector('.binary-search__arr').innerHTML = arr;
document.querySelector('.binary-search__result').innerHTML = binarySearch(arr, 8);


const arr1 = [95,8];
arr1.sort((a, b) => a - b);
console.log(arr1);

function countFreq(arr, el) {
  const posEl = binarySearch(arr, el);

  if (posEl === -1) {
    return 0;
  }

  let i = posEl;
  while (arr[i] === el) {
    i--;
  }

  let j = posEl;
  while (arr[j] === el) {
    j++;
  }

  return j - i - 1;
}

console.log(countFreq(arr1, 8));


// counter of letters in a line
let x = 'aaabbbcccdfff';
let y = 'eeerrrtttflglllllllltotoottitttpeeeeeeggg';
let x1 = '';
let count = 0;

function countStr(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      count++;
    }
    else{
      if (count == 0) {
        x1 += `${str[i]} `;
      }
      else{
        x1 += `${str[i] + (count + 1)} `;
        count = 0;
      }
    }
  }
  console.log(x1);
}
countStr(y);


// decor
let code = "const arr = [1,2,3,4,5,6,7,8,]; // linear search function searchElement(arr, elem) { for (let i = 0; i < arr.length; i++) { if (arr[i] === elem) { return i; } } return -1; } console.log(searchElement(arr, 5)); //binary search function binarySearch(arr, elem) { let left = -1; let right = arr.length;//8 while ((right - left) > 1) { const mid = Math.floor((left + right) / 2);//3 if (arr[mid] === elem) { return mid; } if (arr[mid] > elem) { right = mid; } else { left = mid; } } return -1; } console.log(binarySearch(arr, 8)); const arr1 = [1,12,15,8,17,2,4,9,3,3,3,12,8,3,4,5,3,3,4,9,2,3]; arr1.sort((a, b) => a - b); // console.log(arr1); function countFreq(arr, el) { const posEl = binarySearch(arr, el); if (posEl === -1) { return 0; } let i = posEl; while (arr[i] === el) { i--; } let j = posEl; while (arr[j] === el) { j++; } return j - i - 1; } console.log(countFreq(arr1, 3)); // counter of letters in a line let x = 'aaabbbcccdfff'; let y = 'eeerrrtttflglllllllltotoottitttpeeeeeeggg'; let x1 = ''; let count = 0; function countStr(str) { for (let i = 0; i < str.length; i++) { if (str[i] === str[i+1]) { count++; } else{ if (count == 0) { x1 += `${str[i]} `; } else{ x1 += `${str[i] + (count + 1)} `; count = 0; } } } console.log(x1); } countStr(y);";

let pre = document.querySelector('pre');
// let str = '';
// let str1 = 'ghbdtn';
// let preCode = pre.innerHTML;
// console.log(typeof preCode);
// preCode = `<span>${preCode}</span>`;
// console.log(preCode);



let codeSplit = code.split(' ');
console.log(codeSplit);

for (let i = 0; i < codeSplit.length; i++) {
  codeSplit[i] = `<span>${codeSplit[i]}</span>`;
  // if (codeSplit[i] === 'let') {
  //   codeSplit[i].classList.add('purple');
  // }
}
pre.innerHTML = codeSplit;

let span = document.querySelectorAll('span');

for (let i = 0; i < span.length; i++) {
  if (span[i].innerHTML == 'let' || span[i].innerHTML == 'const') {
    span[i].classList.add('purple');
  }
  // console.log(span[i].innerHTML);
}

let binsarr = [1,2,3,4,5,6,7,8,9,10];
function bins(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      return `индекс элемента ${i}`;
    }
  }
  return -1;
}

console.log(bins(binsarr, 8));












































//
