let z = 'AAAAABBBBBCCCCCDDDDDE';
let y = '';
let out = document.querySelector('.out');
let out1 = document.querySelector('.out-1');
let x = 0;

// for (let i = 0; i < z.length; i++) {
//   if (i < (z.length-1)) {
//     if (z[i] != z[i+1]) {
//       x = i;
//       out.innerHTML += `${z[i]} ${x}`;
//     }
//   }
// }

// out.innerHTML = x;

// function str(a) {
//   if (a == '') {
//     return
//   }

//   let str1 = '';

//   for (let i = 0; i < a.length; i++) {
//     if (i < (a.length-1)) {
//           if (a[i] != a[i+1]) {
//             x = i;
//             out.innerHTML += `${a[i]} ${x}`;
//           }
//         }
//   }

// }

// str(z);


function rle(str) {
  if(str.match(/[^A-Z]/g)) {
      throw new Error(`${str} is invalid!`);
  }
  
  let result = '';
  
  for(let i = 0; i < str.length; i++) {
      let char = str[i];
      let j = i;
      console.log(str[j]);

      
      if(char === str[++j]) {
          let count = 1;
          
          while (char === str[j++]) {
              count++;
          }
          
          result += `${char}${count}`;
          i += count - 1;
      } else {
          result += char;
      }
  }
  
  out.innerHTML = result;
}

rle(z);