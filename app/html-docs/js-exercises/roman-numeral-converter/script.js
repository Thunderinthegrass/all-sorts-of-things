const decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanValue = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

const romes = {'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1};

function romanConverterOne(a) {
  let result = '';
  decimalValue.map( (item, index) => {
    while (item <= a) {
      result += romanValue[index];
      a = a - item;
      console.table({
        "item": item,
        "index": index,
        "a" : a + item,
        "item" : item,
        "a = a - item" : a,
        "result" : result
      })
      // debugger;
    }
  })
  return result;
}





document.querySelector('.btn').onclick = () => {
  let num = +document.querySelector('input').value;
  document.querySelector('.out').innerHTML = romanConverterOne(num);
}